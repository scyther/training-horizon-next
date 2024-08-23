"use client"

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  // State to track the active button
  const [activeButton, setActiveButton] = useState('');

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      {/* Topbar */}
      <div className="w-full h-full py-2 bg-[#032031] flex justify-between items-center px-4 md:px-8 lg:px-16">
        
        {/* Left Side: Empty div to balance the layout */}
        <div className="hidden md:block w-1/3"></div>

        {/* Center: Navigation Buttons */}
        <div className="flex justify-center space-x-4 w-full md:w-1/3">
          <Link href='/'>
            <button 
              className={`${activeButton === 'Home' ? 'font-bold' : 'font-normal'} text-white text-sm md:text-base`}
              onClick={() => handleClick('Home')}
            >
              Home
            </button>
          </Link>
          <Link href='/Dashboard/instructors'>
            <button 
              className={`${activeButton === 'Instructors' ? 'font-bold' : 'font-normal'} text-white text-sm md:text-base`}
              onClick={() => handleClick('Instructors')}
            >
              Instructors
            </button>
          </Link>
          <button 
            className={`${activeButton === 'About Us' ? 'font-bold' : 'font-normal'} text-white text-sm md:text-base`}
            onClick={() => handleClick('About Us')}
          >
            About Us
          </button>
          <button 
            className={`${activeButton === 'Contact' ? 'font-bold' : 'font-normal'} text-white text-sm md:text-base`}
            onClick={() => handleClick('Contact')}
          >
            Contact
          </button>
        </div>

        {/* Right Side: Login and Sign Up Buttons */}
        <div className="flex justify-end space-x-4 w-full md:w-1/3">
          <button 
            className={`${activeButton === 'Login' ? 'font-bold' : 'font-normal'} text-white text-sm md:text-base`}
            onClick={() => handleClick('Login')}
          >
            Login
          </button>
          <Link href='/Userflow/signup'>
            <button 
              className={`${activeButton === 'Sign Up' ? 'font-bold' : 'font-normal'} text-white border rounded-md py-2 px-3 border-blue-300 text-sm md:text-base`}
              onClick={() => handleClick('Sign Up')}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>

    </>
  );
}
