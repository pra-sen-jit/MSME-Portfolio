"use client";
import React from "react";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom"; // Import Link from react-router-dom
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0

function NavigationBar({ activeNavItem, handleNavClick }) {
  const navItems = [
    { id: "HOME", label: "HOME" },
    { id: "ABOUT", label: "ABOUT" },
    { id: "PRODUCT", label: "PRODUCT" },
    { id: "ARTISAN", label: "ARTISAN" },
    { id: "CONTACT_US", label: "CONTACT US" },
  ];

  return (
<<<<<<< HEAD
    <nav className="flex relative gap-10 self-stretch text-xl max-md:max-w-full">
      {navItems.map((item, index) => {
        let className =
          "text-2xl font-bold transition-all cursor-pointer duration-[0.3s] ease-[ease]";

        // Add specific positioning classes based on index
        if (index === 1) {
          className += " text-white";
        } else if (index === 2) {
          className += " ml-14 text-white";
        } else if (index === 3) {
          className += " ml-52 text-zinc-50";
        } else if (index === 4) {
          className += " grow shrink my-auto ml-52 text-zinc-50 w-[113px]";
        }

        return (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={className}
            style={{
              color:
                activeNavItem === item.id
                  ? "rgba(255, 255, 255, 1)"
                  : "rgba(200, 200, 200, 1)",
            }}
            aria-current={activeNavItem === item.id ? "page" : undefined}
          >
            {item.label}
          </button>
        );
      })}
=======
    <nav className="w-full px-6 py-4 z-10 relative">
      <div className="backdrop-blur-sm bg-black/30 rounded-xl max-w-screen-xl mx-auto px-6 py-3">
        <ul className="flex justify-between text-white text-lg font-semibold">
          {navItems.map((item) => (
            <li key={item.id}>
              {item.id === "PRODUCT" ? (
                // Use Link for the PRODUCT item
                <Link
                  to="/products"
                  className={`cursor-pointer transition-colors duration-300 ${
                    activeNavItem === item.id
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-300"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                // Use button for other items
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
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
    </nav>
  );
}

<<<<<<< HEAD
export default NavigationBar;
=======
export default NavigationBar;
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
