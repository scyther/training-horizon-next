'use client'
import React, { useState } from 'react';
import Listing, { CardProps } from './Listing';
import SearchBar from '../listing/SearchBar';
import { useRouter } from 'next/navigation'

const router = useRouter;

const Main = () => {
  const listDetails: CardProps[] = [
    {
      cardName: "Implementing SAFe",
      cardDate: "3 June 2023 - 8 June 2023",
      cardTime: "01:00PM-6:00PM",
      cardLocation: "Eastern Light Norway.Europe",
      cardPrice: "1000$",
      cardImg: "/img/temp.png",
    },
    {
      cardName: "Hello World",
      cardDate: "3 June 2023 - 8 June 2023",
      cardTime: "01:00PM-6:00PM",
      cardLocation: "Eastern Light Norway.Europe",
      cardPrice: "1500$",
      cardImg: "/img/temp2.png",
    },
    {
      cardName: "This is Listing",
      cardDate: "3 June 2023 - 8 June 2023",
      cardTime: "01:00PM-6:00PM",
      cardLocation: "Eastern Light Norway.Europe",
      cardPrice: "1200$",
      cardImg: "/img/temp.png",
    },
    {
      cardName: "Implementing SAFe two",
      cardDate: "3 June 2023 - 8 June 2023",
      cardTime: "01:00PM-6:00PM",
      cardLocation: "Eastern Light Norway.Europe",
      cardPrice: "1200$",
      cardImg: "/img/temp2.png",
    },
    {
      cardName: "Implementing SAFe two",
      cardDate: "3 June 2023 - 8 June 2023",
      cardTime: "01:00PM-6:00PM",
      cardLocation: "Eastern Light Norway.Europe",
      cardPrice: "1200$",
      cardImg: "/img/temp.png",
    },
    {
      cardName: "Implementing SAFe three",
      cardDate: "3 June 2023 - 8 June 2023",
      cardTime: "01:00PM-6:00PM",
      cardLocation: "Eastern Light Norway.Europe",
      cardPrice: "3000$",
      cardImg: "/img/temp2.png",
    }
  ]

  const [keywords, setKeywords] = useState<string>('');
  const [filteredListings, setFilteredListings] = useState<CardProps[]>(listDetails);

  const handleSearch = () => {
    const filtered = listDetails.filter(listing => {
      const matchesKeywords = keywords === '' || listing.cardName.toLowerCase().includes(keywords.toLowerCase());
      return matchesKeywords;
    });

    setFilteredListings(filtered);
  };

  return (
    <div className='flex relative justify-center h-[120vh] w-full bg-gray-50'>
      <div className='w-full absolute h-1/4 z-0 bg-[#0E3750]'></div>
      <div className='flex-col absolute top-0 w-4/5 '>

        <div className=" w-full flex-col justify-center">
          <div className="my-6 text-2xl text-center text-white">SHOWING MY LISTINGS</div>
          <div className=" flex gap-4">
            <div className=" border-[1px] border-gray-300 w-1/4 rounded-lg">
              Filters will come here....
            </div>

            <div className="w-full flex-col gap-y-4 ">
              <div className="flex justify-between">
                <div className="w-full">
                  {/* SearchBar */}
                  <SearchBar
                    keywords={keywords}
                    setKeywords={setKeywords}
                    onSearch={handleSearch}
                  />
                </div>
              </div>
              <div className="rounded-lg min-h-[85vh] max-h-[85vh] flex-col gap-4 overflow-scroll ">
                {filteredListings.length > 0 ? (
                  filteredListings.map((listing, idx) => (
                    <Listing key={idx} {...listing} />
                  ))
                ) : (
                  <p>No listings found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

// const onSubmit = async (values: z.infer<typeof formSchema>) => {
//   // Retrieve existing listings from local storage
//   const existingListings = JSON.parse(localStorage.getItem('listings') || '[]');

//   // Add the new listing
//   const updatedListings = [...existingListings, values];

//   // Store updated listings back in local storage
//   localStorage.setItem('listings', JSON.stringify(updatedListings));

//   // Redirect to the listings page
//   router.push('/dashboard/teacher/show_all_listings');
// };


export default Main;
