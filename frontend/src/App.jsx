"use client";
import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/header/Header";
import Footer from "./components/header/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  );
};

export default App;
