import React from "react";
import { bakso, ayamgoreng, porkslice, siomay } from "../assets/images/product";

const products = [
  {
    name: "Bakso Ba' Akijo",
    description: "Ready to cook boil or fry",
    price: "Rp. 28.000 /bks",
    image: bakso,
  },
  {
    name: "Pork Slice",
    description:
      "Pork slice marinated with our secret ingridient ready to grill",
    price: "Rp. 90.000 /bks",
    image: porkslice,
  },
  {
    name: "Ayam Goreng Frozen",
    description: "Fried Chicken with our special spice ready to fry",
    price: "Rp. 100.000 /bks",
    image: ayamgoreng,
  },
  {
    name: "Ayam Bakar Frozen",
    description: "Fried Chicken with our special spice ready to grill",
    price: "Rp. 100.000 /bks",
    image: ayamgoreng,
  },
  {
    name: "Siomay Frozen",
    description: "Steam and serve with peanut sauce",
    price: "Rp. 30.000 /bks",
    image: siomay,
  },
  // Add more products here
];

const Product = ({ product }) => {
  return (
    <div className="m-4 max-w-sm overflow-hidden rounded shadow-lg">
      <div className="h-52 overflow-hidden">
        <img
          className="h-auto w-full object-cover"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{product.name}</div>
        <p className="text-base text-gray-700">{product.description}</p>
      </div>
      <div className="px-6 pb-2 pt-4">
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          {product.price}
        </span>
      </div>
    </div>
  );
};

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const OurProduct = () => {
  return (
    <div className="container mx-auto px-4 py-14">
      <h1 className="py-8 text-center text-xl font-bold text-orange-600">
        Our Products
      </h1>
      <ProductList products={products} />
    </div>
  );
};

export default OurProduct;
