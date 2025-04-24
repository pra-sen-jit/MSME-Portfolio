"use client";
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function NavigationBar({ activeNavItem, handleNavClick }) {
  const navItems = [
    { id: "HOME", label: "HOME" },
    { id: "ABOUT", label: "ABOUT" },
    { id: "PRODUCT", label: "PRODUCT" },
    { id: "ARTISAN", label: "ARTISAN" },
    { id: "CONTACT", label: "CONTACT" },
  ];

  return (
    <nav className="w-full px-6 py-4 z-10 relative">
      <div className="backdrop-blur-sm bg-black/30 rounded-xl max-w-screen-xl mx-auto px-6 py-3">
        <ul className="flex justify-between text-white text-lg font-semibold">
          {navItems.map((item) => (
            <li key={item.id}>
              {item.id === "PRODUCT" ||
              item.id === "ABOUT" ||
              item.id === "ARTISAN" ||
              item.id === "CONTACT" ? (
                <Link
                  to={`/${item.id.toLowerCase()}`}
                  className={`cursor-pointer transition-colors duration-300 ${
                    activeNavItem === item.id
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-300"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`cursor-pointer transition-colors duration-300 ${
                    activeNavItem === item.id
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-300"
                  }`}
                  aria-current={activeNavItem === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
