"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";
import AnimatedPage from "../AnimatedPage";

function ProductsPage() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <AnimatedPage>
      <div className="bg-gray-50 min-h-screen">
        {/* Main Container */}
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
            <p className="mt-2 text-gray-600">
              Discover our curated collection of quality items
            </p>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="mt-4 md:hidden flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                  clipRule="evenodd"
                />
              </svg>
              {filterOpen ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Products Layout */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar - Mobile (Conditional Rendering) */}
            <div
              className={`${
                filterOpen ? "block" : "hidden"
              } md:hidden w-full bg-white p-4 rounded-lg shadow-sm mb-4`}
            >
              <Sidebar />
            </div>

            {/* Sidebar - Desktop */}
            <div className="hidden md:block w-full md:w-1/4 lg:w-1/5 flex-shrink-0">
              <div className="sticky top-8 bg-white p-6 rounded-lg shadow-sm">
                <Sidebar />
              </div>
            </div>

            {/* Product Grid */}
            <div className="w-full md:w-3/4 lg:w-4/5">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <ProductGrid />
              </div>
            </div>
          </div>

          {/* Promotional Banner */}
          <div className="mt-16 mb-8">
            <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Special Collection
                </h2>
                <p className="text-lg mb-6 max-w-lg">
                  Discover our newest arrivals with exclusive discounts for
                  limited time.
                </p>
                <button className="bg-white text-indigo-600 hover:bg-gray-100 font-medium py-2 px-6 rounded-lg transition-colors duration-300 cursor-pointer">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default ProductsPage;
