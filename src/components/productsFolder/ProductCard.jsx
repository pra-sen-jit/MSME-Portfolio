import React from "react";

function ProductCard({ image, title, price }) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg duration-300 border border-gray-100">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-64 cursor-pointer hover:opacity-90 transition-opacity"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">{title}</h3>
        <p className="text-lg font-medium text-indigo-600">{price}</p>
      </div>
    </article>
  );
}

export default ProductCard;