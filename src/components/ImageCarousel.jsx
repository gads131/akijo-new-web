import React, { useState, useEffect, useCallback, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import carousel3 from "../assets/images/carousel3.webp";
import home from "../assets/images/home.webp";
import "./Carousel.css";
import { LazyMotion, domAnimation, motion } from "framer-motion";
// import { stagger } from "framer-motion/dom";

const images = [home, carousel3];

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
    <LazyMotion features={domAnimation}>
      <div className="hero-section">
        <div className="image-slider">
          {images.map((img, index) => (
            <img
              fetchpriority="high"
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

        {/* Text Box */}
        <div className="absolute inset-0 mb-4 flex items-end justify-center lg:mb-14">
          <motion.div
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="will-animate w-[80%] rounded-3xl border border-slate-100 bg-black bg-opacity-30 px-10 pb-2 pt-4 backdrop-blur-xl backdrop-filter md:w-[70%] lg:w-[60%]"
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <motion.p
                variants={textVariant}
                className="text-sm text-slate-100 lg:text-xl"
              >
                Premium Quality Food Product & Service
              </motion.p>

              <motion.h1
                variants={textVariant}
                className="font-mono text-4xl font-semibold tracking-[0.3em] text-yellow-200 lg:text-8xl"
              >
                AKIJO
              </motion.h1>
              <motion.p
                variants={textVariant}
                className="space-y-2 text-xs font-light text-white md:text-base xl:text-xl"
              >
                Menerima pesanan untuk Tomohon, Manado, dan sekitarnya <br />
              </motion.p>

              {/* ------------button */}
              <motion.div
                variants={textVariant}
                className="flex justify-center"
              >
                <a href="#tentang-kami">
                  <button className="rounded-md border-2 border-slate-300 bg-transparent  px-12 py-4 font-semibold uppercase tracking-wide text-yellow-200 transition-all duration-500 ease-in-out hover:border-yellow-200 hover:bg-yellow-700 hover:text-slate-300">
                    Cek Sekarang
                  </button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default ImageCarousel;
