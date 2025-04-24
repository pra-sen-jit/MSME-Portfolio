import React from "react";

function ProductCard({ image, title, artisan }) {
  return (
    <article className="w-full max-w-[240px] bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="w-full aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="px-4 py-3 bg-gray-100">
        <h3 className="text-lg font-semibold text-black truncate">{title}</h3>
        <p className="text-sm text-gray-600 mt-1 truncate">{artisan}</p>
      </div>
    </article>
  );
}

export default ProductCard;
