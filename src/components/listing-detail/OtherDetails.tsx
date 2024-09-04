// components/CourseCard.tsx
"use client";
import React, { useState } from "react";


function OtherDetails() {
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const [isOpen, setIsOpen] = useState(false);

  const tabs = ["Overview", "Instructors", "Curriculum", "Reviews", "FAQs"];

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <div className="p-8 m-4 bg-white shadow rounded-lg max-w-7xl mx-auto">
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
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
    </>
  );
}

export default OtherDetails;
