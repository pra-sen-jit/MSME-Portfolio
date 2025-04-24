import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function ContactSection({
  contactForm,
  handleContactFormChange,
  handleContactSubmit,
}) {
  return (
    <section
      className="flex flex-col justify-center items-center px-16 py-9 w-full bg-gray-200 overflow-hidden z-10 max-md:px-5 max-md:max-w-full"
      aria-labelledby="contact-section"
    >
      <h2
        id="contact-section"
        className="text-3xl font-semibold mb-8 text-center"
      >
        Get in Touch
      </h2>

      <div className="w-full max-w-6xl max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[62%] max-md:w-full">
            <ContactForm
              contactForm={contactForm}
              handleContactFormChange={handleContactFormChange}
              handleContactSubmit={handleContactSubmit}
            />
          </div>

          <div className="w-[38%] max-md:w-full">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
