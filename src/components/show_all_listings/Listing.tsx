import React from 'react'
import Image from 'next/image'

export interface CardProps {
  cardName: string,
  cardDate: string,
  cardTime: string,
  cardLocation: string,
  cardPrice: string,
  cardImg: string,
}

const Listing = ({cardName, cardDate, cardTime, cardLocation, cardPrice, cardImg}: CardProps) => {
  return (
    <div className="w-full border-[1px] bg-white border-gray-300 rounded-lg flex p-4 h my-4">
      <div className="w-1/5 flex">
        <Image src={cardImg}
          className="bg-black"
          alt=''
          width={100}
          height={100}
        />
      </div>
      <div className="w-3/5">
        <div className="text-xl font-bold my-2">{cardName}</div>
        <div className="text-sm"><span className="font-bold">Date :</span> {cardDate}</div>
        <div className="text-sm"><span className="font-bold">Time :</span> {cardTime}</div>
        <div className="text-sm"><span className="font-bold">Location :</span> {cardLocation}</div>
      </div>
      <div className="w-1/5">
      <div className="font-bold">Price</div>
        <div className="text-2xl p-1 bg-[#56C1FF] text-white  w-1/2 rounded-sm flex items-center justify-center"> {cardPrice}</div>
      </div>
    </div>
  )
}

export default Listing