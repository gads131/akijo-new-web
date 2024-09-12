import React, { useState, useEffect, useCallback, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import carousel1 from "../assets/images/carousel1.webp";
// import carousel2 from "../assets/images/carousel2.webp";
import carousel3 from "../assets/images/carousel3.webp";
import home from "../assets/images/home.webp";
import "./Carousel.css";
import { delay, motion } from "framer-motion";

const images = [home, carousel3];

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

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
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
    <div className="hero-section">
      <div className="image-slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
        <button className="arrow left" onClick={goToPrevious}>
          <IoIosArrowBack />
        </button>
        <button className="arrow right" onClick={goToNext}>
          <IoIosArrowForward />
        </button>
      </div>
      <div className="wrapper absolute inset-0 flex w-[80%] items-center justify-center border border-slate-200">
        <h1 className="headline absolute text-4xl text-slate-300">
          Premium Quality Food & Service
        </h1>
      </div>
    </div>
  );
};

export default ImageCarousel;
