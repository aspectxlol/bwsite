import Link from "next/link";
import NavCSS from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-primary p-5 md:px-28">
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
    </nav>
  );
}