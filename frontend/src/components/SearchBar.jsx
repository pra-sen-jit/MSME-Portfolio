"use client";
import React from "react";

function SearchBar({ searchQuery, handleSearch }) {
  return (
    <div className="flex gap-2.5 px-3 py-1 text-base text-black rounded-2xl transition-all cursor-pointer bg-zinc-300 duration-[0.3s] ease-[ease]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ce6471c47d61b09a3bc49d5338dc5e6faf82e0c?placeholderIfAbsent=true"
        alt="Search icon"
        className="object-contain overflow-hidden shrink-0 aspect-square w-[35px]"
      />
      <input
        placeholder="What are you looking for?"
        className="w-full text-base border-[none] bg-transparent focus:outline-none"
        value={searchQuery}
        onChange={handleSearch}
        aria-label="Search products"
      />
    </div>
  );
}

export default SearchBar;
