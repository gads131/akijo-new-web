import React from "react";
import home from "../assets/home.png";

const Hero = () => {
  return (
    <section className='hero id="home"'>
      <div className="parent">
        <img
          src={home}
          alt=""
          className="image-home scale-x(-1) animate-scale absolute inset-0 w-full max-w-full transform object-cover object-center"
          style={{
            objectPosition: "center",
            height: "100%",
            transform: "scale-x(-1)",
          }}
        />
        <div className="hidden">
          <div className="absolute inset-0 min-h-full bg-gradient-to-r from-black to-transparent opacity-100"></div>
          <div className="absolute inset-0 min-h-full bg-gradient-to-r from-black to-transparent opacity-100"></div>
        </div>
        <div className="">
          <div className="absolute inset-0 min-h-full bg-gradient-to-r from-black to-transparent opacity-100"></div>
          <div className="absolute inset-0 min-h-full bg-gradient-to-r from-black to-transparent opacity-100"></div>
        </div>
        {/* hero--------------- */}
        <div className="relative flex min-h-screen w-full flex-col justify-center gap-4">
          <p className="flex text-sm text-slate-100 lg:text-xl">
            Premium Quality Food Service
          </p>

          <h1 className="mb-4 flex text-xl uppercase text-slate-200 md:text-3xl xl:text-8xl">
            <p>
              your <span className="text-yellow-300">special</span> event With
              AKIJO <br /> <span className="text-yellow-300">unique</span> cart
            </p>
          </h1>
          <p className="flex w-1/2 text-xs font-light text-slate-100 md:text-base xl:text-xl">
            Enjoy your special moment with no worries. We provide the best
            quality of food and best experience for your event.
          </p>
          <div className="flex">
            <button className="hover:text border-2 border-yellow-300 uppercase text-slate-100">
              order Now
            </button>
          </div>
          {/* <button className="hero-btn flex flex-wrap gap-24">
            <div className="hover:text- uppercase text-slate-100">
              Order Now
            </div>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
