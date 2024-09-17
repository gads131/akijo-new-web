import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoakijosvg from "../assets/logoakijosvg.svg";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

// Do not Touch it will break the code at least at this state
const NavLinks = [
  { title: "About Us", href: "#AboutUs" },
  { title: "Harga", href: "#Pricing" },
  { title: "Product", href: "#OurProduct" },
  { title: "Contact", href: "#Contact" },
];

const socialMedia = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/cherly.sampow.33",
    icon: <FaFacebook className="h-6 w-6" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/akijo_food/",
    icon: <FaInstagram className="h-6 w-6" />,
  },
  {
    name: "TikTok",
    href: "#",
    icon: <FaTiktok className="h-6 w-6" />,
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/+6281342709321",
    icon: <FaWhatsapp className="h-6 w-6" />,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
    document.body.classList.toggle("no-scroll", !open);
  };

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (href) => {
    setOpen(false);
    document.body.classList.remove("no-scroll"); // renable scroll
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
      y: 30, // vertical offset
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
    <nav className={`navbar ${isSticky ? "sticky" : "p-8 lg:p-0"}`}>
      {/* <div className="flex items-center justify-between gap-0 md:m-4 md:text-xl"> */}
      {/* NavLink Left */}
      <div className="nav-lef hidden gap-4 font-bold text-yellow-200 md:flex md:px-12">
        <Link to={"/layanan"}>Layanan</Link>
        <Link to={"/produk"}>Produk</Link>
      </div>

      {/* LOGO Center */}
      <div className="logoCenter relative flex items-center justify-center lg:max-w-xl">
        {/* Logo selalu di tengah */}
        <Link to={"/"}>
          <img
            src={logoakijosvg}
            alt="LogoNavbar"
            className="block h-[29px] w-[109px] md:mx-8 md:h-[49px]"
          />
        </Link>

        {/* Link navigasi absolut */}
        {/* <a
          className=""
          href="/"
          onClick={(e) => handleLinkClick(e, "#Home")}
          aria-label="Home"
        >
          <span className="sr-only">Home</span>
        </a> */}
      </div>

      {/* NavLink Right */}
      <div className="nav-right hidden gap-4 text-nowrap font-bold text-yellow-200 md:flex md:px-12">
        <Link to={"/tentang-kami"}>Tentang Kami</Link>
        <Link to={"/kontak"}>Kontak</Link>
      </div>

      {/* Navbar List */}
      {/* <div className="hidden items-center gap-4 space-x-4 md:flex md:px-12">
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
        </div> */}

      {/* MenuToggle */}
      <div
        className="text-md text-outline cursor-pointer font-bold text-rose-600 md:hidden"
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
            className="mobile-nav fixed left-0 top-0 w-full origin-top bg-yellow-300 p-10 text-black"
          >
            {/* AKIJO TEXT */}
            <div className="flex h-full flex-col justify-between">
              <div className="flex justify-between">
                <a href="/" onClick={(e) => handleLinkClick(e, Link.href)}>
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
      {/* </div> */}
    </nav>
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
