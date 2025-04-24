import React from "react";

function ProductSpecifications({ productNumber }) {
  return (
    <div className="w-full mb-4">
      <h3 className="text-sm font-normal text-black mb-3">
        Product Specifications
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label
            htmlFor={`material-${productNumber}`}
            className="block text-sm mb-1"
          >
            Material
          </label>
          <input
            id={`material-${productNumber}`}
            type="text"
            className="w-full h-10 px-3 rounded border border-black shadow-sm transition-shadow duration-200 focus:shadow-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            aria-required="true"
          />
        </div>

        <div>
          <label
            htmlFor={`height-${productNumber}`}
            className="block text-sm mb-1"
          >
            Height
          </label>
          <input
            id={`height-${productNumber}`}
            type="text"
            className="w-full h-10 px-3 rounded border border-black shadow-sm transition-shadow duration-200 focus:shadow-md focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>

        <div>
          <label
            htmlFor={`width-${productNumber}`}
            className="block text-sm mb-1"
          >
            Width
          </label>
          <input
            id={`width-${productNumber}`}
            type="text"
            className="w-full h-10 px-3 rounded border border-black shadow-sm transition-shadow duration-200 focus:shadow-md focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>

        <div>
          <label
            htmlFor={`weight-${productNumber}`}
            className="block text-sm mb-1"
          >
            Weight
          </label>
          <input
            id={`weight-${productNumber}`}
            type="text"
            className="w-full h-10 px-3 rounded border border-black shadow-sm transition-shadow duration-200 focus:shadow-md focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductSpecifications;
