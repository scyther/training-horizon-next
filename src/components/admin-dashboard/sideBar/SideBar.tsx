// components/Sidebar.js
import Image from "next/image";
import { useState } from "react";

var demoData = {
    Profile: "/img/dashboard/image.svg",
    Name: "Devon Laratte",
    Date: "16 August 2024",
    seats: 40,
    Price: "$50/Seats",
    Languages: "English, Spanish",
    Location: "Chicago, United States",
  };
  

function Sidebar() {
  const [activeButton, setActiveButton] = useState<string | null>("Dashboard");

  const handleClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <aside className="bg-blue-50 p-4 w-64">
      <div className="mb-12 flex justify-center">
        <Image
          src="/img/dashboard/logo.svg"
          alt="Logo"
          width={180}
          height={120}
        />
      </div>

      <nav>
        <ul>
          <li className="mb-2">
            <button
              onClick={() => handleClick("Profile")}
              className={`flex flex-row rounded-lg w-full p-2 ${
                activeButton === "Profile"
                  ? "bg-[#17A8FC] text-white"
                  : " text-black"
              }`}
            >
              <img
                className="mx-2"
                src="/img/dashboard/profile.svg"
                alt="dashboardlogo"
              />
              Profile
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => handleClick("Dashboard")}
              className={`flex flex-row rounded-lg w-full p-2 ${
                activeButton === "Dashboard"
                  ? "bg-[#17A8FC] text-white"
                  : " text-black"
              }`}
            >
              <img
                className="mx-2"
                src="/img/dashboard/dashboardlogo.svg"
                alt="dashboardlogo"
              />
              Dashboard
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => handleClick("Refund")}
              className={`flex flex-row rounded-lg w-full p-2 ${
                activeButton === "Refund"
                  ? "bg-[#17A8FC] text-white"
                  : " text-black"
              }`}
            >
              <img
                className="mx-2"
                src="/img/dashboard/profile.svg"
                alt="dashboardlogo"
              />
              Refund
            </button>
          </li>
        </ul>
      </nav>

      {/* <div className="bg-white shadow-lg rounded-lg hover:shadow-xl hover:bg-blue-50 mt-4 p-4 w-56">
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-between bg-[#17A8FC] w-full rounded-lg py-1 px-2 mb-2">
            <span className="bg-[#17A8FC] text-white text-sm font-semibold ">
              Trainer Rank #2
            </span>
            <span className="flex items-center text-white text-sm ">
              ⭐ 4.7
            </span>
          </div>
          <Image
            src={demoData.Profile}
            alt="Devon Laratte"
            width={80}
            height={80}
            className="rounded-full mb-4"
          />
          <h2 className="text-xl font-bold">{demoData.Name}</h2>

          <div className="flex items-center mb-2 text-gray-500">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 10h10v2H7zM7 13h7v2H7z" />
              <path
                fillRule="evenodd"
                d="M5 3a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V6a3 3 0 00-3-3H5zm0 2h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>{demoData.Date}</span>
          </div>
          <div className="flex items-center mb-2 text-gray-500">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3C8.13 3 5 6.13 5 10c0 3.75 3.5 6.86 8.55 11.54a1.42 1.42 0 001.9 0C15.5 16.86 19 13.75 19 10c0-3.87-3.13-7-7-7zm0 15a1.5 1.5 0 01-1.41-1.41c-.58-.59-1.02-1.23-1.41-1.88-.35-.56-.61-1.08-.79-1.59A3.5 3.5 0 1112 18z" />
            </svg>
            <span>
              {demoData.seats}{" "}
              <span className="text-green-500">({demoData.Price})</span>
            </span>
          </div>
          <div className="flex items-center mb-2 text-gray-500">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5 4v16h2v-6h10v6h2V4H5zm3 8V6h8v6H8z" />
            </svg>
            <span>{demoData.Languages}</span>
          </div>
          <div className="flex items-center mb-4 text-gray-500">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3h-4.18C14.4 1.83 13.3 1 12 1S9.6 1.83 9.18 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-7 16V5h14v14H5z" />
            </svg>
            <span>{demoData.Location}</span>
          </div>
          <div className="flex justify-between w-full ">
            <button className="bg-gray-200 hover:shadow-lg hover:bg-gray-300 text-gray-700 py-2 px-2 rounded-lg">
              Next +4
            </button>
            <button className="bg-[#17A8FC] hover:bg-blue-500 hover:shadow-lg text-white  py-2 px-2 rounded-lg">
              Approve
            </button>
          </div>
        </div>
      </div> */}
      <nav>
        <ul>
          <li className="mb-2 mt-2 w-48">
            <button
              onClick={() => handleClick("Account Setting")}
              className={`flex flex-row rounded-lg w-full p-2 ${
                activeButton === "Account Setting"
                  ? "bg-[#17A8FC] text-white"
                  : " text-black"
              }`}
            >
              <img
                className="mx-2"
                src="/img/dashboard/setting.svg"
                alt="dashboardlogo"
              />
              Account Setting
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => handleClick("Log Out")}
              className={`flex flex-row rounded-lg w-full p-2 ${
                activeButton === "Log Out"
                  ? "bg-[#17A8FC] text-white"
                  : " text-black"
              }`}
            >
              <img
                className="mx-2"
                src="/img/dashboard/logout.svg"
                alt="dashboardlogo"
              />
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;