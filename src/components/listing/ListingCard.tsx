"use client";

import React from "react";

import { useState } from "react";
import Pill from "@/components/listing/Pill";

interface ListingCardProps {
  title: string;
  gender: string;
  category: string;
  description: string;
  imageUrl: string;
  time: string;
}

const ListingCard: React.FC<ListingCardProps> = ({
  title,
  gender,
  category,
  description,
  imageUrl,
  time,
}) => {
  const [isSelecetd, setIsSeleceted] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsSeleceted(!isSelecetd);
  };

  return (
    <div className="flex-col max-sm:w-10/12 mx-4 rounded-2xl overflow-hidden hover:shadow-2xl shadow-lg bg-sky-400 w-full h-[22rem] ">
      <div className=" rounded-b-2xl bg-white px-2">
        <div className="flex px-4 py-4">
          <img
            src={imageUrl}
            alt={title}
            className="h-32 w-24 object-contain"
          />
          <div className="flex w-full justify-end items-start">
            <Pill text={time} color="bg-sky-400" icon="/icons/clock.png" />
          </div>
        </div>

        <div>
          <div className="flex">
            <Pill text={gender} color="bg-sky-400" icon="/icons/person.png" />
            <div className="flex flex-grow flexEnd justify-end items-center">
              <img
                src={`${
                  isSelecetd ? `/icons/filled_fav.png` : `/icons/fav.png`
                }`}
                alt="fav"
                className="cursor-pointer"
                onClick={handleOnClick}
              />
            </div>
          </div>
          <h3 className="text-xl pt-1 font-semibold">{title}</h3>
          <p className="text-xs text-gray-500 font-semibold">
            On Monday & Thursday
          </p>
          <p className="text-xs text-gray-700 py-3">
            Some description in 2-3 lines it can be about the trainer or about
            our facility
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center py-4">
        <button className=" text-white rounded">
          {category == "Sports" ? "Play" : "Learn"} {title} Now
        </button>
      </div>
    </div>
  );
};

export default ListingCard;
