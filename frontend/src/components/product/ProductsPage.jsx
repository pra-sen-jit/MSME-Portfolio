"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import Sidebar from "./Sidebar";
// import ProductGrid from "./ProductGrid";
import AnimatedPage from "../AnimatedPage";

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
          <span className="text-xl font-bold" style={{ color }}>
            {initial}
          </span>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">{username}</h2>
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
        {products.map((product) => (
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
        transform: isHovered ? "translateY(-4px)" : "none",
        borderTop: `3px solid ${color}`,
      }}
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={`${backendUrl}${product.image1}`}
          alt={product.productName}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 bg-black/10 flex items-center justify-center transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <Link
            to={`/products/${product.id}`}
            className="px-4 py-2 bg-white rounded-md shadow-md flex items-center gap-2"
            style={{ color }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
            View Details
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.productName}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {product.productDescription}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold" style={{ color }}>
            ₹{Number(product.productPrice).toLocaleString("en-IN")}
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
        const artisanPromises = artisansRes.data.map(
          async (artisan) => {
            try {
              const productsRes = await axios.get(
                `${backendUrl}/public/artisans/${artisan.artisanId}/products`
              );
              return { ...artisan, products: productsRes.data };
            } catch (error) {
              console.error(
                `Error fetching products for ${artisan.artisanId}:`,
                error
              );
              return null; // Filter out later
            }
          },
          [refreshTrigger]
        );

        const artisansWithProducts = (
          await Promise.all(artisanPromises)
        ).filter(
          (artisan) => artisan !== null && artisan.products.length === 3
        );

        setArtisans(artisansWithProducts);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="text-center p-8">Loading...</div>;

  return (
    <div className="space-y-12">
      {artisans.map((artisan) => (
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
            <div
              className={`${
                filterOpen ? "block" : "hidden"
              } md:hidden w-full bg-white p-4 rounded-lg shadow-sm mb-4`}
            >
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
