import React, { useState } from 'react'
import logoWeb from "../assets/logoWeb.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header className='padding-x pr-24 py-2 absolute z-10 w-full'>
        <nav className='flex gap-8 justify-between items-center max-container'>
          <a href="#">
            <img src={logoWeb} alt="logo"
            width={129}
            height={29}
            className='m-0 w-[50px] h-[29]'/>
          </a>
          <li className='flex justify-center font-montserrat font-extrabold text-yellow-300 -mx-6 text-xl cursor-pointer'>AKIJO</li>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'></ul>
            <li className='flex text-yellow-300 hover:text-slate-100 cursor-pointer'>Home</li>
            <li className='flex text-slate-100 cursor-pointer'>Product</li>
            <li className='flex text-slate-100 cursor-pointer'>About Us</li>
            <li className='flex text-slate-100 cursor-pointer'>Contact</li>
        </nav>
    </header>
  )
}

export default Navbar