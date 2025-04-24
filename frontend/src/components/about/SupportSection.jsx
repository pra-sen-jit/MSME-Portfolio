import React from "react";

function SupportSection() {
  return (
    <section
      className="flex flex-col justify-center items-center px-6 py-20 mt-24 w-full bg-indigo-600 text-white text-center max-md:py-12 max-md:mt-10"
      aria-labelledby="support-heading"
    >
      <div className="max-w-3xl">
        <h2
          id="support-heading"
          className="text-4xl font-bold leading-tight max-md:text-3xl"
        >
          Support Our Artisans
        </h2>

        <p className=" font-sans mt-6 text-lg leading-relaxed max-md:text-base">
          Discover unique pieces of silver filigree art and help preserve this
          timeless craft for future generations.
        </p>

        <div className="mt-10 flex justify-center gap-6 max-md:flex-col max-md:items-center">
          <button
            className="px-8 py-3 text-indigo-600 bg-white rounded-lg font-semibold hover:bg-gray-100 transition"
            aria-label="Browse catalog of silver filigree products"
          >
            Browse Catalog
          </button>

          <button
            className="px-8 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
            aria-label="Contact artisans directly"
          >
            Contact Artisans
          </button>
        </div>
      </div>
    </section>
  );
}

export default SupportSection;
