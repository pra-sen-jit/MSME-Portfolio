"use client";
import React from "react";

function ContactForm({
  contactForm,
  handleContactFormChange,
  handleContactSubmit,
}) {
  return (
    <form
      className="flex flex-col gap-4 text-base text-black"
      onSubmit={handleContactSubmit}
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="text-2xl font-semibold">
        Get Involved
      </h2>

      <h3 className="text-xl font-bold">Contact Us</h3>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        className="px-4 py-2 w-full bg-white border border-black shadow-sm"
        value={contactForm.name}
        onChange={(e) => handleContactFormChange("name", e.target.value)}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        className="px-4 py-2 w-full bg-white border border-black shadow-sm"
        value={contactForm.email}
        onChange={(e) => handleContactFormChange("email", e.target.value)}
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        className="p-4 w-full bg-white border border-black shadow-sm resize-none h-32"
        value={contactForm.message}
        onChange={(e) => handleContactFormChange("message", e.target.value)}
        required
      />

      <button
        type="submit"
        className="self-start px-8 py-2 mt-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 transition-all"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;