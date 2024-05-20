import React from "react";
import { motion } from "framer-motion";
import sign from "../assets/sign.png";

// Style for the loading container
const loadingContainer = {
  width: "4rem",
  height: "4rem",
  display: "flex",
  justifyContent: "space-around",
};

// Style for each loading circle
const loadingCircle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "#FEF9AF",
  borderRadius: "0.5rem",
};

// Animation variants for the loading container
const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2, // Delay start of each child animation
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for each loading circle
const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

// Transition settings for each loading circle
const loadingCircleTransition = {
  duration: 0.4,
  repeat: Infinity, // Loop the animation
  repeatType: "reverse", // Bounce back and forth
  ease: "easeInOut",
};

// Loader component that accepts a 'loading' prop
const Loader = ({ loading }) => {
  if (!loading) return null; // Don't render anything if not loading

  return (
    <div>
      {/* Background overlay */}
      <div className="fixed z-50 min-h-screen w-full bg-black opacity-80">
        <div className="fixed flex h-screen w-full items-center justify-center">
          {/* Loading animation */}
          <motion.div
            style={loadingContainer}
            variants={loadingContainerVariants}
            initial="start"
            animate="end"
          >
            <motion.span
              style={loadingCircle}
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            ></motion.span>
            <motion.span
              style={loadingCircle}
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            ></motion.span>
            <motion.span
              style={loadingCircle}
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            ></motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
