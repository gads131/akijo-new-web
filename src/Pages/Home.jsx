import React from "react";
import { useEffect, useRef, useState } from "react";
import home from "../assets/home.webp";
import { delay, motion } from "framer-motion";
import { text } from "@fortawesome/fontawesome-svg-core";
import ImageCarousel from "../components/Carousel";

const textContainer = {
  hidden: {
    opacity: 0,
    y: "30vh",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const buttonVariant = {
  initial: {
    boxShadow: "0px 0px 25px 10px rgba(255, 255, 255, 0)",
  },
  hover: {
    boxShadow: ["0px 0px 10px 5px rgba(247, 243, 186, 0.3)"],
    transition: {
      delay: 0.3,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    <>
      <div className="">
        <ImageCarousel />
      </div>
    </>
  );
};

export default Home;
