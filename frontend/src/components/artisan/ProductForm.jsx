"use client";
import React from "react";
import ProductSpecifications from "./ProductSpecifications";
import AdditionalImages from "./AdditionalImages";

function ProductForm({ productNumber, hasImage }) {
  return (
    <section
      className="w-full max-w-[1305px] max-md:max-w-full"
      aria-labelledby={`product-${productNumber}-heading`}
    >
      <h2
        id={`product-${productNumber}-heading`}
        className="mt-8 text-2xl font-light leading-none text-black"
      >
        Product No: {productNumber}
      </h2>

      <div className="flex gap-5 max-md:flex-col">
        {/* Product Image Column */}
        <div className="w-[36%] max-md:ml-0 max-md:w-full">
          {hasImage ? (
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f68ad32259917c95f03912470391095022fa771b?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
              alt={`Product ${productNumber} preview`}
              className="object-contain self-stretch mt-5 w-full rounded-2xl aspect-[1.13] max-md:max-w-full"
            />
          ) : (
            <div className="flex flex-col grow justify-center items-center px-20 py-20 mt-7 w-full rounded-2xl bg-zinc-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4894804c5194f14c6740cea8d6fbc3b2af1d4955?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                alt="Upload product image"
                className="object-contain max-w-full aspect-square w-[236px]"
              />
            </div>
          )}
        </div>

        {/* Product Details Column */}
        <div className="ml-5 w-[64%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start w-full max-md:mt-8 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 max-w-full text-black w-[777px]">
              <div className="flex flex-col grow shrink-0 text-base basis-0 w-fit max-md:max-w-full">
                <label
                  htmlFor={`product-name-${productNumber}`}
                  className="self-start"
                >
                  Product Name
                </label>
                <input
                  id={`product-name-${productNumber}`}
                  type="text"
                  className="flex shrink-0 mt-2 bg-white rounded-xl border border-black border-solid h-[50px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full w-full"
                  aria-required="true"
                />
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <label
                  htmlFor={`product-price-${productNumber}`}
                  className="self-start text-base"
                >
                  Price
                </label>
                <div className="relative">
                  <input
                    id={`product-price-${productNumber}`}
                    type="text"
                    className="px-8 py-3.5 mt-2 text-2xl font-light leading-none bg-white rounded-xl border border-black border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-32"
                    aria-required="true"
                  />
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl font-light">
                    ₹
                  </span>
                </div>
              </div>
            </div>

            <hr className="shrink-0 self-stretch mt-10 h-px border border-black border-solid max-md:max-w-full" />

            <ProductSpecifications productNumber={productNumber} />

            <hr className="shrink-0 self-stretch mt-7 h-px border border-black border-solid max-md:max-w-full" />

            <AdditionalImages productNumber={productNumber} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductForm;
