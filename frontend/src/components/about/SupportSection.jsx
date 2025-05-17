import React from "react";
import { Link } from "react-router-dom";

function SupportSection() {
  return (
    <section
      className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-0 py-20 text-center"
      aria-labelledby="support-heading"
    >
      <div className="-mx-4 sm:-mx-8 md:-mx-16 lg:-mx-24 px-4 sm:px-8 md:px-16 lg:px-24">
        <h2
          id="support-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          Support Our Artisans
        </h2>

        <p className="text-lg sm:text-xl text-white leading-relaxed mb-10">
          Discover unique pieces of silver filigree art and help preserve this
          timeless craft for future generations.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link to="/product">
          <button
            className="px-6 py-3 sm:px-8 sm:py-3.5 text-indigo-600 bg-white font-semibold rounded-full shadow-md hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Browse catalog of silver filigree products"
          >
            Browse Catalog
          </button>
          </Link>

          <Link to="/artisandb">
            <button
              className="px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-white font-semibold rounded-full shadow-md hover:bg-white hover:text-indigo-600 hover:scale-105 active:scale-95 transition-all duration-300"
              aria-label="Contact artisans directly"
            >
              Contact Artisans
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SupportSection;
