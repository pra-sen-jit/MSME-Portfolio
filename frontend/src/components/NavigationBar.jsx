"use client";
import React from "react";

function NavigationBar({ activeNavItem, handleNavClick }) {
  const navItems = [
    { id: "HOME", label: "HOME" },
    { id: "ABOUT", label: "ABOUT" },
    { id: "PRODUCT", label: "PRODUCT" },
    { id: "ARTISAN", label: "ARTISAN" },
    { id: "CONTACT_US", label: "CONTACT US" },
  ];

  return (
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
    </nav>
  );
}

export default NavigationBar;
