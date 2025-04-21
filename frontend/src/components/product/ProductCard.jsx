import React from "react";

function ProductCard({ image, title, price }) {
  return (
    <article className="grow text-base leading-none max-md:mt-6">
      <img
        src={image}
        alt={title}
        className="object-contain w-full rounded-lg aspect-[1.41]"
      />
      <div className="flex flex-col justify-center px-px py-1 bg-gray-200 rounded-none">
        <div className="flex z-10 flex-col items-start py-3 pr-16 pl-4 bg-black bg-opacity-0 max-md:pr-5">
          <h3 className="text-black">{title}</h3>
          <p className="mt-4 text-neutral-600">{price}</p>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
