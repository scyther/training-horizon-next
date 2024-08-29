// components/CourseCard.tsx
"use client";

import InstructorsPage from "@/components/UserFlow/Instructor";
import React, { useState } from "react";

function CourseCard() {
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const [isOpen, setIsOpen] = useState(false);

  const tabs = ["Overview", "Instructors", "Curriculum", "Reviews", "FAQs"];

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-6">
        {/* Left Section: Image or Icon */}
        <div className="bg-white rounded-md p-4 mb-4">
          <div className="relative h-64 w-full">
            <img
              className="h-[25rem] w-[55rem]"
              src="/img/math.svg"
              alt="Calculator and Tools"
            />
          </div>
        </div>

        {/* Middle Section: Course Info */}
        <div className="flex-grow">
          <span className="bg-[#17A8FC] text-white p-1.5 rounded-3xl">
            Education
          </span>
          <h2 className="text-2xl font-bold mt-2">Mathematics</h2>
          <p className="text-gray-600 mt-2">
            Mathematics is one of the most important subjects. Mathematics is a
            subject of numbers, shapes, data, measurements and also logical
            activities. It has a huge scope in every field of our life, such as
            medicine, engineering, finance, natural science, economics, etc. We
            are all surrounded by a mathematical world.
          </p>
          <div className="mt-4 flex space-x-6 text-sm text-gray-600">
            <span>50+ People Enrolled</span>
            <span>5 Projects</span>
            <span>37+ Reviews</span>
          </div>
          <div className="m-8">
            <button className="bg-[#17A8FC] text-white py-3 px-8 rounded mb-8 hover:bg-[#1782fc] shadow-xl">
              Learn Mathematics with Best Teachers
            </button>
          </div>
        </div>

        {/* Right Section: Class Details */}
        <div className="bg-blue-50 rounded-lg p-4 max-w-full">
          {/* <h3 className="text-lg font-semibold text-gray-800 mb-4">
            What you'll learn from this class
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>How to realize the benefits of SAFe, including:</li>
            <li>
              How to establish Team and Technical Agility and organize around
              the flow of value
            </li>
            <li>
              How to align massive organizations around clear, common objectives
            </li>
            <li>
              How to participate successfully in critical SAFe events, such as
              PI Planning
            </li>
            <li>How to adopt a customer-centric mindset</li>
          </ul> */}

          <div className="w-80 mx-auto p-4">
            {/* Price Section */}
            <div className="bg-white rounded-md shadow p-4 text-center mb-4">
              <p className="text-lg font-medium">$30/hr</p>
            </div>

            {/* Button Section */}
            <button
              onClick={openPopup}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 rounded-md shadow mb-4"
            >
              Reply to Listing
            </button>

            {/* Pop-Up Card */}
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
                  <h2 className="text-xl font-bold mb-4">Send a Message</h2>
                  <textarea
                    className="w-full border border-gray-300 rounded-md p-2 mb-4"
                    rows={8}
                    placeholder="Type your message here..."
                  ></textarea>
                  <div className="flex justify-end">
                    <button
                      onClick={closePopup}
                      className="mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md"
                    >
                      Cancel
                    </button>
                    <button className="px-4 py-2 bg-[#17A8FC] hover:bg-blue-500 text-white rounded-md">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Review and Report Section */}
            <div className="bg-white rounded-md shadow p-4 text-center mb-4">
              <p onClick={openPopup} className="text-gray-600 hover:underline">
                <span className="inline-block mr-2">⭐</span> Write a Review
              </p>
              <p className="text-gray-600 mt-2 hover:underline">
                <span className="inline-block mr-2 ">🚩</span> Report Listing
              </p>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-md shadow p-4 mb-4">
              <div className="relative h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12093.710241102668!2d-73.9881358!3d40.7325491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af2f6f333d%3A0x479e7a2b14b9d17c!2sUnion%20Square%20Park!5e0!3m2!1sen!2sus!4v1628540715009!5m2!1sen!2sus"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 m-4 bg-white shadow rounded-lg max-w-7xl mx-auto">
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab) }
              
              className={`flex-grow py-2 text-center text-sm font-medium focus:outline-none ${
                activeTab === tab
                  ? "text-blue-800 border-b-4 border-blue-800"
                  : "text-blue-600 border-b-4 border-transparent hover:text-blue-800 hover:border-blue-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="text-left">
          <h2 className="text-2xl font-bold mb-4">Mathematics</h2>
          <br />
          <p className="text-gray-700 mb-4">
            As children, we absorb information and learn from experiences that
            mold us into who we are. Many individuals impact a child's life, but
            the most powerful and influential role lies in a devoted teacher; a
            teacher provides growth to students as a gardener would to a garden
            of flowers.
          </p>
          <p className="text-gray-700 mb-4">
            Each child can bloom into a thriving flower so long as you water
            their garden with optimism, love, patience, and guidance. Throughout
            my educational experiences, I was lucky enough to have educators who
            poured their knowledge and optimism into me, and now I would like to
            reciprocate that back to students who are in the position I was once
            in.
          </p>
          <p className="text-gray-700 mb-4">
            Balancing life and school is hard enough for a student, but a
            powerful and caring teacher can steer you in the right direction. In
            this autobiography, you will read about my educational background,
            experiences that influenced my decision to become a teacher, and
            what I believe the role of a teacher should be in a student's life.
          </p>
          <p className="text-gray-700">
            As a student, I went to multiple schools, I went to three different
            elementary schools, two middle schools, and two high schools in
            Brownsville, and through it all, I had great experiences.
            Brownsville is a humble community with low socioeconomic status, but
            rich in culture, history, and unity. In retrospect, the
            socioeconomic status was changing as I attended different schools,
            depending on the area of the school, of course.
          </p>
        </div>
      </div>
      <InstructorsPage />
    </>
  );
}

export default CourseCard;
