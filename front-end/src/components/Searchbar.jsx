import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center relative"> 
      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 pr-10 rounded-full focus:outline-none w-60 text-black bg_form" 
      />
      <button type="submit" className="absolute right-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.9-3.65A8.5 8.5 0 1110 2.5a8.5 8.5 0 017.5 12.5z"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
