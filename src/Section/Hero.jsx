import React from 'react'
import home from "../assets/home.png";

const Hero = () => {
  return (
    <section className='hero id="home"'>
      <div className="parent">
        <img src={home} alt=""
        className='image-home absolute inset-0 object-cover object-center w-full max-w-full transform scale-x(-1) animate-scale'
        style={{ objectPosition: "center", height: "100%", transform: "scale-x(-1)"}}
        />
        <div>
        <div className="absolute inset-0 bg-gradient-to-r from-black opacity-100 to to-transparent min-h-full"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black opacity-100 to to-transparent min-h-full"></div>
        </div>
        <div className="wrapper relative flex flex-col items-start w-full pt-52 pl-24">
            <p className='flex text-slate-100 text-xl'>Premium Quality Food Service</p>
            
            <h1 className='flex text-slate-200 text-6xl mb-4 uppercase'>
              <p>your <span className='text-yellow-300'>special</span> event With AKIJO <br /> <span className='text-yellow-300'>unique</span> cart</p>
            </h1>
            <p className='flex text-slate-100 font-light w-80'>
            Enjoy your special moment with no worries. We provide the best quality of food and best experience for your event.
            </p>
        </div>
        <button className='hero-btn items-center justify-center whitespace-nowrap bg-yellow-300 w-full py-2 px-24 mt-48 max-h-screen mx-24 border-2 border-yellow-300 rounded-md hover:bg-yellow-700'>
          <div className='uppercase text-slate-100 hover:text-'>
            Order Now
          </div>
        </button>
    </div>

    </section>
    
  )
}

export default Hero