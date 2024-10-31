
import Link from "next/link";
import NavCSS from './Navbar.module.css'
import { useState, useEffect, useRef, useContext } from "react";
import Hamburger from "./icons/Hamburger";
import { ThemeContext } from "~/providers/ThemeProvider";
import ThemeToggle from "./buttons/ThemeToggle";

export default function Navbar() {
  const theme = useContext(ThemeContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const links: { name: string; href: string }[] = [
    { name: 'About', href: '/about' }
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);


  return (
    <nav className="flex items-center justify-between bg-primary p-5 md:px-28 shadow-2xl rounded-b-lg absolute top-0 z-50 w-full">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-text font-bold text-2xl">
          SemaBW
        </Link>
      </div>
      <div className="items-center gap-4 hidden md:flex ">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className={`${NavCSS['nav-links']}`}>
            {link.name}
          </Link>
        ))}
      </div>
      <div>
        <ThemeToggle />
        <div ref={dropdownRef} className="block md:hidden">
          <button>
            <Hamburger className="" onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
          </button>
          <div
            className={`absolute right-4 z-20 w-48 py-2 mt-2 origin-top-right bg-accent rounded-md shadow-2xl ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} transition-all ease-out duration-100`}
          >
            <button className={`${NavCSS['dropdown-links']}`} onClick={() => theme.toggleTheme()}> {theme.theme === 'light' ? 'Dark' : 'Light'}</button>
            <hr className="border-gray-200 border-2" />
            {links.map((link) => (
              <Link key={link.name} href={link.href} className={`${NavCSS['dropdown-links']}`}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}