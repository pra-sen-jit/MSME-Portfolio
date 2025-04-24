"use client";
import React from "react";
import SearchBar from "./SearchBar";
import NavigationBar from "./NavigationBar";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import CustomerFeedback from "./CustomerFeedback";
import ContactSection from "./ContactSection";
import TeamSection from "./TeamSection";

function LandingPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeNavItem, setActiveNavItem] = React.useState("HOME");
  const [contactForm, setContactForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleNavClick = (item) => {
    setActiveNavItem(item);
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
    <>
      <main className="flex flex-col pt-2.5 overflow-hidden bg-white">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center px-16 pt-3.5 pb-80 mt-3.5 w-full min-h-[773px] overflow-hidden max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b2cd4d8230ec436778f1c4599ca00505db2f958?placeholderIfAbsent=true"
            alt="Hero background"
            className="absolute inset-0 object-cover size-full"
          />

          <NavigationBar
            activeNavItem={activeNavItem}
            handleNavClick={handleNavClick}
          />

          <h2 className="relative mt-36 text-5xl text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Embrace the Timeless Beauty of Silver
          </h2>

          <p className="relative mt-10 text-3xl text-white">
            Uncover Handcrafted Brilliance
          </p>

          <button className="relative mt-14 px-8 py-4 text-xl font-semibold text-black bg-yellow-400 rounded-full shadow-md hover:bg-yellow-300 transition duration-300 cursor-pointer">
            <a href="/about">Explore Now</a>
          </button>
        </section>

        {/* About, Products, and other Sections */}
        <AboutSection />
        <ProductsSection />

        {/* Logo Decoration Section */}
        <section className="flex justify-center items-center px-20 py-4 mt-24 w-full bg-gray-200 overflow-hidden max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9d83d3761fb075f8f82ce5308d9f341c9724160?placeholderIfAbsent=true"
            alt="Decorative logo"
            className="object-contain w-[179px] aspect-square"
          />
        </section>

        <CustomerFeedback />
        <ContactSection
          contactForm={contactForm}
          handleContactFormChange={handleContactFormChange}
          handleContactSubmit={handleContactSubmit}
        />
        <TeamSection />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default LandingPage;
