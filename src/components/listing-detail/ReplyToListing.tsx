// components/CourseCard.tsx
"use client";

import React, { useState } from "react";

function ReplyToListing() {
  const [name, setName] = useState("user");
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, message }),
    });
    if (response.ok) {
      alert("Review submitted!");
      setName("");
      setMessage("");
    } else {
      alert("Error submitting review.");
    }
  };
  return (
    <>
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
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
              rows={8}
              placeholder="Type your message here..."
              required
            ></textarea>

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
    </>
  );
}

export default ReplyToListing;
