import Link from "next/link";
import NavCSS from './Navbar.module.css'
import { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme
    = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

  return (
    <nav className="flex items-center justify-between bg-primary p-5 md:px-28 shadow-2xl rounded-b-lg absolute top-0 z-50 w-full">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-text font-bold text-2xl">
          SemaBW
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/" className={`${NavCSS['nav-links']}`}>
          Home
        </Link>
        <Link href="/" className={`${NavCSS['nav-links']}`}>
          About
        </Link>
        <Link href="/" className={`${NavCSS['nav-links']}`}>
          Contact
        </Link>
      </div>
      <div>
        <button className="text-text font-bold text-2xl transition-all" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </div>
    </nav>
  );
}