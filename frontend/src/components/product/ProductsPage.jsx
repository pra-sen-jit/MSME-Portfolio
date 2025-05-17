"use client";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
// import Sidebar from "./Sidebar";
// import ProductGrid from "./ProductGrid";
import AnimatedPage from "../AnimatedPage";


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
            {["Silver (925)", "Mixed Metals"].map((material) => (
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

function ArtisanSection({ artisan, index }) {
  // Safe data access with fallbacks
  const username = artisan?.username || "Artisan";
  const products = artisan?.products || [];
  const initial = username[0]?.toUpperCase() || "A";
  const color = `hsl(${index * 60}, 70%, 30%)`;

  return (
    <section 
      className="bg-white p-6 rounded-xl shadow-sm mb-8 transition-all duration-300 hover:shadow-md"
      style={{ borderLeft: `4px solid ${color}` }}
    >
      {/* Artisan Header */}
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border-2"
          style={{ borderColor: color }}
        >
          <span 
            className="text-xl font-bold"
            style={{ color }}
          >
            {initial}
          </span>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {username}
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Listed Products:</span>
            <span 
              className="px-2 py-1 rounded-full"
              style={{ backgroundColor: `${color}20`, color }}
            >
              {products.length} items
            </span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard 
            key={product?.id || Math.random()} 
            product={product}
            color={color}
          />
        ))}
      </div>
    </section>
  );
}

//PRODUCT CARD COMPONENT
function ProductCard({ product, color }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-4px)' : 'none',
        borderTop: `3px solid ${color}`
      }}
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={`${backendUrl}${product.image1}`}
          alt={product.productName}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center transition-opacity duration-300"
  style={{ opacity: isHovered ? 1 : 0 }}>
  <Link 
    to="/ViewDetails" // Update this path according to your routing
    className="px-4 py-2 bg-white rounded-md shadow-md flex items-center gap-2"
    style={{ color }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
    </svg>
    View Details
  </Link>
</div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.productName}</h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{product.productDescription}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold" style={{ color }}>
            ₹{Number(product.productPrice).toLocaleString('en-IN')}
          </span>
          <div className="flex flex-col items-end gap-2">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-colors">
              Add to Cart
            </button>
            {product.listed_at && (
              <span className="text-xs text-gray-500">
                Listed: {new Date(product.listed_at).toLocaleDateString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

//PRODUCT GRID COMPONENT
function ProductGrid() {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const artisansRes = await axios.get(`${backendUrl}/public/artisans`);
      const artisanPromises = artisansRes.data.map(async (artisan) => {
        try {
          const productsRes = await axios.get(
            `${backendUrl}/public/artisans/${artisan.artisanId}/products`
          );
          return { ...artisan, products: productsRes.data };
        } catch (error) {
          console.error(`Error fetching products for ${artisan.artisanId}:`, error);
          return null; // Filter out later
        }
      },[refreshTrigger]);

      const artisansWithProducts = (await Promise.all(artisanPromises))
        .filter(artisan => artisan !== null && artisan.products.length === 3);
      
      setArtisans(artisansWithProducts);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);

  if (loading) return <div className="text-center p-8">Loading...</div>;

  return (
    <div className="space-y-12">
      {artisans.map(artisan => (
        <ArtisanSection
          key={artisan.artisanId}
          artisan={artisan}
          index={artisan.index}
        />
      ))}
      
      {!loading && artisans.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl text-gray-600">
            No artisans have listed their products yet
          </h3>
        </div>
      )}
    </div>
  );
}


function ProductsPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

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

            <div className="flex items-center">
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

              {/* Refresh Button */}
              {/* <button 
                onClick={() => setRefreshTrigger(prev => prev + 1)}
                className="ml-4 bg-indigo-100 text-indigo-600 px-3 py-1 rounded-lg mt-4"
              >
                Refresh Listings
              </button> */}
            </div>
          </div>

          {/* Products Layout */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar - Mobile */}
            <div className={`${filterOpen ? "block" : "hidden"} md:hidden w-full bg-white p-4 rounded-lg shadow-sm mb-4`}>
              <Sidebar />
            </div>

            {/* Sidebar - Desktop */}
            <div className="hidden md:block w-full md:w-1/4 lg:w-1/5 flex-shrink-0">
              <div className="sticky top-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Sidebar />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="w-full md:w-3/4 lg:w-4/5">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <ProductGrid refreshTrigger={refreshTrigger} />
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
