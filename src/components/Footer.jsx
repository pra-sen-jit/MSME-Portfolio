import React from "react";
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
    </footer>
  );
}

export default Footer;
