
"use client";

import React, { useState } from "react";
import SideLayout from "./SideLayout";
import MainDetailPage from "./MainDetailPage";
import InstructorsPage from "../UserFlow/Instructor";
import Reviews from "./Reviews";


function ListingDetail() {
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const [isOpen, setIsOpen] = useState(false);

  const tabs = ["Overview", "Instructors", "Curriculum", "Reviews", "FAQs"];
  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-6">
        <MainDetailPage />
        <SideLayout />
      </div>
      <Reviews />
      <InstructorsPage />
    </>
  );
}

export default ListingDetail;
