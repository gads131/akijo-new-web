import React from "react";
import { motion } from "framer-motion";

const MenuItemDisplay = ({ item }) => {
  return (
    <motion.div
      className="overflow-hidden rounded-lg bg-white shadow-md shadow-neutral-600"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeIn", duration: 0.3, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex flex-col p-5">
        <img
          src={item.image}
          alt={item.name}
          className="h-[200px] w-full object-cover md:h-[250px] lg:h-[300px]"
        />
      </div>
      <div className="flex flex-col py-2 pl-4">
        <h3 className="font-bold md:text-xl">{item.name}</h3>

        <p className="font-light text-slate-700">{item.ket}</p>
      </div>
      <p className="flex items-end justify-end px-4 pb-4 font-semibold text-orange-500 md:text-base">
        Rp{item.price}
      </p>
    </motion.div>
  );
};

export default MenuItemDisplay;
