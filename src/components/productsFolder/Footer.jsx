import React from "react";

function Footer() {
  return (
    <footer
      className="flex overflow-hidden flex-col justify-center px-20 py-11 mt-28 w-full bg-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full"
      aria-label="Site footer"
    >
      <div className="px-4 w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="bg-black bg-opacity-0 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {/* Company Information */}
            <section
              className="w-3/12 max-md:ml-0 max-md:w-full"
              aria-labelledby="company-heading"
            >
              <div className="flex flex-col grow items-start pt-0.5 pr-9 pb-12 w-full bg-black bg-opacity-0 max-md:mt-8">
                <h2
                  id="company-heading"
                  className="text-xl leading-none text-white"
                >
                  Magrahat Filigree
                </h2>
                <p className="mt-7 text-base leading-4 text-neutral-400">
                  Preserving the art of silver filigree craftsmanship
                </p>
              </div>
            </section>

            {/* Quick Links */}
            <section
              className="ml-5 w-3/12 max-md:ml-0 max-md:w-full"
              aria-labelledby="links-heading"
            >
              <div className="flex flex-col grow py-px w-full text-base leading-none bg-black bg-opacity-0 max-md:mt-8">
                <h2 id="links-heading" className="self-start text-white">
                  Quick Links
                </h2>
                <nav
                  className="mt-6 whitespace-nowrap bg-black bg-opacity-0 text-neutral-400"
                  aria-labelledby="links-heading"
                >
                  <ul>
                    <li className="pt-0.5 pb-2.5 bg-black bg-opacity-0 max-md:pr-5">
                      <a
                        href="#"
                        className="text-neutral-400 hover:text-white transition-colors"
                      >
                        About
                      </a>
                    </li>
                    <li className="pt-0.5 pb-2.5 mt-2 bg-black bg-opacity-0 max-md:pr-5">
                      <a
                        href="#"
                        className="text-neutral-400 hover:text-white transition-colors"
                      >
                        Products
                      </a>
                    </li>
                    <li className="pt-0.5 pb-2.5 mt-2 bg-black bg-opacity-0 max-md:pr-5">
                      <a
                        href="#"
                        className="text-neutral-400 hover:text-white transition-colors"
                      >
                        Artisans
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>

            {/* Contact Information */}
            <section
              className="ml-5 w-3/12 max-md:ml-0 max-md:w-full"
              aria-labelledby="contact-heading"
            >
              <div className="flex flex-col grow py-px w-full text-base bg-black bg-opacity-0 max-md:mt-8">
                <h2
                  id="contact-heading"
                  className="self-start leading-none text-white"
                >
                  Contact
                </h2>
                <address className="mt-7 bg-black bg-opacity-0 text-neutral-400 not-italic">
                  <p className="py-1 bg-black bg-opacity-0 max-md:pr-5">
                    Email:{" "}
                    <a
                      href="mailto:info@magrahatfiligree.com"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      info@magrahatfiligree.com
                    </a>
                  </p>
                  <p className="pt-0.5 pb-2.5 mt-2 bg-black bg-opacity-0 max-md:pr-5">
                    Phone:{" "}
                    <a
                      href="tel:+911234567890"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      +91 1234567890
                    </a>
                  </p>
                  <p className="py-1.5 mt-2 bg-black bg-opacity-0 max-md:pr-5">
                    Address: Magrahat, West Bengal
                  </p>
                </address>
              </div>
            </section>

            {/* Social Media */}
            <section
              className="ml-5 w-3/12 max-md:ml-0 max-md:w-full"
              aria-labelledby="social-heading"
            >
              <div className="flex flex-col grow pt-0.5 pb-16 w-full text-base leading-none text-white bg-black bg-opacity-0 max-md:mt-8">
                <h2 id="social-heading" className="self-start">
                  Follow Us
                </h2>
                <div className="mt-7">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a84b741f6545a086325dc43840041a8ba5b0595?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                    alt="Social media icons"
                    className="object-contain w-72 aspect-[12.05]"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Copyright */}
        <div className="px-16 pt-9 pb-2 mt-12 text-base leading-none text-center bg-black bg-opacity-0 text-neutral-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          © 2025 Magrahat Silver Filigree. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
