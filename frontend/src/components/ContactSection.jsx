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
      className="px-6 py-12 w-full bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100 flex justify-center"
      aria-labelledby="contact-section"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        <ContactForm
          contactForm={contactForm}
          handleContactFormChange={handleContactFormChange}
          handleContactSubmit={handleContactSubmit}
        />
        <ContactInfo />
      </div>
    </section>
  );
}

export default ContactSection;
