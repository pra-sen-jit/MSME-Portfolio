import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Update username from localStorage on location change (or you can use a global auth context)
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername || "");
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
  //Logout function : clear localStorage and navigate to login page
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUsername(""); // Use state setter; do not reassign directl
    setDropdownOpen(false);
    navigate("/");
  };

  // Toggle dropdown menu
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top Header */}
      <header
        className={`transition-all duration-500 ease-in-out bg-white shadow-md px-4 md:px-8 py-4 flex justify-between items-center ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Search */}
        <div className="flex items-center">
          <div className="relative group">
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
              className="hidden md:block pl-10 pr-4 py-2 w-60 lg:w-72 text-sm bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700 transition-all duration-200"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl md:text-3xl lg:text-4xl font-bold tracking-wider text-gray-800 font-piedra">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-800 to-black">
            MAGRAHAT
          </span>
        </h1>

        {/* Icons */}
        <div className="flex items-center gap-5">
          {username ? (
            // If logged in, show username with a dropdown
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-700 font-semibold focus:outline-none"
              >
                {username}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 z-50 rounded-md shadow-lg">
                  <Link
                    to="/artisan"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // If not logged in, show login icon linking to "/login"
            <Link
              to="/login"
              aria-label="User account"
              className="relative group"
            >
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
            </Link>
          )}
          {/** Conditionally render username or login icon */}
          {/* {username ? (
            <Link
              to="/artisan"
              aria-label="User account"
              className="relative group text-gray-700 font-semibold"
            >
              {username}
            </Link>
          ) : (
            <Link
              to="/login"
              aria-label="User account"
              className="relative group"
            >
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
            </Link>
          )} */}

          {/* Shopping Cart Icon */}
          <button aria-label="Shopping cart" className="relative group">
            <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-gray-800 text-white text-xs font-bold rounded-full">
              0
            </span>
            <svg
              className="w-6 h-6 md:w-7 md:h-7 text-gray-700 hover:text-black transition-colors"
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
              />
            </svg>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center"
            aria-label="Toggle Mobile Menu"
          >
            <svg
              className="w-6 h-6 text-gray-700 hover:text-black transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Desktop Nav */}
      <nav
        className={`bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-md transition-transform duration-500 ease-in-out ${
          showHeader ? "" : "transform -translate-y-full"
        }`}
      >
        <ul className="hidden md:flex justify-center gap-8 h-16 items-center">
          {navItems.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className={`relative px-3 py-2 text-sm lg:text-base font-medium transition-all ${
                  location.pathname === path
                    ? "text-white border-b-2 border-white"
                    : "text-gray-300 hover:text-white hover:border-b-2 hover:border-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <div
          className={`fixed inset-0 bg-gray-900/70 backdrop-blur-md text-white flex flex-col items-center justify-center space-y-6 transition-all duration-500 ease-in-out transform ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          } z-40 md:hidden`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            aria-label="Close Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Nav Items */}
          {navItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-semibold ${
                location.pathname === path
                  ? "text-white underline"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
