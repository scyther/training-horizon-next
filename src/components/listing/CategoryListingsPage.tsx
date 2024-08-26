"use client"

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import FilterSidebar from './FilterSideBar';
import CategoryListingCard from './CategoryListingCard';

interface Listing {
  title: string,
    gender: string,
    category: string,
    description: string,
    imageUrl: string,
    days: string,
    price: string
}

const listingsData: Listing[] = [
  // Example data...
  {
    title: "JIS Pitampura",
    category: "Cricket",
    gender: "Boys and Girls",
    description: "Learn the basics of cricket...",
    imageUrl: "/img/cricket.png",
    days: "On Monday & Thursday",
    price: "$46/Month"
  },
  {
    title: "The Cricket Gurukul",
    category: "Cricket",
    gender: "Boys Only",
    description: "Master the skills of basketball...",
    imageUrl: "/img/cricket.png",
    days: "On Tuesday & Friday",
    price: "$64/Month"
  },
  {
    title: "The Cricket Gurukul",
    category: "Cricket",
    gender: "Boys Only",
    description: "Kick-start your football career...",
    imageUrl: "/img/cricket.png",
    days: "On Wednesday & Sunday",
    price: "$96/Month"
  },
  {
    title: "Leading Cricket Academy",
    category: "Cricket",
    gender: "Boys and Girls",
    description: "Learn to smash the shuttle...",
    imageUrl: "/img/cricket.png",
    days: "On Thursday & Saturday",
    price: "$45/Month"
  },
  {
    title: "N1 Cricket Academy",
    category: "Cricket",
    gender: "Boys and Girls",
    description: "Ace the formulas ",
    imageUrl: "/img/cricket.png",
    days: "On Monday & Wednesday",
    price: "$100/Month"
  },
  {
    title: "Red Toss Cricket",
    category: "Cricket",
    gender: "Boys and Girls",
    description: "Ace the formulas ",
    imageUrl: "/img/cricket.png",
    days: "On Friday & Sunday",
    price: "$24/Month"
  },
  {
    title: "Wing Cricket Academy",
    category: "Cricket",
    gender: "Boys",
    description: "Ace the formulas ",
    imageUrl: "/img/cricket.png",
    days: "On Tuesday & Thursday",
    price: "$89/Month"
  },
  // More listings...
];

const CategoryListingsPage: React.FC = () => {
  const [keywords, setKeywords] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredListings, setFilteredListings] = useState<Listing[]>(listingsData);

  const handleSearch = () => {
    const filtered = listingsData.filter(listing => {
      const matchesKeywords = keywords === '' || listing.title.toLowerCase().includes(keywords.toLowerCase());
      // const matchesLocation = location === '' || listing.location.toLowerCase().includes(location.toLowerCase());
      // return matchesKeywords && matchesLocation;
        return matchesKeywords;
    });

    setFilteredListings(filtered);
  };

  const handleFilter = () => {
    const filtered = listingsData.filter(listing => {
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
          {/* <FilterSidebar 
            selectedCategories={selectedCategories} 
            setSelectedCategories={setSelectedCategories} 
            onFilter={handleFilter}
          /> */}
        </aside>

        <main className="flex-1 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredListings.length > 0 ? (
            filteredListings.map((listing, idx) => (
              <CategoryListingCard key={idx} {...listing} />
            ))
          ) : (
            <p>No listings found.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default CategoryListingsPage;
