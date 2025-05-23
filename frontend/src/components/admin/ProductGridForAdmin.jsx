// ProductGridForAdmin.jsx
"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

function ProductCard({ product, color, onDelete }) {
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
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image1}
          alt={product.productName}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
          onError={(e) => {
            e.target.src = "/placeholder-image.jpg";
          }}
        />
        

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

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.productName}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {product.productDescription}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold" style={{ color }}>
            ₹{Number(product.productPrice?.toLocaleString("en-IN") || "0")}
          </span>
          <div className="flex flex-col items-end gap-2">
            <button 
              onClick={() => onDelete(product.id)}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-md text-sm font-medium hover:from-red-600 hover:to-red-700 transition-colors"
            >
              Delete
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

export function ProductGridForAdmin({ products, onDeleteProduct, color }) {
   if (!products || products.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-100 rounded-lg">
        <div className="text-gray-500 mb-4">
          <svg className="h-24 w-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <p className="text-gray-500">No products found</p>
      </div>
    );
  }
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            color={color}
            onDelete={onDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
}