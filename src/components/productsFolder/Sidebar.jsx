"use client";
import React, { useState } from "react";

function Sidebar() {
  const [priceRange, setPriceRange] = useState(2500);

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  return (
    <aside className="w-full max-w-xs px-4 py-6 bg-white rounded-xl shadow-lg text-black">
      {/* Category Filter */}
      <section aria-labelledby="category-heading" className="mb-6">
        <h2 id="category-heading" className="text-lg font-semibold mb-3">Category</h2>
        <div className="space-y-2">
          {['Earrings', 'Necklaces', 'Showpieces'].map((item) => (
            <label key={item} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-yellow-500 h-4 w-4 rounded border border-black"
                aria-label={item}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Material Filter */}
      <section aria-labelledby="material-heading" className="mb-6">
        <h2 id="material-heading" className="text-lg font-semibold mb-3">Material</h2>
        <div className="space-y-2">
          {['Silver (925)', 'Mixed Metals'].map((material) => (
            <label key={material} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-yellow-500 h-4 w-4 rounded border border-black"
                aria-label={material}
              />
              <span>{material}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Price Range Filter */}
      <section aria-labelledby="price-heading">
        <h2 id="price-heading" className="text-lg font-semibold mb-3">Price Range</h2>
        <input
          type="range"
          min="0"
          max="5000"
          value={priceRange}
          onChange={handlePriceChange}
          className="w-full accent-yellow-500"
          aria-valuemin="0"
          aria-valuemax="5000"
          aria-valuenow={priceRange}
        />
        <div className="flex justify-between text-sm mt-2">
          <span>₹0</span>
          <span>₹{priceRange}</span>
          <span>₹5,000</span>
        </div>
      </section>
    </aside>
  );
}

export default Sidebar;