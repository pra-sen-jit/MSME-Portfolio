"use client";
import React, { useState } from "react";

function Sidebar() {
  const [priceRange, setPriceRange] = useState(2500); // Default middle value

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  return (
    <aside className="w-full text-base leading-none text-black bg-black bg-opacity-0 max-md:mt-10">
      <div className="px-1 pt-px pb-2 bg-black bg-opacity-0">
        {/* Category Filter */}
        <section
          className="flex flex-col px-4 py-5 whitespace-nowrap rounded-lg border border-solid bg-black bg-opacity-0 shadow-[0px_3px_4px_rgba(0,0,0,0.25)]"
          aria-labelledby="category-heading"
        >
          <h2 id="category-heading" className="self-start">
            Category
          </h2>
          <div className="mt-6 w-full bg-black bg-opacity-0">
            <label className="flex gap-2 py-1 bg-black bg-opacity-0 cursor-pointer">
              <input
                type="checkbox"
                className="shrink-0 self-start mt-1 bg-white rounded-sm border border-black border-solid h-[13px] w-[13px]"
                aria-label="Earrings"
              />
              <span className="grow shrink w-[198px]">Earrings</span>
            </label>
            <label className="flex gap-2 py-1 mt-2 bg-black bg-opacity-0 cursor-pointer">
              <input
                type="checkbox"
                className="shrink-0 self-start mt-1 bg-white rounded-sm border border-black border-solid h-[13px] w-[13px]"
                aria-label="Necklaces"
              />
              <span className="grow shrink w-[198px]">Necklaces</span>
            </label>
            <label className="flex gap-2 py-1 mt-2 bg-black bg-opacity-0 cursor-pointer">
              <input
                type="checkbox"
                className="shrink-0 self-start mt-1 bg-white rounded-sm border border-black border-solid h-[13px] w-[13px]"
                aria-label="Showpieces"
              />
              <span className="grow shrink w-[198px]">Showpieces</span>
            </label>
          </div>
        </section>

        {/* Material Filter */}
        <section
          className="flex flex-col px-4 py-5 mt-6 rounded-lg border border-solid bg-black bg-opacity-0 shadow-[0px_3px_4px_rgba(0,0,0,0.25)]"
          aria-labelledby="material-heading"
        >
          <h2 id="material-heading" className="self-start">
            Material
          </h2>
          <div className="mt-7 w-full bg-black bg-opacity-0">
            <label className="flex gap-2 py-1 bg-black bg-opacity-0 cursor-pointer">
              <input
                type="checkbox"
                className="shrink-0 self-start mt-1 bg-white rounded-sm border border-black border-solid h-[13px] w-[13px]"
                aria-label="Silver (925)"
              />
              <span className="grow shrink w-[198px]">Silver (925)</span>
            </label>
            <label className="flex gap-2 py-1 mt-2 bg-black bg-opacity-0 cursor-pointer">
              <input
                type="checkbox"
                className="shrink-0 self-start mt-1 bg-white rounded-sm border border-black border-solid h-[13px] w-[13px]"
                aria-label="Mixed Metals"
              />
              <span className="grow shrink w-[198px]">Mixed Metals</span>
            </label>
          </div>
        </section>

        {/* Price Range Filter */}
        <section
          className="flex flex-col px-4 py-5 mt-6 rounded-lg border border-solid bg-black bg-opacity-0 shadow-[0px_3px_4px_rgba(0,0,0,0.25)]"
          aria-labelledby="price-heading"
        >
          <h2 id="price-heading" className="self-start">
            Price Range
          </h2>
          <div className="mt-5 w-full whitespace-nowrap bg-black bg-opacity-0">
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange}
              onChange={handlePriceChange}
              className="w-[222px] rounded-full"
              aria-labelledby="price-heading"
              aria-valuemin="0"
              aria-valuemax="5000"
              aria-valuenow={priceRange}
            />
            <div className="flex gap-5 justify-between py-1.5 mt-5 bg-black bg-opacity-0">
              <span className="self-start">₹0</span>
              <span>₹5,000</span>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
}

export default Sidebar;
