import React, { useState } from "react";

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

export default ProductCard;
