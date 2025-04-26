import React from "react";

function SupportSection() {
  return (
    <section
      className="w-full bg-indigo-600 text-white px-4 py-20 sm:px-8 md:px-16 lg:px-24 text-center"
      aria-labelledby="support-heading"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="support-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          Support Our Artisans
        </h2>

        <p className="text-lg sm:text-xl text-indigo-100 leading-relaxed mb-10">
          Discover unique pieces of silver filigree art and help preserve this
          timeless craft for future generations.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <button
            className="px-6 py-3 sm:px-8 sm:py-3.5 text-indigo-600 bg-white font-semibold rounded-full shadow-md hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Browse catalog of silver filigree products"
          >
            Browse Catalog
          </button>

          <button
            className="px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-white font-semibold rounded-full shadow-md hover:bg-white hover:text-indigo-600 hover:scale-105 active:scale-95 transition-all duration-300"
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
