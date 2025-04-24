"use client";
import React, { useState } from "react";

function Sidebar() {
  const [priceRange, setPriceRange] = useState(2500);
  const handlePriceChange = (e) => setPriceRange(e.target.value);

  return (
    <aside className="w-full px-4 py-6 bg-white rounded-xl shadow-md text-black sticky top-20 max-h-[calc(100vh-100px)] overflow-y-auto">
      {/* Category Filter */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Category</h2>
        <div className="space-y-2">
          {['Earrings', 'Necklaces', 'Showpieces'].map((item) => (
            <label key={item} className="flex items-center gap-2">
              <input type="checkbox" className="accent-yellow-500 h-4 w-4" />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Material Filter */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Material</h2>
        <div className="space-y-2">
          {['Silver (925)', 'Mixed Metals'].map((material) => (
            <label key={material} className="flex items-center gap-2">
              <input type="checkbox" className="accent-yellow-500 h-4 w-4" />
              <span>{material}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Price Range */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Price Range</h2>
        <input
          type="range"
          min="0"
          max="5000"
          value={priceRange}
          onChange={handlePriceChange}
          className="w-full accent-yellow-500"
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
