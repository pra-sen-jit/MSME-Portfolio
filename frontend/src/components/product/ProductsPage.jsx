"use client";
import React, { useState } from "react";
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


//PRODUCT CARD COMPONENT
function ProductCard({ image, title, price }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [viewButtonClicked, setViewButtonClicked] = useState(false);
  const [cartButtonClicked, setCartButtonClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  const handleViewDetailsClick = (e) => {
    e.stopPropagation(); // Prevent triggering the card click
    setViewButtonClicked(true);
    setTimeout(() => setViewButtonClicked(false), 300);
    // Add your view details logic here
    console.log("View details clicked");
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation(); // Prevent triggering the card click
    setCartButtonClicked(true);
    setTimeout(() => setCartButtonClicked(false), 300);
    // Add your add to cart logic here
    console.log("Add to cart clicked");
  };

  return (
    <article
      className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-200
        transition-all duration-300
        ${isHovered ? "shadow-xl transform scale-[1.02]" : "shadow-md"}
        ${isClicked ? "scale-95" : ""}
        hover:border-gray-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`object-cover w-full h-64 transition-all duration-500
            ${isHovered ? "transform scale-105 brightness-90" : ""}`}
        />
        <div
          className={`absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-opacity duration-300
          ${isHovered ? "bg-opacity-20" : "opacity-0"}`}
        >
          <button
            onClick={handleViewDetailsClick}
            className={`bg-white text-gray-800 font-medium py-2 px-4 rounded-md
              transition-all duration-300 shadow-md hover:bg-gray-100 cursor-pointer
              ${
                isHovered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
              ${viewButtonClicked ? "bg-gray-200 scale-95" : ""}
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
          >
            View Details
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 transition-colors duration-300">
          {title}
        </h3>
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium text-indigo-600">{price}</p>
          <button
            onClick={handleAddToCartClick}
            className={`px-3 py-1 text-sm font-medium rounded-md
              transition-all duration-200 cursor-pointer
              ${
                cartButtonClicked
                  ? "scale-95 bg-indigo-700"
                  : "hover:bg-indigo-700"
              }
              text-white bg-indigo-600 hover:shadow-md
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

//PRODUCT GRID COMPONENT
function ProductGrid() {
  const [activeArtisan, setActiveArtisan] = useState(null);

  const artisanAProducts = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3af4fc347bb8e7d0bafcc9c2f73c93108b8d33e6?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Elegant Silver Earrings",
      price: "₹1200",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c7d308ef00daeadfac1d1504148acb4c9527335a?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Elegant Silver Necklace",
      price: "₹1200",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6a49c3fe49cd483ac197b3432affb4471fbd71a9?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Elegant Silver Bangles",
      price: "₹1200",
    },
  ];

  const artisanBProducts = [
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3af4fc347bb8e7d0bafcc9c2f73c93108b8d33e6?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Golden Earrings",
      price: "₹1500",
    },
    {
      id: 5,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c7d308ef00daeadfac1d1504148acb4c9527335a?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Golden Necklace",
      price: "₹1800",
    },
    {
      id: 6,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6a49c3fe49cd483ac197b3432affb4471fbd71a9?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Golden Bangles",
      price: "₹1400",
    },
  ];

  const artisanCProducts = [
    {
      id: 7,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3af4fc347bb8e7d0bafcc9c2f73c93108b8d33e6?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Mixed Metal Anklet",
      price: "₹900",
    },
    {
      id: 8,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c7d308ef00daeadfac1d1504148acb4c9527335a?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Beaded Necklace",
      price: "₹1100",
    },
    {
      id: 9,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6a49c3fe49cd483ac197b3432affb4471fbd71a9?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Handmade Bracelet",
      price: "₹1000",
    },
  ];

  const artisansInfo = [
    {
      id: "artisanA",
      name: "Artisan A",
      role: "Silver Ornaments Specialist",
      products: artisanAProducts,
      color: "indigo",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      hoverBorderColor: "hover:border-indigo-400",
      textColor: "text-indigo-800",
    },
    {
      id: "artisanB",
      name: "Artisan B",
      role: "Gold Ornaments Specialist",
      products: artisanBProducts,
      color: "amber",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      hoverBorderColor: "hover:border-amber-400",
      textColor: "text-amber-800",
    },
    {
      id: "artisanC",
      name: "Artisan C",
      role: "Handmade & Mixed Metals",
      products: artisanCProducts,
      color: "rose",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      hoverBorderColor: "hover:border-rose-400",
      textColor: "text-rose-800",
    },
  ];

  const handleArtisanHover = (artisanId) => {
    setActiveArtisan(artisanId);
  };

  const renderArtisanSection = (artisan) => (
    <section
      key={artisan.id}
      className={`max-w-7xl mx-auto px-4 sm:px-6 mb-16 pb-8 rounded-2xl ${
        activeArtisan === artisan.id ? artisan.bgColor : "bg-white"
      } transition-colors duration-300`}
      onMouseEnter={() => handleArtisanHover(artisan.id)}
      onMouseLeave={() => setActiveArtisan(null)}
    >
      <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 sm:gap-6 my-8 pt-8">
        <div
          className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden 
          border-2 ${artisan.borderColor} ${artisan.hoverBorderColor} shadow-sm
          transition-all duration-300 transform 
          ${activeArtisan === artisan.id ? "scale-110" : ""}
        `}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/34fbe49fedb3f3ad1ef298c86acfa3a9e3af21ba?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
            alt={artisan.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2
            className={`text-2xl sm:text-3xl font-bold ${artisan.textColor} transition-colors duration-300`}
          >
            {artisan.name}
          </h2>
          <p className="text-gray-600 mt-1 font-medium">{artisan.role}</p>
          <div
            className={`h-1 w-0 mt-2 ${`bg-${artisan.color}-500`} rounded transition-all duration-500 
            ${activeArtisan === artisan.id ? "w-16 sm:w-24" : ""}`}
          ></div>
        </div>
        <div className="ml-auto hidden sm:block">
          <button
            className={`px-4 py-2 rounded-md font-medium text-sm border 
              transition-all duration-300
              ${`border-${artisan.color}-500 text-${artisan.color}-600 hover:bg-${artisan.color}-500 hover:text-white`}`}
          >
            View All Products
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {artisan.products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <button
          className={`px-4 py-2 rounded-md font-medium text-sm border w-full
            transition-all duration-300
            ${`border-${artisan.color}-500 text-${artisan.color}-600 hover:bg-${artisan.color}-500 hover:text-white`}`}
        >
          View All Products
        </button>
      </div>
    </section>
  );

  return (
    <main className="bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
          Our Artisan Collections
        </h1>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          Discover unique handcrafted pieces from our master artisans, each with
          their own specialty and style.
        </p>
      </div>

      <div className="space-y-6 sm:space-y-12">
        {artisansInfo.map(renderArtisanSection)}
      </div>
    </main>
  );
}


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
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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