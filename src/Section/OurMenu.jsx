// src/pages/OurMenu.js
import React, { useState } from "react";
import MenuItemDisplay from "../components/MenuItemDisplay";
import SideNavMenu from "../components/SideNavMenu";
import { menu1, menu2, menu3, menu4, menu5 } from "../assets/images";
import { motion } from "framer-motion";

const categories = ["Bakso", "Ayam", "Gorengan", "Topping", "Minuman"];

const menuItems = {
  Bakso: [
    {
      name: "Bakso Komplit",
      price: "25.000",
      image: menu1,
    },
    {
      name: "Bakso Special",
      price: "25.000",
      image: menu1,
    },
    {
      name: "Bakso",
      price: "25.000",
      image: menu1,
    },
  ],
  Ayam: [
    {
      name: "Ayam Goreng",
      price: "25.000",
      image: menu2,
    },
    {
      name: "Ayam Bakar",
      price: "27.000",
      image: menu2,
    },
  ],
  Gorengan: [
    {
      name: "Tahu Isi",
      price: "2.000",
      image: menu3,
    },
    {
      name: "Pangsit",
      price: "2.000",
      image: menu3,
    },
    {
      name: "Tahu Biasa",
      price: "1.000",
      image: menu3,
    },
  ],
  Topping: [
    {
      name: "Daging Slice",
      price: "5.000",
      image: menu4,
    },
  ],
  Minuman: [
    {
      name: "Nutri Sari",
      price: "5.000",
      image: menu5,
    },
  ],
};

const OurMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section id="AboutUs" className="bg-neutral-800 p-8">
      <div className="section-tittle items-center text-center text-2xl font-bold">
        <h2 className="m-4 text-amber-100 lg:m-12">Restaurant</h2>
      </div>
      <div className="flex min-h-screen ">
        <SideNavMenu
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <motion.div
          className="lg-grid-cols-3 ml-8 grid h-3/4 w-3/4 grid-cols-1 gap-8 md:grid-cols-2"
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
    </section>
  );
};

export default OurMenu;
