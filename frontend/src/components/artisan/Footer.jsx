import React from "react";

function Footer() {
  return (
    <footer
      className="overflow-hidden px-20 pt-16 pb-6 mt-24 w-full bg-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="px-4 w-full max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {/* Company Information */}
            <div className="w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start pt-0.5 pr-9 pb-12 w-full max-md:mt-8">
                <h3 className="text-xl leading-none text-white">
                  Magrahat Filigree
                </h3>
                <p className="mt-7 text-base leading-4 text-neutral-400">
                  Preserving the art of silver filigree craftsmanship
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-px w-full text-base leading-none max-md:mt-8">
                <h3 className="self-start text-white">Quick Links</h3>
                <nav
                  className="mt-6 whitespace-nowrap text-neutral-400"
                  aria-label="Quick links"
                >
                  <ul>
                    <li className="pt-0.5 pb-2.5 max-md:pr-5">
                      <a
                        href="#"
                        className="hover:text-white focus:text-white focus:outline-none"
                      >
                        About
                      </a>
                    </li>
                    <li className="pt-0.5 pb-2.5 mt-2 max-md:pr-5">
                      <a
                        href="#"
                        className="hover:text-white focus:text-white focus:outline-none"
                      >
                        Products
                      </a>
                    </li>
                    <li className="pt-0.5 pb-2.5 mt-2 max-md:pr-5">
                      <a
                        href="#"
                        className="hover:text-white focus:text-white focus:outline-none"
                      >
                        Artisans
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Contact Information */}
            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-px w-full text-base max-md:mt-8">
                <h3 className="self-start leading-none text-white">Contact</h3>
                <ul className="mt-7 text-neutral-400">
                  <li className="py-1 max-md:pr-5">
                    <a
                      href="mailto:info@magrahatfiligree.com"
                      className="hover:text-white focus:text-white focus:outline-none"
                    >
                      Email: info@magrahatfiligree.com
                    </a>
                  </li>
                  <li className="pt-0.5 pb-2.5 mt-2 max-md:pr-5">
                    <a
                      href="tel:+911234567890"
                      className="hover:text-white focus:text-white focus:outline-none"
                    >
                      Phone: +91 1234567890
                    </a>
                  </li>
                  <li className="py-1.5 mt-2 max-md:pr-5">
                    Address: Magrahat, West Bengal
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media */}
            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pt-0.5 pb-16 w-full text-base leading-none text-white max-md:mt-8">
                <h3 className="self-start">Follow Us</h3>
                <div className="mt-7">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff586cef8d1c699a4590abd4c5f9cb9ed5e03208?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                    alt="Social media icons"
                    className="object-contain w-72 aspect-[12.05]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="px-16 pt-9 pb-2 mt-12 text-base leading-none text-center text-neutral-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          © 2025 Magrahat Silver Filigree. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
