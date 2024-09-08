import React from "react";
import { motion } from "framer-motion";

const WiggleIcon = ({ children }) => {
  return (
    <motion.div
      animate={{ y: ["0%","7.5%", "15%","7.5%","0%"] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default WiggleIcon;
