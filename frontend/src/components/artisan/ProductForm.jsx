"use client";
import React from "react";
import ProductSpecifications from "./ProductSpecifications";
import AdditionalImages from "./AdditionalImages";

function ProductForm({ productNumber, hasImage }) {
  return (
    <section
      className="w-full mb-8"
      aria-labelledby={`product-${productNumber}-heading`}
    >
      <h2
        id={`product-${productNumber}-heading`}
        className="mt-6 mb-4 text-lg font-normal text-black"
      >
        Product No: {productNumber}
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image Column */}
        <div className="w-full md:w-1/3">
          {hasImage ? (
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f68ad32259917c95f03912470391095022fa771b?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
              alt={`Product ${productNumber} preview`}
              className="w-full object-cover rounded bg-gray-100"
            />
          ) : (
            <div className="flex flex-col justify-center items-center p-6 w-full aspect-square bg-zinc-300 rounded">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-500"
              >
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Product Details Column */}
        <div className="w-full md:w-2/3">
          <div className="flex flex-col w-full">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
              <div className="flex-grow">
                <label
                  htmlFor={`product-name-${productNumber}`}
                  className="block text-sm mb-1"
                >
                  Product Name
                </label>
                <input
                  id={`product-name-${productNumber}`}
                  type="text"
                  className="w-full h-10 px-3 rounded border border-black shadow-sm"
                  aria-required="true"
                />
              </div>
              <div className="w-full sm:w-32">
                <label
                  htmlFor={`product-price-${productNumber}`}
                  className="block text-sm mb-1"
                >
                  Price
                </label>
                <div className="relative">
                  <input
                    id={`product-price-${productNumber}`}
                    type="text"
                    className="w-full h-10 pl-6 pr-3 rounded border border-black shadow-sm"
                    aria-required="true"
                  />
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base">
                    ₹
                  </span>
                </div>
              </div>
            </div>

            <hr className="border-t border-black my-4" />

            <ProductSpecifications productNumber={productNumber} />

            <hr className="border-t border-black my-4" />

            <AdditionalImages productNumber={productNumber} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductForm;
