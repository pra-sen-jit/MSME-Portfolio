import React from "react";

function ExploreFooter() {
  return (
    <footer
      className="overflow-hidden px-20 pt-16 pb-6 w-full bg-neutral-800 max-md:px-5 max-md:max-w-full"
      aria-labelledby="footer-heading"
    >
      <div className="px-4 w-full  bg-opacity-0 max-md:max-w-full">
        <div className=" bg-opacity-0 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start pt-0.5 pr-9 pb-12 w-full  bg-opacity-0 max-md:mt-8">
                <h2
                  id="footer-heading"
                  className="text-xl leading-none text-white"
                >
                  Magrahat Filigree
                </h2>
                <p className="mt-7 text-base leading-4 text-neutral-400">
                  Preserving the art of silver filigree craftsmanship
                </p>
              </div>
            </div>
            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <nav
                className="flex flex-col grow py-px w-full text-base leading-none bg-black bg-opacity-0 max-md:mt-8"
                aria-label="Quick Links"
              >
                <h3 className="self-start text-white">Quick Links</h3>
                <ul className="mt-6 whitespace-nowrap bg-black bg-opacity-0 text-neutral-400">
                  <li className="pt-0.5 pb-2.5 bg-black bg-opacity-0 max-md:pr-5">
                    <a href="#" className="hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li className="pt-0.5 pb-2.5 mt-2 bg-black bg-opacity-0 max-md:pr-5">
                    <a href="#" className="hover:text-white transition-colors">
                      Products
                    </a>
                  </li>
                  <li className="pt-0.5 pb-2.5 mt-2 bg-black bg-opacity-0 max-md:pr-5">
                    <a href="#" className="hover:text-white transition-colors">
                      Artisans
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-px w-full text-base bg-black bg-opacity-0 max-md:mt-8">
                <h3 className="self-start leading-none text-white">Contact</h3>
                <address className="mt-7 bg-black bg-opacity-0 text-neutral-400 not-italic">
                  <p className="py-1 bg-black bg-opacity-0 max-md:pr-5">
                    Email:{" "}
                    <a
                      href="mailto:info@magrahatfiligree.com"
                      className="hover:text-white transition-colors"
                    >
                      info@magrahatfiligree.com
                    </a>
                  </p>
                  <p className="pt-0.5 pb-2.5 mt-2 bg-black bg-opacity-0 max-md:pr-5">
                    Phone:{" "}
                    <a
                      href="tel:+911234567890"
                      className="hover:text-white transition-colors"
                    >
                      +91 1234567890
                    </a>
                  </p>
                  <p className="py-1.5 mt-2 bg-black bg-opacity-0 max-md:pr-5">
                    Address: Magrahat, West Bengal
                  </p>
                </address>
              </div>
            </div>
            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pt-0.5 pb-16 w-full text-base leading-none text-white bg-black bg-opacity-0 max-md:mt-8">
                <h3 className="self-start">Follow Us</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7929e34de5281bc74b1d1a2dde889f2bd2cfaa2?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                  alt="Social media icons"
                  className="object-contain mt-7 w-72 aspect-[12.05]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-16 pt-9 pb-2 mt-12 text-base leading-none text-center bg-black bg-opacity-0 text-neutral-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          © 2025 Magrahat Silver Filigree. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default ExploreFooter;
