"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import FilterSidebar from "./FilterSideBar";
import CategoryListingCard from "./CategoryListingCard";

interface Listing {
  title: string;
  gender: string;
  category: string;
  description: string;
  imageUrl: string;
  days: string;
  price: string;
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
    price: "46",
  },
  {
    title: "The Cricket Gurukul",
    category: "Cricket",
    gender: "Boys Only",
    description: "Master the skills of basketball...",
    imageUrl: "/img/cricket.png",
    days: "On Tuesday & Friday",
    price: "64",
  },
  {
    title: "The Cricket Gurukul",
    category: "Cricket",
    gender: "Boys Only",
    description: "Kick-start your football career...",
    imageUrl: "/img/cricket.png",
    days: "On Wednesday & Sunday",
    price: "96",
  },
  {
    title: "Leading Cricket Academy",
    category: "Cricket",
    gender: "Boys and Girls",
    description: "Learn to smash the shuttle...",
    imageUrl: "/img/cricket.png",
    days: "On Thursday & Saturday",
    price: "45",
  },
  {
    title: "N1 Cricket Academy",
    category: "Cricket",
    gender: "Boys and Girls",
    description: "Ace the formulas ",
    imageUrl: "/img/cricket.png",
    days: "On Monday & Wednesday",
    price: "100",
  },
  {
    title: "Red Toss Cricket",
    category: "Cricket",
    gender: "Boys and Girls",
    description: "Ace the formulas ",
    imageUrl: "/img/cricket.png",
    days: "On Friday & Sunday",
    price: "24",
  },
  {
    title: "Wing Cricket Academy",
    category: "Cricket",
    gender: "Boys",
    description: "Ace the formulas ",
    imageUrl: "/img/cricket.png",
    days: "On Tuesday & Thursday",
    price: "89",
  },
  // More listings...
];

const CategoryListingsPage: React.FC = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredListings, setFilteredListings] = useState(listingsData);
  const [keywords, setKeywords] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSearch = () => {
    const filtered = listingsData.filter((listing) => {
      const matchesKeywords =
        keywords === "" ||
        listing.title.toLowerCase().includes(keywords.toLowerCase());
      // const matchesLocation = location === '' || listing.location.toLowerCase().includes(location.toLowerCase());
      // return matchesKeywords && matchesLocation;
      return matchesKeywords;
    });

    setFilteredListings(filtered);
  };

  const handleFilter = () => {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    const filtered = listingsData.filter((listingsData) => {
      const price = parseFloat(listingsData.price);
      return (isNaN(min) || price >= min) && (isNaN(max) || price <= max);
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
          <div>
            <div className="p-4 space-y-4">
              <h2 className="font-bold">Price</h2>
              <ul className="space-y-2">
                <li>
                  Min:
                  <input
                    className="ml-4"
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="Minimum price"
                  />
                </li>
                <li>
                  Max:
                  <input
                    className="ml-4"
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="Maximum price"
                  />
                </li>
              </ul>
              <button
                className="bg-[#56C1FF] hover:bg-[#4cabe2] text-white w-full py-2 rounded mt-4"
                onClick={handleFilter}
              >
                Filter
              </button>
            </div>
          </div>
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
