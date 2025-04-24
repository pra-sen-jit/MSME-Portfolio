"use client";
import React from "react";
// import Header from "../product/Header";

function Header({ searchQuery, handleSearch }) {
  return (
    <header className="flex items-center justify-between w-full max-w-[1331px] px-4 py-4 mx-auto gap-4 flex-wrap max-md:flex-col max-md:items-start">
      {/* Search Bar */}
      <div className="flex items-center gap-2.5 px-4 py-2 bg-zinc-300 bg-opacity-50 rounded-2xl text-base text-black w-64 transition-all duration-300 ease-in-out">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ce6471c47d61b09a3bc49d5338dc5e6faf82e0c?placeholderIfAbsent=true"
          alt="Search icon"
          className="w-6 h-6 object-contain"
        />
        <input
          placeholder="What are you looking for?"
          className="w-full text-base border-none bg-transparent focus:outline-none"
          value={searchQuery}
          onChange={handleSearch}
          aria-label="Search products"
        />
      </div>

      {/* Title */}
      <h1 className="text-5xl font-semibold text-black text-center max-md:text-4xl max-md:mt-4">
        MAGRAHAT
      </h1>

      {/* Icons */}
      <div className="flex items-center gap-4 max-md:mt-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/922b80cdb9e3dc6f91a6cfddc0f16b1eae74ff38?placeholderIfAbsent=true"
          alt="Social icon"
          className="w-10 h-10 object-contain"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0c06e53a3188190e19736d3d5e3a336a6081799?placeholderIfAbsent=true"
          alt="Cart icon"
          className="w-10 h-10 object-contain"
        />
      </div>
    </header>
  );
}

export default Header;
