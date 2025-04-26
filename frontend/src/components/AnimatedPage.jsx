import React from "react";
import { motion } from "framer-motion";

const AnimatedPage = ({ children }) => {
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
