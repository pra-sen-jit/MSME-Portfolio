import React from "react";

function ImpactSection() {
  return (
    <section
      className="flex flex-col justify-center p-20 mt-12 w-full bg-gray-50 max-md:px-5 max-md:mt-10 max-md:max-w-full"
      aria-labelledby="impact-heading"
    >
      <div className="flex flex-col items-center px-20 bg-opacity-0 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-start pb-3.5 max-w-full  bg-opacity-0 w-[926px]">
          <h2
            id="impact-heading"
            className="z-10 ml-4 text-3xl font-bold leading-none text-black max-md:ml-2.5"
          >
            Economic & Social Impact
          </h2>
          <div className="self-stretch px-4 pt-1.5 pb-6 mt-12  bg-opacity-0 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-[33%] max-md:ml-0 max-md:w-full">
                <div className="grow p-6 w-full bg-white rounded-lg shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:px-5 max-md:mt-9">
                  <div className="z-10 pb-4 text-4xl font-bold text-indigo-600 whitespace-nowrap  bg-opacity-0 max-md:pr-5">
                    2000+
                  </div>
                  <p className="pt-0.5 pb-2.5 mt-2 text-base text-gray-600  bg-opacity-0 max-md:pr-5">
                    Active Artisans
                  </p>
                </div>
              </div>
              <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="grow p-6 w-full bg-white rounded-lg shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:px-5 max-md:mt-9">
                  <div className="z-10 pb-4 text-4xl font-bold text-indigo-600 whitespace-nowrap  bg-opacity-0 max-md:pr-5">
                    ₹50Cr
                  </div>
                  <p className="pt-0.5 pb-2.5 mt-2 text-base text-gray-600  bg-opacity-0 max-md:pr-5">
                    Annual Revenue
                  </p>
                </div>
              </div>
              <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="grow p-6 w-full bg-white rounded-lg shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:px-5 max-md:mt-9">
                  <div className="z-10 pb-4 text-4xl font-bold text-indigo-600 whitespace-nowrap  bg-opacity-0 max-md:pr-5">
                    15%
                  </div>
                  <p className="pt-0.5 pb-2.5 mt-2 text-base text-gray-600  bg-opacity-0 max-md:pr-5">
                    Annual Growth
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className=" font-sans mt-8 ml-4 text-base leading-4 text-gray-600 max-md:max-w-full">
            The silver filigree industry continues to be a significant
            contributor to Magrahat's economy, providing employment and
            preserving cultural heritage while adapting to modern market
            demands.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
