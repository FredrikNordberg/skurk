"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img src="/skurk-logo.png" alt="SKURK Logo" className="h-30 w-auto" />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/roster" className="hover:text-yellow-400 transition">
              Roster
            </Link>
          </li>
          <li>
            <Link href="/matches" className="hover:text-yellow-400 transition">
              Matches
            </Link>
          </li>
          {/* <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li> */}
        </ul>

        {/* Hamburger icon (only mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 pb-4">
          <li>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/roster" onClick={toggleMenu}>
              Roster
            </Link>
          </li>
          <li>
            <Link href="/matches" onClick={toggleMenu}>
              Matches
            </Link>
          </li>
          <li>
            {/* <Link href="/contact" onClick={toggleMenu}>
              Contact
            </Link> */}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
