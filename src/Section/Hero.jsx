import React from "react";
import { useEffect, useRef, useState } from "react";
import home from "../assets/home.jpg";
import { motion } from "framer-motion";
motion;

const Hero = () => {
  return (
    <div id="Main" className="hero-section">
      {/* Home bg */}
      <div className="parent">
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
          <div className="absolute inset-0 min-h-full bg-gradient-to-r from-black to-transparent opacity-100"></div>
          <div className="absolute inset-0 min-h-full bg-gradient-to-r from-black to-transparent opacity-100"></div>
        </div>
        <div className="sm:block md:hidden">
          <div className="absolute inset-0 min-h-full bg-gradient-to-r from-black to-transparent to-80% opacity-100"></div>
        </div>

        {/* hero--------------- */}
      </div>
      <div className="relative m-8 my-40 flex flex-col gap-4 md:m-16 md:my-80">
        <p className="flex text-sm text-slate-100 lg:text-xl">
          Premium Quality Food Service
        </p>

        <h1 className="flex text-xl uppercase text-neutral-200 md:text-3xl xl:text-4xl">
          <p>
            your <span className="text-yellow-300">special</span> event With
            AKIJO <br /> <span className="text-yellow-300">unique</span> cart
          </p>
        </h1>

        <p className=" flex text-wrap text-xs font-light text-neutral-100 md:text-base xl:text-xl">
          Enjoy your special moment with no worries. We provide the best quality
          of food and best experience for your event.
        </p>

        {/* ORDER NOW BUTTON */}
        <div className="mt-4 flex">
          <a href="#Pricing">
            <button className="hover:text rounded-md border-2 border-yellow-300 bg-transparent px-12 py-4 font-semibold uppercase tracking-wide text-slate-100 transition-all duration-500 ease-in-out hover:translate-x-4 hover:bg-yellow-600 hover:text-slate-300">
              Cek Sekarang
            </button>
          </a>
        </div>
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
