import React from "react";

function ProductCard({ image, title, artisan }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div className="w-full h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col items-center p-6 text-center">
        <h3 className="text-2xl font-semibold text-black mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{artisan}</p>
      </div>
    </div>
  );
}

export default ProductCard;
