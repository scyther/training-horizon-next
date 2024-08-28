// components/CourseCard.tsx
"use client";
import InstructorsPage from "@/components/UserFlow/Instructor";
import React, { useState } from "react";

function CourseCard() {

  const [activeTab, setActiveTab] = useState<string>("Overview");

  const tabs = ["Overview", "Instructors", "Curriculum", "Reviews", "FAQs"];

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-6">
        {/* Left Section: Image or Icon */}
        <div className="">
          <img
            className="h-[20rem] w-[40rem]"
            src="/img/math.png"
            alt="Calculator and Tools"
          />
        </div>

        {/* Middle Section: Course Info */}
        <div className="flex-grow">
          <h2 className="text-2xl font-bold">Mathematics</h2>
          <p className="text-gray-600 mt-2">
            Java programs are easy to understand, structured, and less prone to
            errors. Also, they are platform independent and portable which makes
            it a good choice for mobile, web, and desktop applications. So, if
            you are looking for a career in software development then it is good
            to start with the Java language.
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
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
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
          </ul>
        </div>
      </div>
      

      <div className="p-8 m-4 bg-white shadow rounded-lg max-w-7xl mx-auto">
      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-grow py-2 text-center text-sm font-medium focus:outline-none ${
              activeTab === tab
                ? 'text-blue-800 border-b-4 border-blue-800'
                : 'text-blue-600 border-b-4 border-transparent hover:text-blue-800 hover:border-blue-500'
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
          As children, we absorb information and learn from experiences that mold us into who we are. Many individuals impact a child's life, but the most powerful and influential role lies in a devoted teacher; a teacher provides growth to students as a gardener would to a garden of flowers.
        </p>
        <p className="text-gray-700 mb-4">
          Each child can bloom into a thriving flower so long as you water their garden with optimism, love, patience, and guidance. Throughout my educational experiences, I was lucky enough to have educators who poured their knowledge and optimism into me, and now I would like to reciprocate that back to students who are in the position I was once in.
        </p>
        <p className="text-gray-700 mb-4">
          Balancing life and school is hard enough for a student, but a powerful and caring teacher can steer you in the right direction. In this autobiography, you will read about my educational background, experiences that influenced my decision to become a teacher, and what I believe the role of a teacher should be in a student's life.
        </p>
        <p className="text-gray-700">
          As a student, I went to multiple schools, I went to three different elementary schools, two middle schools, and two high schools in Brownsville, and through it all, I had great experiences. Brownsville is a humble community with low socioeconomic status, but rich in culture, history, and unity. In retrospect, the socioeconomic status was changing as I attended different schools, depending on the area of the school, of course.
        </p>
      </div>
    </div>
    <InstructorsPage/>
    </>
  );
};

export default CourseCard;
