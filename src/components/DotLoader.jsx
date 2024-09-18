import React from "react";
import { motion } from "framer-motion";

const loadingWrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100dvh", // This ensures the loader stays in a smaller area
  width: "100%", // Make sure it takes the full width of the parent
};

const loadingContainer = {
  display: "flex",
  justifyContent: "space-between",
  width: "4rem",
  height: "4rem",
};

const loadingCircle = {
  display: "block",
  width: "0.8rem",
  height: "0.8rem",
  backgroundColor: "#ffc107",
  borderRadius: "50%",
};

const circleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const circleTransition = {
  duration: 0.6,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

const DotLoader = () => {
  return (
    <div style={loadingWrapper}>
      <div style={loadingContainer}>
        <motion.span
          style={loadingCircle}
          variants={circleVariants}
          initial="start"
          animate="end"
          transition={circleTransition}
        />
        <motion.span
          style={loadingCircle}
          variants={circleVariants}
          initial="start"
          animate="end"
          transition={{
            ...circleTransition,
            delay: 0.2,
          }}
        />
        <motion.span
          style={loadingCircle}
          variants={circleVariants}
          initial="start"
          animate="end"
          transition={{
            ...circleTransition,
            delay: 0.4,
          }}
        />
      </div>
    </div>
  );
};

export default DotLoader;
