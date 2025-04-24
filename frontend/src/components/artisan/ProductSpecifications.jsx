import React from "react";

function ProductSpecifications({ productNumber }) {
  return (
    <div className="mt-4 max-w-full w-[777px]">
      <h3 className="text-xl font-bold leading-none text-black mb-4">
        Product Specifications
      </h3>

      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[38%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-black max-md:mt-10">
            <label
              htmlFor={`material-${productNumber}`}
              className="self-start mt-3 text-base"
            >
              Material
            </label>
            <input
              id={`material-${productNumber}`}
              type="text"
              className="flex shrink-0 mt-2 bg-white rounded-xl border border-black border-solid h-[50px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
              aria-required="true"
            />
          </div>
        </div>

        <div className="ml-5 w-[21%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-8 text-base text-black whitespace-nowrap max-md:mt-10">
            <label htmlFor={`height-${productNumber}`} className="self-start">
              Height
            </label>
            <input
              id={`height-${productNumber}`}
              type="text"
              className="flex shrink-0 mt-2 bg-white rounded-xl border border-black border-solid h-[50px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>

        <div className="ml-5 w-[21%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-8 text-base text-black whitespace-nowrap max-md:mt-10">
            <label htmlFor={`width-${productNumber}`} className="self-start">
              Width
            </label>
            <input
              id={`width-${productNumber}`}
              type="text"
              className="flex shrink-0 mt-2 bg-white rounded-xl border border-black border-solid h-[50px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>

        <div className="ml-5 w-[21%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-8 text-base text-black whitespace-nowrap max-md:mt-10">
            <label htmlFor={`weight-${productNumber}`} className="self-start">
              Weight
            </label>
            <input
              id={`weight-${productNumber}`}
              type="text"
              className="flex shrink-0 mt-2 bg-white rounded-xl border border-black border-solid h-[50px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSpecifications;
