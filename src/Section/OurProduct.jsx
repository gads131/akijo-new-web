import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const products = [
  {
    name: "Bakso Ba' Akijo",
    description: "Isi 30 butir",
    price: "Rp. 31.500 /bks",
    image:
      "https://d3gal648yor2nc.cloudfront.net/assets/images/menu/baksobanew.png",
  },
  {
    name: "Pork Slice",
    description: "Berat 250gr",
    price: "Rp. 74.500 /bks",
    image:
      "https://d3gal648yor2nc.cloudfront.net/assets/images/menu/porkslice.png",
  },
  {
    name: "Ayam Goreng Frozen",
    description: "Setengah ekor ayam",
    price: "Rp. 62.500 /bks",
    image:
      "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/ayamgoreng.png",
  },
  {
    name: "Ayam Bakar Frozen",
    description: "Setengah Ekor Ayam",
    price: "Rp. 62.500 /bks",
    image:
      "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/ayamgoreng.png",
  },
  {
    name: "Siomay Frozen",
    description: "Isi 5 Siomay",
    price: "Rp. 30.000 /bks",
    image:
      "https://d3gal648yor2nc.cloudfront.net/assets/images/photoshop/siomay.png",
  },
];

const useInView = (threshold = 0.1) => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, threshold]);

  return [ref, controls];
};

const Product = ({ product }) => {
  const [ref, controls] = useInView();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: 1.05 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        type: "tween",
        duration: 0.5,
      }}
      className="m-4 max-w-md overflow-hidden rounded bg-white shadow-lg"
    >
      <div className="flex flex-col p-5">
        <img
          src={product.image}
          alt={product.name}
          className="h-[300px] w-[400px] object-cover"
        />
      </div>
      {/* isi konten / card */}
      <div className="card-container text-balance">
        <h3 className="font-bold md:text-xl">{product.name}</h3>
        <p className="text-xs font-light text-slate-700 md:text-base">
          {product.description}
        </p>
      </div>
      <p className="flex items-end justify-end px-4 pb-4 font-semibold text-orange-500 md:text-base">
        {product.price}
      </p>
      {/* <div className="px-6 pb-2 pt-4">
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          {product.price}
        </span>
      </div> */}
    </motion.div>
  );
};

const ProductList = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-center"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.5,
          },
        },
      }}
    >
      {products.map((product) => (
        <Product key={product.name} product={product} />
      ))}
    </motion.div>
  );
};

const OurProduct = () => {
  return (
    <div className="flex flex-col gap-24 bg-neutral-100 p-8 pb-32">
      <div className="flex flex-col items-center">
        <h2 className="mt-32 flex justify-center text-3xl font-bold uppercase text-slate-900">
          Produk Frozen Food
        </h2>
        <div className="h-1 w-1/6 max-w-xs items-center justify-center bg-red-400 object-center"></div>
      </div>
      <div className="relative flex flex-wrap items-center justify-end">
        <ProductList />
      </div>
    </div>
  );
};

export default OurProduct;
