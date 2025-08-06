'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/20 backdrop-blur-md border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-3">
              <Image 
                src="/logo.jpg" 
                alt="Autopilot Browser Logo" 
                width={48}
                height={48}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg"
              />
              <h1 className="text-lg sm:text-2xl font-bold text-white tracking-wider uppercase font-orbitron leading-tight">
                Autopilot Browser
              </h1>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-6 sm:ml-10 flex items-center space-x-6 sm:space-x-10">
              <Link
                href="/#features"
                className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-200 relative group font-orbitron tracking-wide"
              >
                Features
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#1D4ED8] scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-200 relative group font-orbitron tracking-wide"
              >
                About
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#1D4ED8] scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link
                href="/#download"
                className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-200 relative group font-orbitron tracking-wide"
              >
                Download
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#1D4ED8] scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            </div>
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/30 backdrop-blur-lg border-t border-white/10 rounded-b-xl">
              <Link
                href="/#features"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium font-orbitron tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium font-orbitron tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#download"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium font-orbitron tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
