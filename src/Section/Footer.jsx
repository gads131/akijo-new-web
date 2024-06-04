import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTiktok,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import logoakijosvg from "../assets/logoakijosvg.svg";

const footerLinks = [
  {
    tittle: "Whatsapp",
    href: "#",
    icon: <FontAwesomeIcon icon={faWhatsapp} />,
  },
  {
    tittle: "Facebook",
    href: "#",
    icon: <FontAwesomeIcon icon={faFacebookF} />,
  },
  {
    tittle: "Instagram",
    href: "#",
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
  { tittle: "Tiktok", href: "#", icon: <FontAwesomeIcon icon={faTiktok} /> },
];

const Footer = () => {
  return (
    <footer className="bg-amber-600 p-8 text-neutral-100">
      {/* <div className="items-center justify-center">
          <a href="#Home" onClick={(e) => handleLinkClick(e, "#Home")}>
            <img
              src={logoakijosvg}
              alt="LogoNavbar"
              className="h-[150px] w-[200px] md:mx-8"
            />
          </a>
        </div> */}
      <div className="container mx-auto p-8 text-center">
        {/* <div className="flex justify-center"></div> */}
        <div className=" mb-4 font-extrabold">
          <h1>AKIJO</h1>
        </div>
        <div className="mb-4">
          Paslaten Satu Lingkungan VI. <br />
          Tomohon Timur, Kota Tomohon <br />
          95446.
        </div>
        <div className="mb-4 flex justify-center space-x-6">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.tittle}
              className="hover:text-slate-400"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center p-4 py-8">
          © AKIJO 2024. Hak Cipta Dilindungi
        </div>
      </div>
    </footer>
  );
};

export default Footer;
