import React from "react";

function NavigationMenu() {
  return (
    <nav
      className="px-4 py-4 mt-4 text-white bg-black rounded-lg border border-white max-md:max-w-full"
      aria-label="Main navigation"
    >
      <ul className="flex flex-wrap justify-around items-center gap-6 text-xl">
        <li>
          <a href="/" className="hover:underline">HOME</a>
        </li>
        <li>
          <a href="#" className="hover:underline">ABOUT</a>
        </li>
        <li>
          <a href="#" className="text-2xl font-bold hover:underline" aria-current="page">PRODUCT</a>
        </li>
        <li>
          <a href="#" className="hover:underline">ARTISAN</a>
        </li>
        <li>
          <a href="#" className="hover:underline">CONTACT US</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
