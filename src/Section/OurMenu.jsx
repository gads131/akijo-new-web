// src/pages/OurMenu.js
import React, { useState } from "react";
import MenuItemDisplay from "../components/MenuItemDisplay";
import SideNavMenu from "../components/SideNavMenu";
import { menu1, menu2, menu3 } from "../assets/images/menu";
import { motion } from "framer-motion";
import MapComponent from "../components/MapComponent";

const categories = ["Makanan", "Gorengan", "Minuman"];

const menuItems = {
  Makanan: [
    {
      name: "Bakso Komplit",
      price: "25.000",
      ket: "lorem",
      image: "https://d3gal648yor2nc.cloudfront.net/assets/images/menu4.png",
    },
    {
      name: "Bakso Special",
      price: "25.000",
      ket: "lorem",
      image: "https://d3gal648yor2nc.cloudfront.net/assets/images/menu4.png",
    },
    {
      name: "Bakso",
      price: "25.000",
      ket: "lorem",
      image: "https://d3gal648yor2nc.cloudfront.net/assets/images/menu4.png",
    },
    {
      name: "Ayam Goreng",
      price: "25.000",
      ket: "lorem",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/ayamgorengjadi.png",
    },
    {
      name: "Ayam Bakar",
      price: "27.000",
      ket: "lorem",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/ayambakarjadipng.png",
    },
    {
      name: "Daging Slice",
      price: "5.000",
      ket: "lorem",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/porkslice.png",
    },
  ],
  Gorengan: [
    {
      name: "Tahu Isi",
      price: "2.000",
      ket: "lorem",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/tahugoreang.png",
    },
    {
      name: "Pangsit",
      price: "2.000",
      ket: "lorem",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/pangsitgoreang.png",
    },
    {
      name: "Riceball",
      price: "2.000",
      ket: "lorem",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/riceball.png",
    },
    {
      name: "Tahu Biasa",
      price: "1.000",
      ket: "lorem",
      image:
        "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/tahugoreang.png",
    },
  ],
  Minuman: [
    {
      name: "Kopi",
      price: "8.000",
      ket: "lorem",
      image:
        "https://pixabay.com/photos/coffee-cappuccino-latte-drink-cafe-3727673/",
    },
    {
      name: "Nutri Sari",
      price: "5.000",
      ket: "lorem",
      image:
        "https://pixabay.com/photos/coffee-cappuccino-latte-drink-cafe-3727673/",
    },
  ],
};

const OurMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section id="AboutUs" className="">
      <div className="rounded-[3rem] bg-neutral-800 p-4">
        <div className="section-tittle items-center text-center text-2xl font-bold">
          <h2 className="m-4 text-amber-100 lg:m-12">Our Menu</h2>
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
        </div>
        <div className="container mx-auto px-4 pb-14 pt-48">
          <h1 className="my-8 text-center text-2xl font-bold text-amber-100">
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
