"use client";
import React from "react";
import { Outlet } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/header/Header";
import Footer from "./components/header/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <LandingPage />
      <Footer />
    </>
  );
};

export default App;
