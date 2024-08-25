import React from 'react';

interface SearchBarProps {
  keywords: string;
  setKeywords: React.Dispatch<React.SetStateAction<string>>;
  // location: string;
  // setLocation: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ keywords, setKeywords, onSearch }) => {
  return (
    <div className="flex space-x-4 p-4">
      <input 
        type="text" 
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Keywords" 
        className="w-full border p-2 rounded" 
      />
      {/* <input 
        type="text" 
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location" 
        className="w-full border p-2 rounded" 
      /> */}
      <button 
        className="bg-[#56C1FF] hover:bg-[#4cabe2] text-white px-4 py-2 rounded"
        onClick={onSearch}  // Trigger search on button click
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
