import React from "react";

function ProductCard({ image, title, artisan }) {
  return (
    <article className="grow text-black max-md:mt-10">
      <img
        src={image}
        alt={title}
        className="object-contain overflow-hidden w-full rounded-2xl aspect-square"
      />
      <div className="flex flex-col items-start pt-3 pr-20 pb-5 pl-5 bg-gray-200 rounded-none max-md:pr-5">
        <h3 className="text-3xl">{title}</h3>
        <p className="text-2xl font-extralight">{artisan}</p>
      </div>
    </article>
  );
}

export default ProductCard;
