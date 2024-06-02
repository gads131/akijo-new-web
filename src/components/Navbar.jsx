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

const socialMedia = [
  {
    name: "Facebook",
    href: "#Home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/akijo_food/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z" />
        <path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z" />
        <circle cx="18.406" cy="5.594" r="1.44" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#Home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M22.465,9.866c-2.139,0-4.122-0.684-5.74-1.846v8.385c0,4.188-3.407,7.594-7.594,7.594c-1.618,0-3.119-0.51-4.352-1.376  c-1.958-1.375-3.242-3.649-3.242-6.218c0-4.188,3.407-7.595,7.595-7.595c0.348,0,0.688,0.029,1.023,0.074v0.977v3.235  c-0.324-0.101-0.666-0.16-1.023-0.16c-1.912,0-3.468,1.556-3.468,3.469c0,1.332,0.756,2.489,1.86,3.07  c0.481,0.253,1.028,0.398,1.609,0.398c1.868,0,3.392-1.486,3.462-3.338L12.598,0h4.126c0,0.358,0.035,0.707,0.097,1.047  c0.291,1.572,1.224,2.921,2.517,3.764c0.9,0.587,1.974,0.93,3.126,0.93V9.866z" />
      </svg>
    ),
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/+6281342709321",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z" />
      </svg>
    ),
  },
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

  const socialMediaVars = {
    initial: {
      opacity: 0,
      y: 30, // Adjust the vertical offset as needed
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0, 0.55, 0.45, 1],
      },
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
  };

  return (
    <header>
      <nav className="absolute z-10 w-full p-4">
        <div className="flex items-center justify-between md:m-4 md:text-xl">
          <div className="flex items-center lg:max-w-xl">
            <a href="#Home" onClick={(e) => handleLinkClick(e, "#Home")}>
              <img
                src={logoakijosvg}
                alt="LogoNavbar"
                className="h-[29px] w-[109px] md:mx-8 md:h-[49px]"
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
            className="text-md cursor-pointer font-bold text-rose-600 transition-all duration-300 ease-out hover:text-slate-100 lg:hidden"
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
                <div className="flex h-full flex-col justify-between">
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
                  {/* MENU LIST FOR MOBILE */}
                  <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col items-center justify-center gap-10 text-xl text-slate-400 "
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
                  {/* Social Media Icons */}
                  <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="mb-16 flex justify-center space-x-12"
                  >
                    {socialMedia.map((media) => (
                      <motion.div
                        key={media.name}
                        variants={mobileLinkVars}
                        className="overflow-hidden"
                      >
                        <a
                          href={media.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-800"
                        >
                          {media.icon}
                        </a>
                      </motion.div>
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
