import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

<<<<<<< HEAD
function ContactSection({
  contactForm,
  handleContactFormChange,
  handleContactSubmit,
}) {
  return (
    <section
      className="flex overflow-hidden z-10 flex-col justify-center items-center px-16 py-9 w-full bg-gray-200 max-md:px-5 max-md:max-w-full"
      aria-labelledby="contact-section"
    >
      <div className="w-full max-w-6xl max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[62%] max-md:ml-0 max-md:w-full">
=======
function ContactSection({ contactForm, handleContactFormChange, handleContactSubmit }) {
  return (
    <section
      className="flex flex-col justify-center items-center px-16 py-9 w-full bg-gray-200 overflow-hidden z-10 max-md:px-5 max-md:max-w-full"
      aria-labelledby="contact-section"
    >
      <h2 id="contact-section" className="text-3xl font-semibold mb-8 text-center">
        Get in Touch
      </h2>

      <div className="w-full max-w-6xl max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[62%] max-md:w-full">
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
            <ContactForm
              contactForm={contactForm}
              handleContactFormChange={handleContactFormChange}
              handleContactSubmit={handleContactSubmit}
            />
          </div>

<<<<<<< HEAD
          <div className="ml-5 w-[38%] max-md:ml-0 max-md:w-full">
=======
          <div className="w-[38%] max-md:w-full">
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
