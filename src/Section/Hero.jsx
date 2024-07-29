import React from "react";
import { useEffect, useRef, useState } from "react";
import home from "../assets/home.jpg";
import { delay, motion } from "framer-motion";
import { text } from "@fortawesome/fontawesome-svg-core";

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

const Hero = () => {
  return (
    <div id="Main" className="hero-section">
      {/* Home bg */}
      <div className="">
        <img
          src={home}
          alt="akijofood, porkhunterjo, bakso ba, bakso babi, acara, ibadah, pesta"
          className="image-home animate-scale absolute inset-0  w-full max-w-full transform object-cover object-center lg:left-52"
          style={{
            height: "100%",
          }}
        />

        {/* overlay for bg */}
        <div className="hidden md:block">
          <div className="absolute inset-0 min-h-full bg-gradient-to-r from-black from-10% to-transparent opacity-100"></div>
          {/* <div className="absolute inset-0 min-h-full bg-gradient-to-r from-black to-transparent opacity-100"></div> */}
        </div>
        <div className="sm:block md:hidden">
          <div className="absolute inset-0 min-h-full bg-gradient-to-r from-black to-transparent to-80% opacity-100"></div>
        </div>
      </div>

      {/* ------------------------HEro  */}
      <div className="absolute inset-0 mb-4 flex items-end justify-center lg:mb-14">
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 2, type: "tween" }}
          className="w-[80%] rounded-3xl border border-slate-100 bg-black bg-opacity-30 px-10 pb-2 pt-4 backdrop-blur-xl backdrop-filter md:w-[70%] lg:w-[60%]"
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-slate-100 lg:text-xl">
              Premium Quality Food Product & Service
            </p>

            <h1 className="font-sans text-4xl font-semibold tracking-[0.3em] text-yellow-200 lg:text-8xl">
              AKIJO
            </h1>
            <p className="space-y-2 text-xs font-light text-white md:text-base xl:text-xl">
              Menerima pesanan untuk Tomohon, Manado, dan sekitarnya <br />
              {/* <p>
                Harga{" "}
                <span className="font-semibold text-red-500">Bersahabat</span>,
                Pelayanan
                <span className="font-semibold text-red-500"> Memuaskan</span> !
              </p> */}
            </p>

            {/* ORDER NOW BUTTON */}
            <div className="mt-4 flex">
              <a href="#Pricing">
                <motion.button
                  variants={buttonVariant}
                  initial="initial"
                  whileHover="hover"
                  className="rounded-md border-2 border-yellow-300 bg-transparent px-12 py-4 font-semibold uppercase tracking-wide text-slate-300 transition-all duration-500 ease-in-out hover:bg-yellow-600 hover:text-white"
                >
                  Cek Sekarang
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* in case it needed */}
      {/* <div className="z-10 flex -translate-y-[5px] translate-x-[340px] rotate-3">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className=""
        >
          <p className="rounded-md border-2 border-slate-900 bg-red-600 p-2 text-xs font-bold text-slate-50 ">
            Harga Mulai <br />
            dari 700k !!
          </p>
        </motion.div>
      </div> */}
    </div>
  );
};

export default Hero;
