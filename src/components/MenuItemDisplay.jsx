import React from "react";
import { motion } from "framer-motion";

const MenuItemDisplay = ({ item }) => {
  return (
    <motion.div
      className="flex flex-col overflow-hidden rounded-lg bg-yellow-50 p-2 shadow-md shadow-neutral-600 lg:p-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.5,
        delay: 0.2,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={item.image}
        alt={item.name}
        className="h-[200px] w-full object-cover md:h-[250px] lg:h-[300px]"
      />
      {/* <div className="card-container"> */}
      <h3 className="mt-4 font-bold md:text-xl">{item.name}</h3>
      <p className="text-xs font-light text-slate-700 md:text-base">
        {item.ket}
      </p>
      <p className="mt-auto flex items-end justify-end pt-4 font-semibold text-orange-500 md:text-base">
        Rp{item.price}
      </p>
      {/* </div> */}
    </motion.div>
  );
};

export default MenuItemDisplay;
