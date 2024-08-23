"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-300 sticky top-0 z-50">
      <div className="">
        <div className="p-5">
          <div className="hidden md:flex  justify-between ">
            <div>
            <Link href="/" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
              Courses
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            </div>
            <div>
            <Link href="/Dashboard/Teacher/join_as_teacher" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
              Join as Teacher
            </Link>
            <Link href="/Userflow/login" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
              Log in
            </Link>
            <Link href="/Userflow/signup" className="bg-yellow-500 text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-yellow-600">
              Sign Up
            </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link href="/courses" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
            Courses
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
          <Link href="/join" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
            Join as Teacher
          </Link>
          <Link href="/login" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
            Log in
          </Link>
          <Link href="/signup" className="bg-yellow-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-600">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
