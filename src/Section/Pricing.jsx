import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const pricingData = [
  {
    category: "Booth AKIJO",
    tittle: "Paket Hemat",
    harga: "IDR 700k",
    kelengkapan: [
      "30 - 40 orang",
      "Bakso Ba' AKIJO",
      "Mie",
      "Gorengan Pangsit/Tahu",
    ],
    noService: ["Gerobak AKIJO", "Home Service Cooking"],
  },
  {
    category: "Booth AKIJO",
    tittle: "Paket Acara",
    harga: "IDR 1 JT",
    kelengkapan: [
      "50 - 60 orang",
      "Bakso Ba' AKIJO",
      "Mie",
      "Gorengan Pangsit & Tahu",
      "Gerobak PorkHunterJo",
      "Home Service",
    ],
    noService: [],
  },
  {
    category: "Booth AKIJO",
    tittle: "Paket Special",
    harga: "IDR 2 JT",
    kelengkapan: [
      "50 - 60 orang",
      "Bakso Ba' AKIJO",
      "Mie",
      "Gorengan Pangsit & Tahu",
      "Pork Slice BBQ",
      "Panggangan BBQ + Service",
      "Gerobak AKIJO",
      "Home Service",
    ],
    noService: [],
  },
  {
    category: "Coffee Booth",
    tittle: "Event Package",
    harga: "IDR 1 JT",
    kelengkapan: [
      "100 cup kopi",
      "Coffee",
      "Kue onde-onde",
      "Booth Kopi Cantik",
      "Barista Service",
    ],
    noService: [],
  },
  {
    category: "Cathering",
    tittle: "Small Cathering",
    harga: "IDR 800k",
    kelengkapan: ["50 orang", "Menu1", "Menu2", "Menu3"],
    noService: [],
  },
  {
    category: "Cathering",
    tittle: "Party Package",
    harga: "IDR 1 JT",
    kelengkapan: ["70 orang", "Menu1", "Menu2", "Menu3", "Menu4"],
    noService: [],
  },
];

const PricingList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Booth AKIJO");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-neutral-900 p-4">
      <div className="flex items-center justify-center p-24">
        <h2 className="relative text-center font-serif text-4xl font-semibold uppercase tracking-wider text-slate-100">
          Price List
        </h2>
      </div>
      <div className="flex justify-center gap-4 space-x-0 pb-14">
        <button
          className={`rounded-full px-4 py-2 ${
            selectedCategory === "Booth AKIJO"
              ? "bg-yellow-500 text-white"
              : "border-b-2 border-white text-white"
          }`}
          onClick={() => handleCategoryChange("Booth AKIJO")}
        >
          Booth AKIJO
        </button>
        <button
          className={`rounded-full px-4 py-2 ${
            selectedCategory === "Coffee Booth"
              ? "bg-yellow-500 text-white"
              : "border-b-2 border-white text-white"
          }`}
          onClick={() => handleCategoryChange("Coffee Booth")}
        >
          Coffee Booth
        </button>
        <button
          className={`rounded-full px-4 py-2 ${
            selectedCategory === "Cathering"
              ? "bg-yellow-500 text-white"
              : "border-b-2 border-white text-white"
          }`}
          onClick={() => handleCategoryChange("Cathering")}
        >
          Cathering
        </button>
      </div>
      <div className="relative flex flex-wrap justify-center gap-8 pb-16">
        {pricingData
          .filter((card) => card.category === selectedCategory)
          .map((pricingCard, index) => (
            <motion.div
              key={index}
              initial="initial"
              animate="animate"
              variants={{
                initial: {
                  boxShadow: "0px 0px 25px 10px rgba(255, 255, 255, 0)",
                },
                hover: {
                  boxShadow: ["0px 0px 10px 5px rgba(247, 243, 186, 0.3)"],
                  transition: {
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                },
              }}
              whileHover="hover"
              className="relative h-full w-full max-w-md rounded-lg bg-gradient-to-b from-red-300 via-amber-600 to-yellow-500 p-[2px] shadow-lg"
            >
              {selectedCategory === "Cathering" && (
                <motion.div
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                >
                  <motion.p
                    className="text-2xl font-bold text-red-400"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "mirror",
                    }}
                  >
                    Coming Soon
                  </motion.p>
                </motion.div>
              )}
              <div className="flex min-h-full max-w-md flex-col rounded-lg bg-gradient-to-br from-yellow-100 to-rose-100">
                <h2 className="m-4 text-start text-3xl font-extrabold uppercase leading-tight tracking-tight text-slate-900">
                  {pricingCard.tittle}
                </h2>
                <p className="text-center text-3xl font-light tracking-widest text-slate-900">
                  {pricingCard.harga}
                  <span className="text-base font-semibold tracking-tighter text-slate-500">
                    /Paket
                  </span>
                </p>
                <div className="card-container">
                  <ul className="mt-4 list-none space-y-4">
                    {pricingCard.kelengkapan.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        {feature}
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          style={{ color: "#1fba04" }}
                          className="pl-1"
                        />
                      </li>
                    ))}
                    {pricingCard.noService.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-slate-700 line-through"
                      >
                        {feature}
                        <FontAwesomeIcon
                          icon={faCircleXmark}
                          style={{ color: "#334155" }}
                          className="pl-2"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto flex flex-col p-5 pt-10">
                  <a
                    href="https://wa.me/+6281342709321"
                    className="rounded-lg bg-rose-600 object-center py-2 text-center font-bold uppercase tracking-widest text-white"
                  >
                    Booking acara anda <span></span>
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <p className="flex py-2 text-justify text-sm">
                    *Tanya-tanya & info lebih lanjut bisa lewat tombol di atas{" "}
                    <br />
                    *Di luar Tomohon dikenakan Ongkir
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default PricingList;
