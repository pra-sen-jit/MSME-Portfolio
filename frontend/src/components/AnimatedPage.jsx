"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const AnimatedPage = ({ children }) => {
  const location = useLocation(); // React Router's useLocation hook to detect page navigation

  useEffect(() => {
    // Reset scroll position to the top when the route changes
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // For some browsers like Safari
  }, [location]); // Triggered on every route change

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // start faded and slightly down
      animate={{ opacity: 1, y: 0 }} // animate to visible
      exit={{ opacity: 0, y: -20 }} // exit by fading and moving up
      transition={{ duration: 0.5 }} // smooth transition
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
