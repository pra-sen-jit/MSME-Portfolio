"use client";
import React, { useState } from "react";

function Sidebar() {
  const [priceRange, setPriceRange] = useState(2500);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    materials: [],
  });
  const [isExpanded, setIsExpanded] = useState(true);

  const handlePriceChange = (e) => setPriceRange(parseInt(e.target.value));

  const toggleCategory = (category) => {
    setActiveFilters((prev) => {
      const categories = [...prev.categories];
      if (categories.includes(category)) {
        return {
          ...prev,
          categories: categories.filter((c) => c !== category),
        };
      } else {
        return { ...prev, categories: [...categories, category] };
      }
    });
  };

  const toggleMaterial = (material) => {
    setActiveFilters((prev) => {
      const materials = [...prev.materials];
      if (materials.includes(material)) {
        return { ...prev, materials: materials.filter((m) => m !== material) };
      } else {
        return { ...prev, materials: [...materials, material] };
      }
    });
  };

  // Fix: Actually reset all filters when Clear All is clicked
  const resetFilters = () => {
    setActiveFilters({ categories: [], materials: [] });
    setPriceRange(2500);
  };

  // Count total active filters
  const activeFiltersCount =
    activeFilters.categories.length +
    activeFilters.materials.length +
    (priceRange < 5000 ? 1 : 0);

  return (
    <aside className="w-full lg:max-w-xs px-4 py-6 bg-white rounded-xl shadow-md text-gray-800 sticky top-20 max-h-[calc(100vh-100px)] overflow-y-auto transition-all duration-300">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Filters</h2>
        <div className="flex items-center gap-2">
          {activeFiltersCount > 0 && (
            <button
              onClick={resetFilters}
              className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200 flex items-center"
            >
              Clear All
              <span className="ml-1 w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">
                {activeFiltersCount}
              </span>
            </button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`space-y-8 transition-all duration-300 ${
          isExpanded
            ? "opacity-100"
            : "opacity-0 lg:opacity-100 h-0 lg:h-auto overflow-hidden"
        }`}
      >
        {/* Category Filter */}
        <section>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
            </span>
            Category
          </h3>
          <div className="space-y-3">
            {["Earrings", "Necklaces", "Showpieces"].map((item) => (
              <label
                key={item}
                className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-all duration-200 
                  ${hoveredCategory === item ? "bg-indigo-50" : ""}
                  ${
                    activeFilters.categories.includes(item)
                      ? "bg-indigo-100"
                      : ""
                  }`}
                onMouseEnter={() => setHoveredCategory(item)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    className="appearance-none h-5 w-5 border-2 border-gray-300 rounded-md checked:border-indigo-500 transition-colors duration-200"
                    checked={activeFilters.categories.includes(item)}
                    onChange={() => toggleCategory(item)}
                  />
                  {activeFilters.categories.includes(item) && (
                    <svg
                      className="absolute top-0 left-0 h-5 w-5 text-indigo-500 pointer-events-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span className="font-medium">{item}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Material Filter */}
        <section>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Material
          </h3>
          <div className="space-y-3">
            {["Silver", "Mixed Metals"].map((material) => (
              <label
                key={material}
                className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-all duration-200
                  ${
                    activeFilters.materials.includes(material)
                      ? "bg-indigo-100"
                      : ""
                  }`}
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    className="appearance-none h-5 w-5 border-2 border-gray-300 rounded-md checked:border-indigo-500 transition-colors duration-200"
                    checked={activeFilters.materials.includes(material)}
                    onChange={() => toggleMaterial(material)}
                  />
                  {activeFilters.materials.includes(material) && (
                    <svg
                      className="absolute top-0 left-0 h-5 w-5 text-indigo-500 pointer-events-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span className="font-medium">{material}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Price Range */}
        <section>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Price Range
          </h3>
          <div className="px-1">
            <div className="relative pt-1">
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={priceRange}
                onChange={handlePriceChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none"
                style={{
                  background: `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${
                    priceRange / 50
                  }%, #e5e7eb ${priceRange / 50}%, #e5e7eb 100%)`,
                }}
              />
              <div className="flex justify-between text-sm font-medium text-gray-600 mt-4">
                <span>₹0</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md">
                  ₹{priceRange.toLocaleString()}
                </span>
                <span>₹5,000</span>
              </div>
            </div>
          </div>
        </section>

        {/* Apply Filters Button */}
        <button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
              clipRule="evenodd"
            />
          </svg>
          Apply Filters
          {activeFiltersCount > 0 && (
            <span className="ml-1 w-5 h-5 rounded-full bg-white text-indigo-600 flex items-center justify-center text-xs font-bold">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
