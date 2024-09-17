import React, { useState, useEffect, useCallback, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  carousel4,
  carousel3,
  carousel5,
  carousel6,
  carousel7,
} from "../assets/images";
import "./Carousel.css";
import { delay, motion } from "framer-motion";
import { stagger } from "framer-motion/dom";

const images = [carousel4, carousel3, carousel5, carousel6, carousel7];

const textContainer = {
  hidden: {
    opacity: 0,
    y: "30dvh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      duration: 0.7,
      ease: "easeIn",
      delayChildren: 0.5,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// const buttonVariant = {
//   initial: {
//     scale: 0.8,
//   },
//   hover: {
//     scale: 1,
//     transition: {
//       delay: 0.1,
//       delayChildren: 5,
//       staggerChildren: 5,
//       duration: 0.1,
//       ease: "easeInOut",
//     },
//   },
// };

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  }, []);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetInterval]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
    resetInterval();
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetInterval();
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      <h2 className="flex justify-center text-base font-bold uppercase tracking-wider text-slate-900 lg:text-3xl">
        Gallery AKIJO
      </h2>
      <div className="mt-1 h-1 w-1/5 max-w-xs items-center justify-center bg-red-400 object-center"></div>

      <div className="relative mt-8 flex h-[300px] w-[300px] flex-col rounded-lg border p-24 md:h-[500px] md:w-[500px]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`slide rounded-lg bg-yellow-200 p-1 shadow-lg ${index === currentIndex ? "active" : ""}`}
          />
        ))}
        <button className="arrow left" onClick={goToPrevious}>
          <IoIosArrowBack className="h-[20px] w-[20px]" />
        </button>
        <button className="arrow right" onClick={goToNext}>
          <IoIosArrowForward className="h-[20px] w-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
