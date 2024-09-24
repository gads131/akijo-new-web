import React, { useState, useEffect, useCallback, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { home, carousel3, carousel4, carousel5 } from "../assets/images";
import "./Carousel.css";
import { LazyMotion, domAnimation, motion } from "framer-motion";

const pic = [
  {
    image: "https://dkobvniutxuch.cloudfront.net/assets/images/home.webp",
    alt: "Akijo Bakso Babi, bakso babi tomohon, frozen food tomohon",
  },
  {
    image: "https://dkobvniutxuch.cloudfront.net/assets/images/carousel3.webp",
    alt: "Akijo Bakso Babi, bakso babi tomohon, frozen food tomohon",
  },
  {
    image: "https://dkobvniutxuch.cloudfront.net/assets/images/carousel4.webp",
    alt: "Akijo Bakso Babi, bakso babi tomohon, frozen food tomohon",
  },
  {
    image: "https://dkobvniutxuch.cloudfront.net/assets/images/carousel5.webp",
    alt: "Akijo Bakso Babi, bakso babi tomohon, frozen food tomohon",
  },
];

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

  // Debounce function
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pic.length);
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

  const goToPrevious = debounce(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pic.length) % pic.length);
    resetInterval();
  }, 300);

  const goToNext = debounce(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pic.length);
    resetInterval();
  }, 300);

  return (
    <LazyMotion features={domAnimation}>
      <div className="hero-section">
        <div className="image-slider">
          {pic.map((pic, index) => (
            <img
              loading="lazy"
              key={index}
              src={pic.image}
              alt={pic.alt}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              fetchpriority={index === currentIndex ? "high" : "low"}
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
            className="will-animate w-[70%] rounded-3xl border border-slate-100 bg-black bg-opacity-50 px-10 pb-2 pt-4 backdrop-blur-xl backdrop-filter md:w-[70%] lg:w-[60%]"
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
                className="font-mono text-xl font-semibold tracking-[0.3em] text-yellow-200 md:text-2xl lg:text-4xl"
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
                <a href="/Services#">
                  <button className="rounded-md border-2 border-slate-300 bg-transparent  px-8 py-4 font-semibold uppercase tracking-wide text-yellow-200 transition-all duration-500 ease-in-out hover:border-yellow-200 hover:bg-yellow-700 hover:text-slate-300">
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
