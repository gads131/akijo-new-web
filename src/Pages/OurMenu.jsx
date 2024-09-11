// src/pages/OurMenu.js
import React, { useState } from "react";
import MenuItemDisplay from "../components/MenuItemDisplay";
import SideNavMenu from "../components/SideNavMenu";
import { menu1, menu2, menu3 } from "../assets/images/menu";
import { motion } from "framer-motion";
import MapComponent from "../components/MapComponent";

const categories = ["Makanan", "Gorengan", "Lainnya", "Minuman"];

const menuItems = {
  Makanan: [
    {
      name: "Bakso Ba' Komplit",
      price: "28.500",
      ket: "Bakso Ba' + Pangsit + Tahu isi + Pork Slice",
      image: "https://d3gal648yor2nc.cloudfront.net/assets/images/menu4.png",
      comingSoon: true,
    },
    {
      name: "Bakso Ba' Special",
      price: "21.000",
      ket: "Bakso Ba' + Pangsit / Tahu isi",
      image: "https://d3gal648yor2nc.cloudfront.net/assets/images/menu4.png",
      comingSoon: true,
    },
    {
      name: "Bakso Ba'",
      price: "18.000",
      ket: "Bakso Ba' biasa",
      image: "https://d3gal648yor2nc.cloudfront.net/assets/images/menu4.png",
      comingSoon: true,
    },
    {
      name: "Ayam Goreng",
      price: "25.000",
      ket: "Nasi + Ayam + Sayur",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/ayamgorengjadi.png",
      comingSoon: true,
    },
    {
      name: "Ayam Bakar",
      price: "26.500",
      ket: "Nasi + Ayam + Sayur **1 pcs/potong",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/ayambakarjadipng.png",
      comingSoon: true,
    },
    {
      name: "Pork Slice",
      price: "5.000",
      ket: "Daging Ba' slice",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/porkslice.png",
      comingSoon: true,
    },
  ],
  Gorengan: [
    {
      name: "Tahu Isi",
      price: "3.000",
      ket: "Tahu isi sayur-sayuran",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/tahugoreang.png",
      comingSoon: true,
    },
    {
      name: "Pangsit",
      price: "3.000",
      ket: "Pangsit",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/pangsitgoreang.png",
      comingSoon: true,
    },
    {
      name: "Riceball",
      price: "3.000",
      ket: "Nasi bola-bola",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/riceball.png",
      comingSoon: true,
    },
    {
      name: "Tahu Biasa",
      price: "1.000",
      ket: "Tahu",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/tahugoreang.png",
      comingSoon: true,
    },
  ],
  Lainnya: [
    {
      name: "Kerupuk kulit Ba'",
      price: "15.000",
      ket: "100 gram",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/menu/kerupukba.jpg",
      comingSoon: true,
    },
    {
      name: "Nasi Putih",
      price: "8.000",
      ket: "~",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/menu/nasiputih.jpg",
      comingSoon: true,
    },
  ],
  Minuman: [
    {
      name: "Kopi Susu",
      price: "12.000",
      ket: "~",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/menu/kopi.jpg",
      comingSoon: true,
    },
    {
      name: "Kopi Hitam",
      price: "10.000",
      ket: "~",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/menu/kopihitam.jpg",
      comingSoon: true,
    },
    {
      name: "Lemon Ice",
      price: "15.000",
      ket: "~",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/menu/lemonice.jpg",
      comingSoon: true,
    },
  ],
};

const OurMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section id="AboutUs" className="">
      <div className="rounded-[3rem] bg-neutral-900 p-4">
        <div className="section-tittle items-center text-center text-2xl font-bold">
          <h2 className="m-4 text-slate-200 lg:m-12">AkijoResto Menu</h2>
        </div>

        <div className="max relative flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-start">
          <SideNavMenu
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <div className="flex flex-1 flex-col justify-start">
            <motion.div
              className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-rows-2 "
              key={selectedCategory}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.5, delay: 0.3 }}
            >
              {menuItems[selectedCategory].map((item, index) => (
                <MenuItemDisplay key={index} item={item} />
              ))}
            </motion.div>
          </div>
        </div>
        <div className="container mx-auto px-4 pb-14 pt-14">
          <h1 className="my-8 text-center text-2xl font-bold text-slate-200">
            Our Location
          </h1>
          <div className="mx-auto my-20 w-full max-w-4xl rounded border bg-slate-100 p-4 shadow-lg">
            <MapComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMenu;