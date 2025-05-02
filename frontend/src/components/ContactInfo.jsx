import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="flex flex-col gap-6 text-base text-black animate__animated animate__fadeIn">
      <h3 className="text-xl font-bold">Connect With Us</h3>

      <address className="flex flex-col gap-4 not-italic">
        <div className="flex gap-3 items-center">
          <FaMapMarkerAlt className="w-5 h-5 text-gray-700" />
          <p>Magrahat, West Bengal, India</p>
        </div>

        <div className="flex gap-3 items-center">
          <FaEnvelope className="w-5 h-5 text-gray-700" />
          <a
            href="mailto:contact@magrahatfiligree.com"
            className="text-blue-600 hover:underline"
          >
            contact@magrahatfiligree.com
          </a>
        </div>

        <div className="flex gap-3 items-center">
          <FaPhoneAlt className="w-5 h-5 text-gray-700" />
          <a href="tel:+911234567890" className="text-blue-600 hover:underline">
            +91 1234567890
          </a>
        </div>
      </address>

      <div className="mt-4">
        <h4 className="text-lg font-semibold">Follow Us</h4>
        <div className="flex gap-6 mt-2 justify-center sm:justify-start">
          <a
            href="#"
            aria-label="Facebook"
            className="transition-all hover:scale-110"
          >
            <FaFacebook className="w-6 h-6 text-blue-600 hover:text-blue-800" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="transition-all hover:scale-110"
          >
            <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-600" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="transition-all hover:scale-110"
          >
            <FaInstagram className="w-6 h-6 text-pink-600 hover:text-pink-800" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;