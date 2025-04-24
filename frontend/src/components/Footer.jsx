import React from "react";
<<<<<<< HEAD
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="px-6 pt-16 pb-6 w-full bg-neutral-800 text-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap gap-10 justify-between">
          {/* Brand Info */}
          <div className="w-full sm:w-6/12 md:w-3/12">
            <h3 className="text-xl font-semibold">Magrahat Filigree</h3>
            <p className="mt-4 text-neutral-400">
              Preserving the art of silver filigree craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-6/12 md:w-3/12">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="mt-4 text-neutral-400">
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">About</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors">Products</a>
                </li>
                <li>
                  <a href="#artisans" className="hover:text-white transition-colors">Artisans</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-6/12 md:w-3/12">
            <h3 className="text-lg font-semibold">Contact</h3>
            <address className="mt-4 not-italic text-neutral-400 space-y-2">
              <p>
                Email:{" "}
                <a
                  href="mailto:info@magrahatfiligree.com"
                  className="hover:text-white transition-colors"
                >
                  info@magrahatfiligree.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+911234567890"
                  className="hover:text-white transition-colors"
                >
                  +91 1234567890
                </a>
              </p>
              <p>Address: Magrahat, West Bengal</p>
            </address>
          </div>

          {/* Follow Us */}
          <div className="w-full sm:w-6/12 md:w-3/12">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-5 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition">
                <Facebook size={32} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition">
                <Twitter size={32} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition">
                <Instagram size={32} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 text-center text-neutral-400 text-sm">
          © 2025 Magrahat Silver Filigree. All rights reserved.
        </div>
      </div>
=======

function Footer() {
  return (
    <footer className="w-full bg-neutral-800 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-semibold">Magrahat Filigree</h3>
          <p className="mt-4 text-neutral-400">
            Preserving the art of silver filigree craftsmanship
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-neutral-400">
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="hover:text-white transition-colors"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#artisans"
                className="hover:text-white transition-colors"
              >
                Artisans
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <address className="mt-4 not-italic space-y-3 text-neutral-400">
            <p>
              Email:{" "}
              <a
                href="mailto:info@magrahatfiligree.com"
                className="hover:text-white"
              >
                info@magrahatfiligree.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+911234567890" className="hover:text-white">
                +91 1234567890
              </a>
            </p>
            <p>Address: Magrahat, West Bengal</p>
          </address>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ec1ea75be34c3cf60c4c6b723e1353aaf1b9cf4?placeholderIfAbsent=true"
              alt="Social media icons"
              className="w-40 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-neutral-400 text-sm">
        © 2025 Magrahat Silver Filigree. All rights reserved.
      </div>
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
    </footer>
  );
}

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
