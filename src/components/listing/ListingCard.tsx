"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Pill from "@/components/listing/Pill";
import { useDispatch } from "react-redux";
import { setForm } from "@/lib/store/formSlice";

interface ListingCardProps {
  category: string;
  title: string;
  price: string;
  mode: string;
  location: string;
  quantity: string;
  startDate: string;
  endDate: string;
  days: string;
  gender: string;
  startTime: string;
  endTime: string;
  ageGroup: string;
  description: string;
}

const ListingCard: React.FC<ListingCardProps> = ({
  category,
  title,
  price,
  mode,
  location,
  quantity,
  startDate,
  endDate,
  days,
  gender,
  startTime,
  endTime,
  ageGroup,
  description,
}) => {
  const [isSelecetd, setIsSeleceted] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    setIsSeleceted(!isSelecetd);
  };
  const router = useRouter();

  const sendData = () => {
    dispatch(
      setForm({
        category,
        title,
        price,
        mode,
        location,
        quantity,
        startDate,
        endDate,
        days,
        gender,
        startTime,
        endTime,
        ageGroup,
        description,
      })
    );
  };

  return (
    <div
      className="flex-col max-sm:w-10/12 mx-4 rounded-2xl overflow-hidden hover:shadow-2xl shadow-lg bg-sky-400 w-full h-[22rem] "
      onClick={
        () =>{
          sendData()
         router.push(
        "/courses/ListingDetail"
        )
        }
      }
    >
      <div className=" rounded-b-2xl bg-white px-2">
        <div className="flex px-4 py-4">
          <img
            src={"/img/cricket.png"}
            alt={title}
            className="h-32 w-24 object-contain"
          />
          <div className="flex w-full justify-end items-start">
            <Pill text={startTime} color="bg-sky-400" icon="/icons/clock.png" />
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
            start:{startDate} <br />
            {/* end:{endDate} */}
          </p>
          <p className="text-xs text-gray-700 py-3">{
          
          // description
          }</p>
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
