import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTiktok,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logoakijosvg from "../assets/logoakijosvg.svg";

const footerLinks = [
  {
    title: "Whatsapp",
    href: "https://wa.me/+6281342709321",
    icon: <FontAwesomeIcon icon={faWhatsapp} />,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/cherly.sampow.33",
    icon: <FontAwesomeIcon icon={faFacebookF} />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/akijo_food/",
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    title: "Tiktok",
    href: "#",
    icon: <FontAwesomeIcon icon={faTiktok} />,
  },
];

const Footer = () => {
  const footerAnimation = useAnimation();
  const contentAnimation = useAnimation();
  const [footerRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px 0px 0px",
  });

  useEffect(() => {
    if (inView) {
      footerAnimation.start({ y: 0 });
      contentAnimation.start({ opacity: 1 });
    }
  }, [inView, footerAnimation, contentAnimation]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      ref={footerRef}
      initial={{ y: "100%" }}
      animate={footerAnimation}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="relative bg-amber-600 p-8 text-neutral-100"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={contentAnimation}
        transition={{ delay: 0.5, duration: 1 }}
        className="container mx-auto text-center"
      >
        <div className="mb-4">
          <a href="#Home" onClick={handleLogoClick}>
            <img
              src={logoakijosvg}
              alt="AKIJO Logo"
              className="mx-auto h-20 w-32"
            />
          </a>
        </div>
        <div className="mb-4 text-lg">
          Paslaten Satu Lingkungan VI. <br />
          Tomohon Timur, Kota Tomohon <br />
          95446.
        </div>
        <div className="mb-8 flex justify-center space-x-6">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.title}
              className="transition-colors duration-300 hover:text-slate-400"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="border-t-2 border-slate-200 pt-2">
          <p className="pb-4">© AKIJO 2024. Hak Cipta Dilindungi</p>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
