"use client";
import React from "react";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa"; // Importing icons

function ContactForm({
  contactForm,
  handleContactFormChange,
  handleContactSubmit,
}) {
  return (
    <form
      className="flex flex-col gap-6 text-base text-black animate__animated animate__fadeIn"
      onSubmit={handleContactSubmit}
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="text-2xl font-semibold">
        Get Involved
      </h2>

      <h3 className="text-xl font-bold">Contact Us</h3>

      <label htmlFor="name" className="flex items-center gap-2">
        <FaUser className="text-lg" /> Name
      </label>
      <input
        id="name"
        className="px-4 py-2 w-full bg-white border border-black shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-gray-50 focus:bg-gray-100 focus:shadow-lg"
        value={contactForm.name}
        onChange={(e) => handleContactFormChange("name", e.target.value)}
        required
      />

      <label htmlFor="email" className="flex items-center gap-2">
        <FaEnvelope className="text-lg" /> Email
      </label>
      <input
        id="email"
        type="email"
        className="px-4 py-2 w-full bg-white border border-black shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-gray-50 focus:bg-gray-100 focus:shadow-lg"
        value={contactForm.email}
        onChange={(e) => handleContactFormChange("email", e.target.value)}
        required
      />

      <label htmlFor="message" className="flex items-center gap-2">
        <FaComment className="text-lg" /> Message
      </label>
      <textarea
        id="message"
        className="p-4 w-full bg-white border border-black shadow-sm resize-none h-32 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-gray-50 focus:bg-gray-100 focus:shadow-lg"
        value={contactForm.message}
        onChange={(e) => handleContactFormChange("message", e.target.value)}
        required
      />

      <button
        type="submit"
        className="self-start px-8 py-2 mt-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 ease-in-out"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;