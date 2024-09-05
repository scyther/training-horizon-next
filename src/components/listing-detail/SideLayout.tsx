// components/CourseCard.tsx
"use client";
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import React, { useState } from "react";
import ReplyToListing from "./ReplyToListing";

function SideLayout() {
  const [name, setName] = useState("user");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const [isOpen, setIsOpen] = useState(false);


  const form = useSelector((state: RootState) => state.form);
  const tabs = ["Overview", "Instructors", "Curriculum", "Reviews", "FAQs"];

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    closePopup();
    e.preventDefault();
    const response = await fetch("http://localhost:3005/api/v1/review/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, review, rating }),
    });
    if (response.ok) {
      alert("Review submitted!");
      setName("");
      setReview("");
      setRating(5);
    } else {
      alert("Error submitting review.");
    }
    
  };
  return (
    <>
      {/* Right Section: Class Details */}
      <div className="bg-blue-50 rounded-lg p-4 max-w-full">
        <div className="w-80 mx-auto p-4">
          {/* Price Section */}
          <div className="bg-white rounded-md shadow p-4 text-center mb-4">
            <p className="text-lg font-medium">${form.price}</p>
          </div>

          {/* Button Section */}
          <ReplyToListing />

          {/* Pop-Up Card */}
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
                <h2 className="text-xl font-bold mb-4">Send a Feedback</h2>
                <textarea
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 mb-4"
                  rows={8}
                  placeholder="Type your message here..."
                  required
                ></textarea>
                <select
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <option key={star} value={star}>
                      {star} Star{star > 1 && "s"}
                    </option>
                  ))}
                </select>
                <div className="flex justify-end">
                  <button
                    onClick={closePopup}
                    className="mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-[#17A8FC] hover:bg-blue-500 text-white rounded-md"
                  >
                    Send
                  </button>
                </div>
                <div className="container mx-auto"></div>
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
    </>
  );
}

export default SideLayout;
