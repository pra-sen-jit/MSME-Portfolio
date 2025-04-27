"use client";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/header/Header";
import Footer from "./components/header/Footer";

const App = () => {
  const location = useLocation();

  // Define the routes where Navbar and Footer should NOT be shown
  const noNavFooterRoutes = ["/login", "/signup"];

  return (
    <>
      {/* Conditionally render Navbar */}
      {!noNavFooterRoutes.includes(location.pathname) && <Navbar />}

      <AnimatePresence mode="wait">
        {/* Render the matched child route */}
        <Outlet key={location.pathname} />
      </AnimatePresence>

      {/* Conditionally render Footer */}
      {!noNavFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
