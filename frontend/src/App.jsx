"use client";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/header/Header";
import Footer from "./components/header/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
