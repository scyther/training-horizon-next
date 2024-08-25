"use client"

import { useState } from "react";
import Link from "next/link";

export default function Topbar() {
  // State to track the active button
  const [activeButton, setActiveButton] = useState('');

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      {/* Topbar */}
      <div className="w-full h-[72px] bg-[#032031] flex justify-between items-center px-4 md:px-8 lg:px-16">
        
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
          <Link href='/Dashboard/signup'>
            <button 
              className={`${activeButton === 'Sign Up' ? 'font-bold' : 'font-normal'} text-white border rounded-md py-2 px-3 border-blue-300 text-sm md:text-base`}
              onClick={() => handleClick('Sign Up')}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* div for handling both the vector images */}
      <div className="relative bg-[#032031] flex justify-between">
        <svg className="h-[256px] w-full md:w-[632px]" viewBox="0 0 633 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.12735 0.00192796C106.973 51.715 206.841 138.53 236.679 227.834C184.171 147.975 83.4445 70.4361 0 44.7609V78.8621C267.403 205.29 189.996 318.851 445.685 457.956H522.57C439.359 420.206 363.474 368.649 314.113 291.81L314.097 291.796V291.786L314.113 291.809C395.407 366.417 504.91 425.423 632.142 457.956H632.889V328.401C491.005 296.931 392.801 248.236 332.893 194.338C407.17 241.128 529.078 281.018 632.889 293.477V244.472C507.567 236.467 374.62 188.126 282.762 127.304C226.526 90.0658 179.897 40.5962 93.2123 0H5.12601L5.12735 0.00192796ZM478.387 99.4389C460.563 99.4389 446.113 109.829 446.113 122.647C446.113 135.465 460.563 145.858 478.387 145.858C496.211 145.858 510.66 135.465 510.66 122.647C510.66 109.829 496.211 99.4389 478.387 99.4389ZM7.79899 132.317C84.5188 175.736 176.547 268.58 159.932 325.3C156.874 324.477 153.635 324.053 150.37 324.049C135.147 324.049 122.808 332.922 122.808 343.87C122.808 354.815 135.147 363.69 150.37 363.69C161.139 363.69 170.442 359.236 174.975 352.759C184.011 343.246 185.731 324.731 184.202 305.836C178.612 236.572 111.45 163.108 7.79899 132.317ZM571.968 138.21C548.109 138.21 528.205 150.385 523.619 166.567C483.732 173.482 428.153 166.432 385.549 151.73C441.024 185.054 502.375 203.289 562.25 208.491C565.391 208.944 568.641 209.186 571.967 209.186C599.222 209.186 621.313 193.295 621.313 173.696C621.313 154.098 599.224 138.209 571.967 138.209L571.968 138.21ZM197.634 256.685C213.275 289.6 219.838 333.465 210.845 367C199.936 372.579 192.811 381.738 192.811 392.097C192.811 409.096 211.974 422.877 235.614 422.877C259.254 422.877 278.416 409.097 278.416 392.097C278.416 386.006 275.949 380.335 271.704 375.556L197.634 256.686V256.685Z" fill="#0D364F"/>
        </svg>

        <svg width="626" height="254" viewBox="0 0 626 254" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M620.928 0.395218C520.192 51.5454 421.41 137.416 391.897 225.748C443.833 146.758 543.464 70.0628 626 44.667V78.397C361.508 203.449 438.072 315.774 185.166 453.364H109.118C191.424 416.025 266.482 365.029 315.306 289.027L315.322 289.013V289.003L315.306 289.026C234.897 362.822 126.586 421.185 0.738953 453.364H0V325.22C140.34 294.092 237.475 245.927 296.731 192.616C223.262 238.897 102.68 278.353 0 290.676V242.204C123.958 234.286 255.458 186.471 346.316 126.311C401.94 89.4788 448.061 40.5476 533.802 0.393311H620.93L620.928 0.395218ZM152.82 98.7499C170.45 98.7499 184.743 109.026 184.743 121.705C184.743 134.384 170.45 144.664 152.82 144.664C135.19 144.664 120.898 134.384 120.898 121.705C120.898 109.026 135.19 98.7499 152.82 98.7499ZM618.286 131.27C542.401 174.217 451.375 266.05 467.809 322.152C470.834 321.338 474.037 320.919 477.267 320.915C492.324 320.915 504.529 329.692 504.529 340.52C504.529 351.346 492.324 360.125 477.267 360.125C466.615 360.125 457.413 355.719 452.93 349.313C443.992 339.903 442.29 321.59 443.803 302.9C449.332 234.39 515.763 161.726 618.286 131.27ZM60.2576 137.099C83.8575 137.099 103.544 149.142 108.081 165.147C147.534 171.987 202.507 165.014 244.648 150.472C189.776 183.433 129.093 201.469 69.87 206.615C66.7631 207.063 63.5488 207.302 60.2589 207.302C33.3 207.302 11.4498 191.585 11.4498 172.199C11.4498 152.814 33.2987 137.098 60.2589 137.098L60.2576 137.099ZM430.517 254.284C415.046 286.841 408.555 330.229 417.45 363.399C428.241 368.917 435.287 377.976 435.287 388.222C435.287 405.037 416.333 418.668 392.951 418.668C369.568 418.668 350.614 405.038 350.614 388.222C350.614 382.198 353.055 376.588 357.254 371.861L430.517 254.285V254.284Z" fill="#0D364F"/>
        </svg>
      </div>
    </>
  );
}
