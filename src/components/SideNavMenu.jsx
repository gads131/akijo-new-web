import React from "react";

const SideNavMenu = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className=" rounded-lg p-2 md:p-4 lg:w-1/6 lg:bg-white">
      {/* <h2 className="mb-4 text-center text-lg font-bold">Menu</h2> */}
      <ul className="flex flex-row justify-center gap-4 lg:flex-col">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`cursor-pointer rounded-full p-2 max-lg:text-white lg:rounded-md ${
              selectedCategory === category
                ? "bg-orange-500 text-white"
                : "hover:bg-gray-100 "
            }`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavMenu;
