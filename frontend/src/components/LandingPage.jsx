"use client";
import React from "react";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import CustomerFeedback from "./CustomerFeedback";
import ContactSection from "./ContactSection";
import TeamSection from "./TeamSection";
import AnimatedPage from "./AnimatedPage";

function LandingPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [contactForm, setContactForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", contactForm);
    setContactForm({ name: "", email: "", message: "" });
  };

  const handleContactFormChange = (field, value) => {
    setContactForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <AnimatedPage>
      <main className="flex flex-col overflow-x-hidden bg-white">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets/TEMP/8b2cd4d8230ec436778f1c4599ca00505db2f958?placeholderIfAbsent=true')",
          }}
        >
          {/* Light transparent overlay just for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Text content stays on top */}
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-5xl font-bold leading-tight max-w-3xl mx-auto text-white md:text-6xl">
              Embrace the Timeless Beauty of Silver
            </h1>
            <p className="mt-6 text-2xl font-light text-white md:text-3xl">
              Uncover Handcrafted Brilliance
            </p>
            <a
              href="/about"
              className="mt-10 inline-block px-8 py-4 text-lg font-semibold text-black bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
            >
              Explore Now
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 md:px-16">
          <AboutSection />
        </section>

        {/* Products Section */}
        <section className="py-20 px-6 bg-gray-50 md:px-16">
          <ProductsSection />
        </section>

        {/* Logo Decoration */}
        <section className="flex justify-center items-center py-12 bg-gray-200">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9d83d3761fb075f8f82ce5308d9f341c9724160?placeholderIfAbsent=true"
            alt="Decorative logo"
            className="object-contain w-32 h-32 md:w-48 md:h-48"
          />
        </section>

        {/* Customer Feedback Section */}
        <section className="py-20 px-6 md:px-16">
          <CustomerFeedback />
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 bg-gray-50 md:px-16">
          <ContactSection
            contactForm={contactForm}
            handleContactFormChange={handleContactFormChange}
            handleContactSubmit={handleContactSubmit}
          />
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 md:px-16">
          <TeamSection />
        </section>
      </main>
    </AnimatedPage>
  );
}

export default LandingPage;
