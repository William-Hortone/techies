import React from "react";
import { motion } from "framer-motion";

const PageTitleLetter = ({ letter, delay }) => {
  return (
    <div className="overflow-hidden p-box">
      <motion.span
        className="inline-block text-[6vw] uppercase font-fontBase"
        initial={{ opacity: 1, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay,
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        {letter}
      </motion.span>
    </div>
  );
};

export default PageTitleLetter;
