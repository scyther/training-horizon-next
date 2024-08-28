import React from "react";
import Card from "@/components/trainer-dashboard/Card";
import Image from "next/image";
import kirillmenko from "@/data/teachers/kirill"

interface TeacherProps {
  name: string;
  email: string;
  mobileNo: string;
  teacherId: string;
  location: string;
  imageUrl: string;
  about: string;
  workHistory: string;
  education: string;
  publication: string;
  linkedin: string;
//   cardData: Array<{
//     icon?: React.ReactNode;
//     title: string;
//     description: string;
//   }>;
}

const TeacherProfile: React.FC = ({
  name,
  email,
  mobileNo,
  teacherId,
  location,
  imageUrl,
  about,
  workHistory,
  education,
  publication,
  linkedin,
  // cardData,
}: any) => {
  return (
    <div className="absolute bg-white w-full max-w-[1650px] h-auto top-[90px] left-[50%] transform -translate-x-1/2 rounded-[10px]  border-gray-300 shadow-md z-20 p-6">
      <div className="flex flex-col md:flex-row mx-5 md:mx-10 mt-5 space-y-10 md:space-y-0 md:space-x-10 lg:space-x-28">
        <div className="md:w-[500px] relative">
          <p className="flex justify-center mb-2 text-blue-400 text-xl md:text-xl">
            #Ranked in Top 10 Teachers
          </p>
          <Image
            alt="Teacher"
            className="rounded-full h-[180px] w-[180px] md:h-[230px] md:w-[230px] mx-auto mb-5 object-cover"
            src={imageUrl}
            width={230}
            height={230}
          />

          <h1 className="font-bold text-[24px] md:text-[32px] text-center text-[#292929]">
            {name}
          </h1>
          <h3 className="text-center text-gray-400">Professional</h3>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="gray"
              className="size-5 mt-1"
            >
              <path
                fill-rule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clip-rule="evenodd"
              />
            </svg>
            <h3 className="text-center text-gray-400 mt-1">{location}</h3>
          </div>

          <h2 className="mt-10 font-bold">Teacher Details</h2>
          <hr className="h-px my-3 bg-gray-200 border-0" />
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#BDBDBD"
                  className="size-5 mt-0.5 mr-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p>Name</p>
              </div>
              <p>{kirillmenko.name}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#BDBDBD"
                  className="size-5 mt-0.5 mr-1"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                <p>Mail Address</p>
              </div>
              <p>{kirillmenko.email}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 13 12"
                  fill="#BDBDBD"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 mt-0.5 mr-1"
                >
                  <path
                    d="M9.03725 7.60403L8.73392 7.90603C8.73392 7.90603 8.01192 8.62336 6.04192 6.66469C4.07192 4.70603 4.79392 3.98869 4.79392 3.98869L4.98459 3.79803C5.45592 3.33003 5.50059 2.57803 5.08925 2.02869L4.24925 0.906694C3.73992 0.226694 2.75659 0.136694 2.17325 0.716694L1.12659 1.75669C0.83792 2.04469 0.644586 2.41669 0.66792 2.83003C0.72792 3.88803 1.20659 6.16336 3.87592 8.81803C6.70725 11.6327 9.36392 11.7447 10.4499 11.6434C10.7939 11.6114 11.0926 11.4367 11.3333 11.1967L12.2799 10.2554C12.9199 9.62003 12.7399 8.53003 11.9213 8.08536L10.6479 7.39269C10.1106 7.10069 9.45725 7.18669 9.03725 7.60403Z"
                    fill="#BDBDBD"
                  />
                </svg>
                <p>Mobile No.</p>
              </div>
              <p>{kirillmenko.mobileNo}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="gray"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 mt-0.5 mr-1"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.66634 2.66669H9.33301C11.847 2.66669 13.1043 2.66669 13.885 3.44802C14.6663 4.22869 14.6663 5.48602 14.6663 8.00002C14.6663 10.514 14.6663 11.7714 13.885 12.552C13.1043 13.3334 11.847 13.3334 9.33301 13.3334H6.66634C4.15234 13.3334 2.89501 13.3334 2.11434 12.552C1.33301 11.7714 1.33301 10.514 1.33301 8.00002C1.33301 5.48602 1.33301 4.22869 2.11434 3.44802C2.89501 2.66669 4.15234 2.66669 6.66634 2.66669ZM8.83301 6.00002C8.83301 5.86741 8.88569 5.74024 8.97945 5.64647C9.07322 5.5527 9.2004 5.50002 9.33301 5.50002H12.6663C12.7989 5.50002 12.9261 5.5527 13.0199 5.64647C13.1137 5.74024 13.1663 5.86741 13.1663 6.00002C13.1663 6.13263 13.1137 6.25981 13.0199 6.35357C12.9261 6.44734 12.7989 6.50002 12.6663 6.50002H9.33301C9.2004 6.50002 9.07322 6.44734 8.97945 6.35357C8.88569 6.25981 8.83301 6.13263 8.83301 6.00002ZM9.49967 8.00002C9.49967 7.86741 9.55235 7.74024 9.64612 7.64647C9.73989 7.5527 9.86707 7.50002 9.99967 7.50002H12.6663C12.7989 7.50002 12.9261 7.5527 13.0199 7.64647C13.1137 7.74024 13.1663 7.86741 13.1663 8.00002C13.1663 8.13263 13.1137 8.25981 13.0199 8.35357C12.9261 8.44734 12.7989 8.50002 12.6663 8.50002H9.99967C9.86707 8.50002 9.73989 8.44734 9.64612 8.35357C9.55235 8.25981 9.49967 8.13263 9.49967 8.00002ZM10.1663 10C10.1663 9.86741 10.219 9.74024 10.3128 9.64647C10.4066 9.5527 10.5337 9.50002 10.6663 9.50002H12.6663C12.7989 9.50002 12.9261 9.5527 13.0199 9.64647C13.1137 9.74024 13.1663 9.86741 13.1663 10C13.1663 10.1326 13.1137 10.2598 13.0199 10.3536C12.9261 10.4473 12.7989 10.5 12.6663 10.5H10.6663C10.5337 10.5 10.4066 10.4473 10.3128 10.3536C10.219 10.2598 10.1663 10.1326 10.1663 10ZM7.33301 6.00002C7.33301 6.35364 7.19253 6.69278 6.94248 6.94283C6.69243 7.19288 6.3533 7.33335 5.99967 7.33335C5.64605 7.33335 5.30691 7.19288 5.05687 6.94283C4.80682 6.69278 4.66634 6.35364 4.66634 6.00002C4.66634 5.6464 4.80682 5.30726 5.05687 5.05721C5.30691 4.80716 5.64605 4.66669 5.99967 4.66669C6.3533 4.66669 6.69243 4.80716 6.94248 5.05721C7.19253 5.30726 7.33301 5.6464 7.33301 6.00002ZM5.99967 11.3334C8.66634 11.3334 8.66634 10.7367 8.66634 10C8.66634 9.26335 7.47301 8.66669 5.99967 8.66669C4.52634 8.66669 3.33301 9.26335 3.33301 10C3.33301 10.7367 3.33301 11.3334 5.99967 11.3334Z"
                    fill="#BDBDBD"
                  />
                </svg>
                <p>Teacher ID</p>
              </div>
              <p>{kirillmenko.teacherId}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  className="size-5 mt-0.5 mr-1"
                >
                  <path
                    fill="#0288D1"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                  ></path>
                </svg>
                <p>LinkedIn</p>
              </div>
              {kirillmenko.linkedin ? (
                <a
                  href={kirillmenko.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View LinkedIn Profile
                </a>
              ) : (
                <p>N/A</p>
              )}
            </div>
          </div>

          <button className="bg-[#17A8FC] text-white font-bold py-2 px-4 rounded hover:bg-blue-700 w-full md:w-[373px] mt-10 mx-auto block">
            <div className="flex justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-0.5 mx-1"
              >
                <path
                  d="M9.99967 1.66669C9.11562 1.66669 8.26777 2.01788 7.64265 2.643C7.01753 3.26812 6.66634 4.11597 6.66634 5.00002C6.66634 5.88408 7.01753 6.73192 7.64265 7.35704C8.26777 7.98216 9.11562 8.33335 9.99967 8.33335C10.8837 8.33335 11.7316 7.98216 12.3567 7.35704C12.9818 6.73192 13.333 5.88408 13.333 5.00002C13.333 4.11597 12.9818 3.26812 12.3567 2.643C11.7316 2.01788 10.8837 1.66669 9.99967 1.66669ZM14.1663 10H5.83301C5.16997 10 4.53408 10.2634 4.06524 10.7323C3.5964 11.2011 3.33301 11.837 3.33301 12.5C3.33301 14.36 4.09801 15.85 5.35301 16.8584C6.58801 17.85 8.24467 18.3334 9.99967 18.3334C11.7547 18.3334 13.4113 17.85 14.6463 16.8584C15.8997 15.85 16.6663 14.36 16.6663 12.5C16.6663 11.837 16.403 11.2011 15.9341 10.7323C15.4653 10.2634 14.8294 10 14.1663 10Z"
                  fill="white"
                />
              </svg>
              <p>Contact Teacher</p>
            </div>
          </button>
        </div>

        <div className="md:w-[1116px]">
          <p className="text-lg md:text-xl font-semibold">About {name}</p>
          <p className="text-gray-600 mt-2 w-full">{kirillmenko.about}</p>
          <div className="mt-3">
            <p className="text-lg md:text-xl font-semibold">Work History</p>
            <p className="text-gray-600 whitespace-pre-line mt-2">
              {kirillmenko.workHistory}
            </p>
          </div>
          <div className="mt-3">
            <p className="text-lg md:text-xl font-semibold">Education</p>
            <p className="text-gray-600 mt-2">{kirillmenko.education}</p>
          </div>
          <div className="mt-3">
            <p className="text-lg md:text-xl font-semibold">Publication</p>
            <p className="text-gray-600 mt-2">{kirillmenko.publication}</p>
          </div>
          {/* <div className="flex flex-wrap justify-around mt-5">
            {cardData.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
