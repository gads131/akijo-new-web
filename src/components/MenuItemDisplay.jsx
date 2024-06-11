import React from "react";
import { motion } from "framer-motion";

const MenuItemDisplay = ({ item }) => {
  return (
    <motion.div
      className="overflow-hidden rounded-lg bg-white shadow-md"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeIn", duration: 0.3, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex flex-col p-5">
        <div className="overflow-hidden rounded-xl"></div>
        <img
          src={item.image}
          alt={item.name}
          className="h-[300px] w-full object-cover"
        />
        <h3 className="py-4 text-2xl font-bold">{item.name}</h3>
        <p className="text-lg font-semibold text-orange-500">Rp{item.price}</p>
        <p className="font-light text-slate-700">{item.ket}</p>
      </div>
    </motion.div>
  );
};

export default MenuItemDisplay;
