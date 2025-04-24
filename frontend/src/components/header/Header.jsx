import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "PRODUCT", path: "/product" },
    { label: "ARTISAN", path: "/artisan" },
    { label: "CONTACT US", path: "/contact" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top Header */}
      <header
        className={`transition-transform duration-300 ease-in-out bg-white shadow-md px-4 sm:px-8 py-3 flex justify-between items-center ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Search */}
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/375b817f500972bb37d70205858e65ae765377fe?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
            alt="Search icon"
            className="w-6 h-6 sm:w-7 sm:h-7"
          />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="px-3 py-1.5 text-sm sm:text-base border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-gray-300"
          />
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-3xl font-bold tracking-wider text-gray-800 font-serif">
          MAGRAHAT
        </h1>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button aria-label="User account">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d80511747f7f4a8569dbe4990583a347a5c1d8a?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
              alt="User"
              className="w-7 h-7 sm:w-9 sm:h-9 hover:scale-105 transition-transform"
            />
          </button>
          <button aria-label="Cart">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0c06e53a3188190e19736d3d5e3a336a6081799?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
              alt="Cart"
              className="w-7 h-7 sm:w-9 sm:h-9 hover:scale-105 transition-transform"
            />
          </button>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="bg-gradient-to-r from-gray-900 to-black text-white shadow-md">
        <ul className="flex justify-center flex-wrap gap-6 sm:gap-10 px-4 sm:px-8 py-3 text-sm sm:text-lg font-semibold">
          {navItems.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className={`transition-all duration-200 px-2 pb-1 border-b-2 hover:text-gray-300 hover:border-gray-300 ${
                  location.pathname === path
                    ? "text-white border-white text-xl"
                    : "border-transparent"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
