"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          Atta Khan
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Spinning Box
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            Slider
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Particle Cursor
          </Link>
          <Link href="/feature" className="hover:text-gray-300">
            Particle
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 px-4 flex flex-col space-y-4 bg-gray-800 py-4">
          <Link href="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link href="/feature" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
