"use client"

import React, { useState ,useEffect } from 'react';
import SearchBar from './SearchBar';
import FilterSidebar from './FilterSideBar';
import ListingCard from './ListingCard';

interface Listing {
  category: string,
  title: string,
  price: string,
  mode: string,
  location: string,
  quantity: string,
  startDate: string,
  endDate:string,
  days: string,
  gender:string,
  startTime:string,
  endTime:string,
  ageGroup: string,
  description:string,
}


  

// const listings: Listing[] = [
//   // Example data...
//   {
//     title: "Cricket",
//     category: "Sports",
//     gender: "Boys and Girls",
//     description: "Learn the basics of cricket...",
//     imageUrl: "/img/cricket.png",
//     time: "8:00 PM to 9:30 PM",
//   },
//   {
//     title: "Basketball",
//     category: "Sports",
//     gender: "Boys Only",
//     description: "Master the skills of basketball...",
//     imageUrl: "/img/basketball.png",
//     time: "2 hrs",
//   },
//   {
//     title: "Football",
//     category: "Sports",
//     gender: "Boys Only",
//     description: "Kick-start your football career...",
//     imageUrl: "/img/football.png",
//     time: "2 hrs",
//   },
//   {
//     title: "Badminton",
//     category: "Sports",
//     gender: "Boys and Girls",
//     description: "Learn to smash the shuttle...",
//     imageUrl: "/img//badminton.png",
//     time: "2 hrs",
//   },
//   {
//     title: "Mathematics",
//     category: "Educational",
//     gender: "Boys and Girls",
//     description: "Ace the formulas ",
//     imageUrl: "/img/math.png",
//     time: "8:00 PM to 9:30 PM",
//   },
//   {
//     title: "Science",
//     category: "Educational",
//     gender: "Boys and Girls",
//     description: "Ace the formulas ",
//     imageUrl: "/img/lab.png",
//     time: "2 hrs",
//   },
//   {
//     title: "History",
//     category: "Educational",
//     gender: "Boys",
//     description: "Ace the formulas ",
//     imageUrl: "/img/history.png",
//     time: "2 hrs",
//   },
//   {
//     title: "History",
//     category: "Educational",
//     gender: "Boys",
//     description: "Ace the formulas ",
//     imageUrl: "/img/history.png",
//     time: "2 hrs",
//   },
//   // More listings...
// ];

const ListingsPage: React.FC = () => {

  const [listings, setListings] = useState<Listing[]>([]);

  

  const [keywords, setKeywords] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredListings, setFilteredListings] = useState<Listing[]>(listings);

  useEffect(() => {
    fetch('http://localhost:3005/api/v1/listing/listing/')
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  const handleSearch = () => {
    const filtered = listings.filter(listing => {
      const matchesKeywords = keywords === '' || listing.title.toLowerCase().includes(keywords.toLowerCase());
      // const matchesLocation = location === '' || listing.location.toLowerCase().includes(location.toLowerCase());
      // return matchesKeywords && matchesLocation;
        return matchesKeywords;
    });

    setFilteredListings(filtered);
  };

  const handleFilter = () => {
    const filtered = listings.filter(listing => {
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(listing.category);
      return matchesCategory;
    });

    setFilteredListings(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <div className="container mx-auto">
          <SearchBar 
            keywords={keywords} 
            setKeywords={setKeywords} 
            // location={location} 
            // setLocation={setLocation} 
            onSearch={handleSearch} 
          />
        </div>
      </header>
      
      <div className="container mx-auto flex flex-1">
        <aside className="w-1/4">
          <FilterSidebar 
            selectedCategories={selectedCategories} 
            setSelectedCategories={setSelectedCategories} 
            onFilter={handleFilter}
          />
        </aside>

        <main className="flex-1 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {filteredListings} */}
          {listings.length > 0 ? (
            listings.map((listing,idx) => (
              <ListingCard key={idx} {...listing} />
            ))
          ) : (
            <p>No listings found.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default ListingsPage;
