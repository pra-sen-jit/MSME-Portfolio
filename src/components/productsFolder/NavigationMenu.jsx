import React from "react";

function NavigationMenu() {
  return (
    <nav
      className="w-full mt-6 bg-black text-white rounded-lg border border-white shadow-lg"
      aria-label="Main navigation"
    >
      <ul className="flex justify-between items-center px-10 py-4 text-lg font-medium max-md:flex-wrap max-md:gap-4 max-md:px-4">
        <li>
          <a href="/" className="hover:text-gray-300 transition-colors">HOME</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300 transition-colors">ABOUT</a>
        </li>
        <li>
          <a
            href="#"
            className="text-2xl font-bold border-b-2 border-white pb-1"
            aria-current="page"
          >
            PRODUCT
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300 transition-colors">ARTISAN</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300 transition-colors">CONTACT US</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
