"use client";
import React from "react";

function ContactForm({
  contactForm,
  handleContactFormChange,
  handleContactSubmit,
}) {
  return (
    <form
      className="flex flex-col grow items-start text-xl text-black max-md:mt-10 max-md:max-w-full"
      onSubmit={handleContactSubmit}
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="self-end text-4xl">
        Get Involved
      </h2>

      <h3 className="mt-7 text-3xl font-bold">Contact Us</h3>

      <label htmlFor="name" className="mt-4 max-md:ml-0.5">
        Name
      </label>
      <input
        id="name"
        className="flex shrink-0 px-4 py-0 max-w-full bg-white border border-black border-solid transition-all duration-[0.3s] ease-[ease] h-[50px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[519px]"
        value={contactForm.name}
        onChange={(e) => handleContactFormChange("name", e.target.value)}
        required
      />

      <label htmlFor="email" className="z-10 mt-11 max-md:mt-10 max-md:ml-0.5">
        Email
      </label>
      <input
        id="email"
        type="email"
        className="flex shrink-0 px-4 py-0 max-w-full bg-white border border-black border-solid transition-all duration-[0.3s] ease-[ease] h-[58px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[519px]"
        value={contactForm.email}
        onChange={(e) => handleContactFormChange("email", e.target.value)}
        required
      />

      <label htmlFor="message" className="mt-8 max-md:ml-0.5">
        Message
      </label>
      <textarea
        id="message"
        className="flex shrink-0 p-4 max-w-full bg-white border border-black border-solid transition-all resize-none duration-[0.3s] ease-[ease] h-[170px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[519px]"
        value={contactForm.message}
        onChange={(e) => handleContactFormChange("message", e.target.value)}
        required
      />

      <button
        type="submit"
        className="px-16 py-3.5 mt-7 max-w-full text-2xl text-center text-white bg-gray-800 rounded-full transition-all cursor-pointer border-[none] duration-[0.3s] ease-[ease] w-[519px] max-md:px-5"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
