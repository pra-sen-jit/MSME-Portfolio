"use client";
import React from "react";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import CustomerFeedback from "./CustomerFeedback";
import ContactSection from "./ContactSection";
import TeamSection from "./TeamSection";
import AnimatedPage from "./AnimatedPage";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <AnimatedPage>
      <main className="flex flex-col overflow-x-hidden bg-white">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 text-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets/TEMP/8b2cd4d8230ec436778f1c4599ca00505db2f958?placeholderIfAbsent=true')",
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-3xl font-bold leading-tight max-w-3xl mx-auto text-white md:text-4xl lg:text-5xl">
              Embrace the Timeless Beauty of Silver
            </h1>
            <p className="mt-3 text-lg font-light text-white md:text-xl lg:text-2xl">
              Uncover Handcrafted Brilliance
            </p>
            <Link
              to="/about"
              className="mt-6 inline-block px-5 py-2.5 text-base font-semibold text-black bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
            >
              Explore Now
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="py-10 px-6 md:px-10">
          <AboutSection />
        </section>

        {/* Products Section */}
        <section className="py-10 px-6 md:px-10 bg-gray-50">
          <ProductsSection />
        </section>

        {/* Logo Decoration */}
        <section className="flex justify-center items-center py-6 bg-gray-200">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9d83d3761fb075f8f82ce5308d9f341c9724160?placeholderIfAbsent=true"
            alt="Decorative logo"
            className="object-contain w-24 h-24 md:w-36 md:h-36"
          />
        </section>

        {/* Customer Feedback Section */}
        <section className="py-10 px-6 md:px-10">
          <CustomerFeedback />
        </section>

        {/* Contact Section */}
        <section>
          <ContactSection />
        </section>

        {/* Team Section */}
        <section className="py-10 px-6 md:px-10 pb-12">
          <TeamSection />
        </section>
      </main>
    </AnimatedPage>
  );
}

export default LandingPage;