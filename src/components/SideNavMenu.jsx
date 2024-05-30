import React from "react";

const SideNavMenu = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="h-3/4 w-1/3 rounded-lg bg-white p-2 shadow-md md:p-4 lg:w-1/6">
      <h2 className="mb-4 text-center text-lg font-bold">Our Menu</h2>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={`mb-2 cursor-pointer rounded-lg p-2 ${
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
