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
          src="https://d3gal648yor2nc.cloudfront.net/assets/home.jpg"
          alt="HomeImg"
          className="image-home animate-scale absolute inset-0 w-full max-w-full transform object-cover object-center lg:left-52"
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
      </div>
      <div className="">
        {/* hero--------------- */}
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
            Enjoy your special moment with no worries. We provide the best
            quality of food and best experience for your event.
          </p>

          {/* ORDER NOW BUTTON */}
          <div className="mt-4 flex">
            <a href="https://wa.me/+6281342709321">
              <button className="hover:text rounded-md border-2 border-yellow-300 bg-transparent px-12 py-4 uppercase text-slate-100 transition-all duration-500 ease-in-out hover:translate-x-4 hover:bg-yellow-600 hover:text-slate-300">
                order Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
