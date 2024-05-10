import React, { useState } from "react";
import logoWeb from "../assets/logoWeb.svg";
import logoakijosvg from "../assets/logoakijosvg.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav class="absolute z-10 w-full p-4">
      <div class="mx-auto flex items-center justify-between md:px-6">
        <div class="flex items-center lg:max-w-xl">
          <a href="#" class="font-semibold text-white">
            <img
              src={logoakijosvg}
              alt="LogoNavbar"
              className="m-auto h-[29px] w-[129px] pr-10 md:pr-0"
            />
          </a>
        </div>

        <div class="md:hidden">
          <button class="text-white focus:outline-none">
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <div class="hidden items-center gap-4 space-x-4 md:flex md:px-12">
          <a
            href="#"
            class="pointer-cursor text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="#"
            class="pointer-cursor text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-gray-300"
          >
            Product
          </a>
          <a
            href="#"
            class="pointer-cursor text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-gray-300"
          >
            About Us
          </a>
          <a
            href="#"
            class="pointer-cursor text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-gray-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>

    // <header className="navParent absolute z-10 flex w-full justify-between px-24 py-2 ">
    //   <nav className="max-container flex w-full items-center gap-4">
    //     <a href="#">
    //       <img
    //         src={logoWeb}
    //         alt="logo"
    //         width={129}
    //         height={29}
    //         className="m-auto h-[29] w-[50px]"
    //       />
    //     </a>
    //     <li className="font-montserrat mr-2 flex cursor-pointer items-center justify-center text-xl font-extrabold text-yellow-300">
    //       AKIJO
    //     </li>
    //   </nav>
    //   <nav className="flex flex-row items-center gap-4 whitespace-nowrap">
    //     {/* <ul className='flex flex-col justify-center items-center gap-8 w-full'></ul> */}
    //     <ul className="flex w-full flex-row items-center justify-between gap-10">
    //       <li className="cursor-pointer text-yellow-300 hover:text-slate-100">
    //         Home
    //       </li>
    //       <li className="cursor-pointer text-slate-100">Product</li>
    //       <li className="cursor-pointer text-slate-100">About Us</li>
    //       <li className="cursor-pointer text-slate-100">Contact</li>
    //     </ul>
    //   </nav>
    // </header>
  );
};

export default Navbar;
