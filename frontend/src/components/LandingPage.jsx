"use client";
import React from "react";
import SearchBar from "./SearchBar";
import NavigationBar from "./NavigationBar";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import CustomerFeedback from "./CustomerFeedback";
import ContactSection from "./ContactSection";
import TeamSection from "./TeamSection";
import Footer from "./Footer";

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
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", contactForm);
    // Reset form
    setContactForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleContactFormChange = (field, value) => {
    setContactForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <main className="flex overflow-hidden flex-col pt-2.5 bg-white">
      <header className="flex flex-wrap gap-5 justify-between items-start self-center w-full max-w-[1331px] max-md:max-w-full">
        <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />

        <h1 className="self-stretch text-5xl text-black max-md:text-4xl">
          MAGRAHAT
        </h1>

        <div className="flex gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/922b80cdb9e3dc6f91a6cfddc0f16b1eae74ff38?placeholderIfAbsent=true"
            alt="Social media icon"
            className="object-contain overflow-hidden shrink-0 aspect-square w-[42px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0c06e53a3188190e19736d3d5e3a336a6081799?placeholderIfAbsent=true"
            alt="Social media icon"
            className="object-contain overflow-hidden shrink-0 aspect-square w-[42px]"
          />
        </div>
      </header>

      <section className="flex overflow-hidden relative flex-col items-center px-16 pt-3.5 pb-80 mt-3.5 w-full min-h-[773px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b2cd4d8230ec436778f1c4599ca00505db2f958?placeholderIfAbsent=true"
          alt="Hero background"
          className="object-cover absolute inset-0 size-full"
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

        <button className="relative mt-20 mb-0 text-3xl text-black max-md:mt-10 max-md:mb-2.5">
          Explore
        </button>
      </section>

      <AboutSection />
      <ProductsSection />

      <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-4 mt-24 w-full bg-gray-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9d83d3761fb075f8f82ce5308d9f341c9724160?placeholderIfAbsent=true"
          alt="Decorative logo"
          className="object-contain overflow-hidden max-w-full aspect-square w-[179px]"
        />
      </section>

      <CustomerFeedback />
      <ContactSection
        contactForm={contactForm}
        handleContactFormChange={handleContactFormChange}
        handleContactSubmit={handleContactSubmit}
      />
      <TeamSection />
      <Footer />
    </main>
  );
}

export default LandingPage;
