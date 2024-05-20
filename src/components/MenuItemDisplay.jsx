import React from "react";
import { motion } from "framer-motion";

const MenuItemDisplay = ({ item }) => {
  return (
    <motion.div
      className=" overflow-hidden rounded-lg bg-white p-4 shadow-md"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeIn", duration: 0.3, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative h-64">
        <img
          src={item.image}
          alt={item.name}
          className="h-64 w-full rounded-lg object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-2xl font-bold">{item.name}</h3>
        <p className="mt-2 text-lg font-semibold text-orange-500">
          Rp{item.price}
        </p>
        <button className="mt-4 rounded-lg bg-orange-500 px-4 py-2 text-white">
          Order Now
        </button>
      </div>
    </motion.div>
  );
};

export default MenuItemDisplay;
