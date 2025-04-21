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
      className="px-6 py-10 w-full bg-gray-200 flex justify-center"
      aria-labelledby="contact-section"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
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
