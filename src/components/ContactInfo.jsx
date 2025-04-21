import React from "react";

function ContactInfo() {
  return (
    <div className="flex flex-col gap-6 text-base text-black">
      <h3 className="text-xl font-bold">Connect With Us</h3>

      <address className="flex flex-col gap-4 not-italic">
        <div className="flex gap-3 items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f42e0e37ee91410d45ddd1106843a708841163fb?placeholderIfAbsent=true"
            alt="Location icon"
            className="w-4 h-4"
          />
          <p>Magrahat, West Bengal, India</p>
        </div>

        <div className="flex gap-3 items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dc4bfdcd47dac95708bfdf0186b3b1ff066c840?placeholderIfAbsent=true"
            alt="Email icon"
            className="w-4 h-4"
          />
          <a href="mailto:contact@magrahatfiligree.com">
            contact@magrahatfiligree.com
          </a>
        </div>

        <div className="flex gap-3 items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8c877aca77d86bd2fa671d14931c4505761a9b3?placeholderIfAbsent=true"
            alt="Phone icon"
            className="w-4 h-4"
          />
          <a href="tel:+911234567890">+91 1234567890</a>
        </div>
      </address>

      <div className="mt-4">
        <h4 className="text-lg font-semibold">Follow Us</h4>
        <div className="flex gap-3 mt-2">
          <a href="#" aria-label="Facebook">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d47ebb1839a6ae76851c12fd7cc3de3f833a4207?placeholderIfAbsent=true"
              alt="Facebook"
              className="w-5 h-5"
            />
          </a>
          <a href="#" aria-label="Twitter">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/30cc39378a3f1fd5be3c76bf40ee76f8eb1ee241?placeholderIfAbsent=true"
              alt="Twitter"
              className="w-5 h-5"
            />
          </a>
          <a href="#" aria-label="Instagram">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/60148ad55d6056c1065566681d6b746776e01369?placeholderIfAbsent=true"
              alt="Instagram"
              className="w-5 h-5"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;