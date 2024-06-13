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
      price: "27.000",
      ket: "Bakso Ba' + Pangsit + Tahu isi + Pork Slice",
      image: "https://d3gal648yor2nc.cloudfront.net/assets/images/menu4.png",
    },
    {
      name: "Bakso Ba' Special",
      price: "22.000",
      ket: "Bakso Ba' + Pangsit / Tahu isi",
      image: "https://d3gal648yor2nc.cloudfront.net/assets/images/menu4.png",
    },
    {
      name: "Bakso Ba'",
      price: "20.000",
      ket: "Bakso Ba' biasa",
      image: "https://d3gal648yor2nc.cloudfront.net/assets/images/menu4.png",
    },
    {
      name: "Ayam Goreng",
      price: "22.000",
      ket: "Nasi + Ayam + Pangsit/Tahu Isi",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/ayamgorengjadi.png",
    },
    {
      name: "Ayam Bakar",
      price: "25.000",
      ket: "Nasi + Ayam + Pangsit/Tahu Isi",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/ayambakarjadipng.png",
    },
    {
      name: "Pork Slice",
      price: "5.000",
      ket: "Daging Ba' slice",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/porkslice.png",
    },
  ],
  Gorengan: [
    {
      name: "Tahu Isi",
      price: "2.000",
      ket: "Tahu isi sayur-sayuran",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/tahugoreang.png",
    },
    {
      name: "Pangsit",
      price: "2.000",
      ket: "Pangsit",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/pangsitgoreang.png",
    },
    {
      name: "Riceball",
      price: "2.000",
      ket: "Nasi bola-bola",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/riceball.png",
    },
    {
      name: "Tahu Biasa",
      price: "1.000",
      ket: "Tahu",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/tahugoreang.png",
    },
  ],
  Lainnya: [
    {
      name: "Kerupuk kulit Ba'",
      price: "10.000",
      ket: "~",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/menu/kerupukba.jpg",
    },
    {
      name: "Nasi Putih",
      price: "5.000",
      ket: "~",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/menu/nasiputih.jpg",
    },
  ],
  Minuman: [
    {
      name: "Kopi Susu",
      price: "10.000",
      ket: "~",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/menu/kopi.jpg",
    },
    {
      name: "Kopi Hitam",
      price: "8.000",
      ket: "~",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/menu/kopihitam.jpg",
    },
    {
      name: "Lemon Ice",
      price: "8.000",
      ket: "~",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/menu/lemonice.jpg",
    },
  ],
};

const OurMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
<<<<<<< HEAD
    <section id="AboutUs" className="bg-neutral-800 p-8">
      <div className="section-tittle items-center text-center text-2xl font-bold">
        <h2 className="m-4 text-amber-100 lg:m-12">Our Menu</h2>
      </div>
      <div className="flex min-h-full">
        <SideNavMenu
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <motion.div
          className="lg-grid-cols-3 relative ml-8 grid h-3/4 w-3/4 grid-cols-1 gap-8 overflow-hidden md:grid-cols-2"
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
        >
          {menuItems[selectedCategory].map((item, index) => (
            <MenuItemDisplay key={index} item={item} />
          ))}
        </motion.div>
      </div>
      <div className="container mx-auto px-4 pb-14 pt-48">
        <h1 className="my-8 text-center text-2xl font-bold text-amber-100">
          Our Location
        </h1>
        <div className="mx-auto my-20 w-full max-w-4xl rounded border bg-slate-100 p-4 shadow-lg">
          <MapComponent />
=======
    <section id="AboutUs" className="">
      <div className="rounded-[3rem] bg-neutral-800 p-4">
        <div className="section-tittle items-center text-center text-2xl font-bold">
          <h2 className="m-4 text-amber-100 lg:m-12">AkijoFood Menu</h2>
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
          <h1 className="my-8 text-center text-2xl font-bold text-amber-100">
            Our Location
          </h1>
          <div className="mx-auto my-20 w-full max-w-4xl rounded border bg-slate-100 p-4 shadow-lg">
            <MapComponent />
          </div>
>>>>>>> a5c06af4cb7b17d8aa7b93e9888d8c88f76e9c8a
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
