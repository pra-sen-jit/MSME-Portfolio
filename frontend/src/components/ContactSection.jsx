import React from "react";

function ContactSection() {
  return (
    <section
      className="w-full bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100 py-12"
      aria-labelledby="contact-section"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 id="contact-section" className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Our Location
        </h2>
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg bg-white">
          <iframe
            title="Magrahat Filigree Workshop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.0597661512602!2d88.3716384389883!3d22.312545093517123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026925491108ad%3A0xd304b6df45c7a6b0!2sMoukhali%20Shiv%20Mandir!5e1!3m2!1sen!2sin!4v1747478954449!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            aria-label="Magrahat Filigree Workshop Location"
            className="rounded-lg"
          ></iframe>
        </div>
        <div className="mt-4 text-center text-gray-700">
          <p className="font-medium">Magrahat, West Bengal, India</p>
          <p className="mt-1">Visit us at our workshop!</p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;