import React, { useState } from 'react'
import logoWeb from "../assets/logoWeb.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header className='navParent flex justify-between px-24 py-2 absolute z-10 w-full mx-auto max-w-8xl'>
        <nav className='flex gap-4 items-center max-container w-full'>
          <a href="#">
            <img src={logoWeb} alt="logo"
            width={129}
            height={29}
            className='m-auto w-[50px] h-[29]'/>
          </a>
          <li className='flex justify-center items-center mr-2 font-montserrat font-extrabold text-yellow-300 text-xl cursor-pointer'>AKIJO</li>
        </nav>
        <nav className='flex flex-row items-center gap-4 whitespace-nowrap'>
            {/* <ul className='flex flex-col justify-center items-center gap-8 w-full'></ul> */}
            <ul className='flex flex-row justify-between items-center w-full gap-10'>
            <li className='text-yellow-300 hover:text-slate-100 cursor-pointer'>Home</li>
            <li className='text-slate-100 cursor-pointer'>Product</li>
            <li className='text-slate-100 cursor-pointer'>About Us</li>
            <li className='text-slate-100 cursor-pointer'>Contact</li>
            </ul>

        </nav>
    </header>
  )
}

export default Navbar