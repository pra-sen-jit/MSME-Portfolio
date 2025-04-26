import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

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
        className={`transition-all duration-500 ease-in-out bg-white shadow-md px-4 md:px-8 py-4 flex justify-between items-center ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Search */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative group flex-1 md:flex-none">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="pl-10 pr-4 py-2 w-full md:w-60 lg:w-72 text-sm bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700 transition-all duration-200"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider text-gray-800 font-serif hidden md:block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-800 to-black">
            MAGRAHAT
          </span>
        </h1>

        {/* Mobile Title - Visible only on mobile */}
        <h1 className="text-xl font-bold tracking-wider text-gray-800 font-serif md:hidden">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-800 to-black">
            MAGRAHAT
          </span>
        </h1>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <button aria-label="User account" className="relative group">
            <div className="absolute inset-0 bg-gray-800 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-20"></div>
            <svg
              className="w-6 h-6 md:w-7 md:h-7 text-gray-700 group-hover:text-black transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </button>

          <button aria-label="Shopping cart" className="relative group">
            <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-gray-800 text-white text-xs font-bold rounded-full">
              0
            </span>
            <div className="absolute inset-0 bg-gray-800 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-20"></div>
            <svg
              className="w-6 h-6 md:w-7 md:h-7 text-gray-700 group-hover:text-black transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Navigation Menu - Desktop */}
      <nav
        className={`bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-lg transition-transform duration-500 ease-in-out ${
          showHeader ? "" : "transform -translate-y-full"
        }`}
      >
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center h-16">
          {navItems.map(({ label, path }) => (
            <li key={label} className="relative mx-1 lg:mx-4 group">
              <Link
                to={path}
                className={`block px-3 py-2 text-sm lg:text-base font-medium tracking-wide transition-all duration-300 ${
                  location.pathname === path
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ${
                    location.pathname === path
                      ? "scale-x-100"
                      : "group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between items-center px-4 py-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center px-3 py-2 border rounded border-gray-400 text-gray-200 hover:text-white hover:border-white transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                ></path>
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                ></path>
              )}
            </svg>
          </button>
          <span className="text-white font-medium">Menu</span>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-60" : "max-h-0"
          }`}
        >
          <ul className="bg-gray-900 py-2">
            {navItems.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 border-l-4 ${
                    location.pathname === path
                      ? "bg-black text-white border-gray-300"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white border-transparent"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
