import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logoWeb from "../assets/logoWeb.svg";
import logoakijosvg from "../assets/logoakijosvg.svg";

const NavLinks = [
  { title: "Home", href: "#Home" },
  { title: "About Us", href: "#AboutUs" },
  { title: "Product", href: "#OurMenu" },
  { title: "Contact", href: "#Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
    document.body.classList.toggle("no-scroll", !open);
  };

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, []);

  const handleLinkClick = (href) => {
    setOpen(false); // Close the menu if it is open
    document.body.classList.remove("no-scroll"); // Enable scrolling
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header>
      <nav className="absolute z-10 w-full p-4">
        <div className="mx-auto flex items-center justify-between md:px-6">
          <div className="flex items-center lg:max-w-xl">
            <a href="#Home" onClick={(e) => handleLinkClick(e, "#Home")}>
              <img
                src={logoakijosvg}
                alt="LogoNavbar"
                className="m-auto h-[29px] w-[129px] pr-10 md:pr-0"
              />
            </a>
          </div>

          {/* Navbar */}
          <div className="hidden items-center gap-4 space-x-4 md:flex md:px-12">
            {NavLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="pointer-cursor text-yellow-100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-gray-300"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* MenuToggle */}
          <div
            className="text-md cursor-pointer text-yellow-100 transition-all duration-300 ease-out hover:text-slate-100 lg:hidden"
            onClick={toggleMenu}
          >
            Menu
          </div>

          {/* MobileNav */}
          <AnimatePresence>
            {open && (
              <motion.div
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed left-0 top-0 h-screen w-full origin-top bg-yellow-300 p-10 text-black"
              >
                {/* AKIJO TEXT */}
                <div className="flex h-full flex-col">
                  <div className="flex justify-between">
                    <a
                      href="Main"
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      <h1 className="text-xl font-bold text-rose-600">AKIJO</h1>
                    </a>
                    <p
                      className="text-md cursor-pointer text-slate-700"
                      onClick={toggleMenu}
                    >
                      Close
                    </p>
                  </div>
                  <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex h-full flex-col items-center justify-center gap-10 text-xl text-slate-400"
                  >
                    {NavLinks.map((link, index) => (
                      <div className="overflow-hidden" key={index}>
                        <MobileNavLink
                          title={link.title}
                          href={link.href}
                          onClick={handleLinkClick}
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileNavLink = ({ title, href, onClick }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black"
    >
      <a href={href} onClick={() => onClick(href)}>
        {title}
      </a>
    </motion.div>
  );
};

// old nav with no menu click

// import React, { useState } from "react";
// import logoWeb from "../assets/logoWeb.svg";
// import logoakijosvg from "../assets/logoakijosvg.svg";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <nav className="absolute z-10 w-full p-4">
//       <div className="mx-auto flex items-center justify-between md:px-6">
//         <div className="flex items-center lg:max-w-xl">
//           <a href="#" class="font-semibold text-white">
//             <img
//               src={logoakijosvg}
//               alt="LogoNavbar"
//               className="m-auto h-[29px] w-[129px] pr-10 md:pr-0"
//             />
//           </a>
//         </div>

//         <div className="md:hidden">
//           <button class="text-white focus:outline-none">
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </button>
//         </div>

//         <div className="hidden items-center gap-4 space-x-4 md:flex md:px-12">
//           <a
//             href="#"
//             className="pointer-cursor text-yellow-100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-gray-300"
//           >
//             Home
//           </a>
//           <a
//             href="#"
//             className="pointer-cursor text-yellow-100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-gray-300"
//           >
//             Product
//           </a>
//           <a
//             href="#"
//             className="pointer-cursor text-yellow-100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-gray-300"
//           >
//             About Us
//           </a>
//           <a
//             href="#"
//             className="pointer-cursor text-yellow-100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-gray-300"
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>

//     // <header className="navParent absolute z-10 flex w-full justify-between px-24 py-2 ">
//     //   <nav className="max-container flex w-full items-center gap-4">
//     //     <a href="#">
//     //       <img
//     //         src={logoWeb}
//     //         alt="logo"
//     //         width={129}
//     //         height={29}
//     //         className="m-auto h-[29] w-[50px]"
//     //       />
//     //     </a>
//     //     <li className="font-montserrat mr-2 flex cursor-pointer items-center justify-center text-xl font-extrabold text-yellow-300">
//     //       AKIJO
//     //     </li>
//     //   </nav>
//     //   <nav className="flex flex-row items-center gap-4 whitespace-nowrap">
//     //     {/* <ul className='flex flex-col justify-center items-center gap-8 w-full'></ul> */}
//     //     <ul className="flex w-full flex-row items-center justify-between gap-10">
//     //       <li className="cursor-pointer text-yellow-300 hover:text-slate-100">
//     //         Home
//     //       </li>
//     //       <li className="cursor-pointer text-slate-100">Product</li>
//     //       <li className="cursor-pointer text-slate-100">About Us</li>
//     //       <li className="cursor-pointer text-slate-100">Contact</li>
//     //     </ul>
//     //   </nav>
//     // </header>
//   );
// };

// export default Navbar;
