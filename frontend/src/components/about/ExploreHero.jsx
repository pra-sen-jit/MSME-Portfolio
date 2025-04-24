"use client";
import React from "react";

function ExploreHero() {
  return (
    <section
      className="relative mt-4 w-full text-white bg-black max-md:max-w-full"
      aria-labelledby="hero-heading"
    >
      <div className="relative flex flex-col w-full min-h-[600px]">
        {/* Background Image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1f5af19800ff277164143ef598d7ae646300feb?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
          alt="Magrahat landscape"
          className="object-cover absolute inset-0 w-full h-full z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-60 z-0" />

        {/* Navigation Bar */}
        <nav
          aria-label="Main Navigation"
          className="absolute top-0 left-0 z-10 w-full px-10 py-6"
        >
          <ul className="flex justify-around gap-20 text-lg font-medium max-md:gap-6">
            <li>
              <a href="/" className="hover:underline">
                HOME
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline font-bold">
                ABOUT
              </a>
            </li>
            <li>
              <a href="/product" className="hover:underline">
                PRODUCT
              </a>
            </li>
            <li>
              <a href="/artisan" className="hover:underline">
                ARTISAN
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>

        {/* Hero Text */}
        <div className="relative z-10 px-20 mt-48 max-w-3xl max-md:px-5 max-md:mt-32">
          <h2
            id="hero-heading"
            className="text-5xl font-bold leading-tight max-md:text-4xl"
          >
            Discovering Magrahat
          </h2>
          <p className="mt-6 text-xl leading-relaxed max-md:text-base">
            A journey through time, tradition, and the artistry of silver
            filigree in West Bengal's cultural heartland.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExploreHero;
