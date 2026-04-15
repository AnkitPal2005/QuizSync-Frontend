'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="md:hidden text-gray-600 hover:text-gray-900"
        aria-label="Toggle menu"
      >
        <svg 
          className="h-6 w-6" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12"></path>
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          )}
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link 
              href="/features" 
              className="block text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className="block text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="block text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div className="pt-3 border-t border-gray-200 space-y-2">
              <Link 
                href="/login" 
                className="block text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsOpen(false)}
              >
                Log in
              </Link>
              <Link 
                href="/signup" 
                className="block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
