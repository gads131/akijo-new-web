import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const pricingData = [
  {
    category: "Booth AKIJO",
    tittle: "Paket Hemat",
    harga: "IDR 700k",
    per: "paket",
    kelengkapan: [
      "30 - 40 orang",
      "Bakso Ba' AKIJO",
      "Mie",
      "Gorengan Pangsit/Tahu",
    ],
    noService: ["Gerobak AKIJO", "Home Service Cooking"],
  },
  {
    category: "Booth AKIJO",
    tittle: "Paket Acara",
    harga: "IDR 1 JT",
    per: "paket",
    kelengkapan: [
      "50 - 60 orang",
      "Bakso Ba' AKIJO",
      "Mie",
      "Gorengan Pangsit & Tahu",
      "Gerobak AKIJO",
      "Home Service Cooking",
    ],
    noService: [],
  },
  {
    category: "Booth AKIJO",
    tittle: "Paket Special",
    harga: "IDR 2 JT",
    per: "paket",
    kelengkapan: [
      "50 - 60 orang",
      "Bakso Ba' AKIJO",
      "Mie",
      "Gorengan Pangsit & Tahu",
      "Gerobak AKIJO",
      "Home Service Cooking",
      "Pork Slice BBQ",
      "Panggangan BBQ + Service",
    ],
    noService: [],
  },
  {
    category: "Coffee Booth",
    tittle: "Event Package",
    harga: "IDR 1 JT",
    per: "paket",
    kelengkapan: [
      "100 cup kopi",
      "Coffee",
      "Kue onde-onde",
      "Booth Kopi Cantik",
      "Barista Service",
    ],
    noService: [],
  },
  {
    category: "Catering",
    tittle: "Paket 1",
    harga: "40k",
    per: "porsi",
    kelengkapan: [
      "Nasi",
      "Soup jagung/brenebon",
      "Ayam goreng / bakar",
      "Cakalang goreng sous",
      "Sambal goreng tempe",
      "Sayur campur",
      "Buah",
      "Air Mineral",
    ],
    noService: [],
  },
  {
    category: "Catering",
    tittle: "Paket 2",
    harga: "55k",
    per: "porsi",
    kelengkapan: [
      "Nasi",
      "Sate babi",
      "Perkedel babi",
      "Babi Crispy / Tinoransak",
      "Ayam goreng / bakar",
      "Cakalang goreng sous",
      "Ikan bakar mujair / mangail",
      "Bihun jamur / mie goreng",
      "Sayur campur",
      "Soup brenebon / jagung",
      "Buah segar",
      "Air mineral",
    ],
    noService: [],
  },
  {
    category: "Catering",
    tittle: "Paket 3",
    harga: "65k",
    per: "porsi",
    kelengkapan: [
      "Nasi",
      "Sate babi",
      "Perkedel babi",
      "Babi Crispy / Tinoransak",
      "Ayam goreng / bakar",
      "Ayam rica - rica",
      "Cakalang goreng sous",
      "Ikan bakar mujair / mangail",
      "Bihun jamur / mie goreng",
      "Sayur campur",
      "Soup brenebon / jagung",
      "Capcay",
      "Puding",
      "Buah segar",
      "Air mineral",
    ],
    noService: [],
  },
];

const PricingList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Booth AKIJO");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-neutral-900 p-4">
      <div className="flex items-center justify-center p-24">
        <h2 className="relative text-center font-serif text-4xl font-semibold uppercase tracking-wider text-slate-100">
          Price List
        </h2>
      </div>
      <div className="flex justify-center gap-4 space-x-0 pb-14">
        <button
          className={`rounded-full px-4 py-2 ${
            selectedCategory === "Booth AKIJO"
              ? "bg-yellow-500 text-white"
              : "border-b-2 border-white text-white"
          }`}
          onClick={() => handleCategoryChange("Booth AKIJO")}
        >
          Booth AKIJO
        </button>
        <button
          className={`rounded-full px-4 py-2 ${
            selectedCategory === "Coffee Booth"
              ? "bg-yellow-500 text-white"
              : "border-b-2 border-white text-white"
          }`}
          onClick={() => handleCategoryChange("Coffee Booth")}
        >
          Coffee Booth
        </button>
        <button
          className={`rounded-full px-4 py-2 ${
            selectedCategory === "Catering"
              ? "bg-yellow-500 text-white"
              : "border-b-2 border-white text-white"
          }`}
          onClick={() => handleCategoryChange("Catering")}
        >
          Catering
        </button>
      </div>
      <div className="relative flex flex-wrap justify-center gap-8 pb-16">
        {pricingData
          .filter((card) => card.category === selectedCategory)
          .map((pricingCard, index) => (
            <motion.div
              key={index}
              initial="initial"
              animate="animate"
              variants={{
                initial: {
                  boxShadow: "0px 0px 25px 10px rgba(255, 255, 255, 0)",
                },
                hover: {
                  boxShadow: ["0px 0px 10px 5px rgba(247, 243, 186, 0.3)"],
                  transition: {
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                },
              }}
              whileHover="hover"
              className="relative h-full w-full max-w-md rounded-lg bg-gradient-to-b from-red-300 via-amber-600 to-yellow-500 p-[2px] shadow-lg"
            >
              {/* ----------------------------- Coming soon overlay --------------------------- */}

              <div className="flex min-h-full max-w-md flex-col rounded-lg bg-gradient-to-br from-yellow-100 to-rose-100">
                <h2 className="m-4 text-start text-3xl font-extrabold uppercase leading-tight tracking-tight text-slate-900">
                  {pricingCard.tittle}
                </h2>
                <p className="text-center text-3xl font-light tracking-widest text-slate-900">
                  {pricingCard.harga}
                  <span className="text-base font-semibold tracking-tighter text-slate-500">
                    /{pricingCard.per}
                  </span>
                </p>
                <div className="card-container">
                  <ul className="mt-4 list-none space-y-4">
                    {pricingCard.kelengkapan.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        {feature}
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          style={{ color: "#1fba04" }}
                          className="pl-1"
                        />
                      </li>
                    ))}
                    {pricingCard.noService.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-slate-700 line-through"
                      >
                        {feature}
                        <FontAwesomeIcon
                          icon={faCircleXmark}
                          style={{ color: "#334155" }}
                          className="pl-2"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto flex flex-col p-5 pt-10">
                  <a
                    href="https://wa.me/+6281342709321"
                    className="rounded-lg bg-rose-600 object-center py-2 text-center font-bold uppercase tracking-widest text-white"
                  >
                    Booking acara anda <span></span>
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <p className="flex py-2 text-justify text-sm">
                    *Tanya-tanya & info lebih lanjut bisa lewat tombol di atas
                    <br />
                    *Di luar Tomohon dikenakan Ongkir
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default PricingList;

{
  /* {selectedCategory === "Catering" && (
                <motion.div
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                >
                  <motion.p
                    className="text-2xl font-bold text-red-400"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "mirror",
                    }}
                  >
                    Coming Soon
                  </motion.p>
                </motion.div>
              )} */
}

// -------------- Adding updated price date
// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { motion } from "framer-motion";

// const pricingData = [
//   // Your pricing data here...
// ];

// const PricingList = () => {
//   const [lastUpdated, setLastUpdated] = useState(null);
//   const [currentDate, setCurrentDate] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentDate(new Date());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const handlePriceUpdate = () => {
//     setLastUpdated(new Date());
//     // Logic for updating the price
//   };

//   return (
//     <div className="relative pricing-section">
//       <h2 className="text-2xl font-bold mb-4">Pricing</h2>
//       <div className="absolute top-0 right-0 p-4 text-sm text-gray-500">
//         {lastUpdated ? `Last updated: ${lastUpdated.toLocaleString()}` : `Current date: ${currentDate.toLocaleString()}`}
//       </div>
//       <div className="flex flex-wrap justify-center gap-10">
//         {pricingData.map((item, index) => (
//           <motion.div
//             key={index}
//             className="pricing-card relative w-80 overflow-hidden rounded-xl bg-white shadow-lg"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 * index, duration: 0.5 }}
//           >
//             <div className="flex flex-col p-6">
//               <h3 className="text-lg font-bold">{item.category}</h3>
//               <p className="mt-2 text-2xl font-bold">{item.tittle}</p>
//               <p className="mt-1 text-xl text-gray-700">{item.harga}</p>
//               <p className="mt-1 text-sm text-gray-500">per {item.per}</p>
//               <ul className="mt-4 space-y-2">
//                 {item.kelengkapan.map((kelengkapan, i) => (
//                   <li key={i} className="flex items-center">
//                     <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-green-500" />
//                     {kelengkapan}
//                   </li>
//                 ))}
//               </ul>
//               {item.noService.length > 0 && (
//                 <div className="mt-4">
//                   <p className="text-sm font-semibold text-red-500">No Service:</p>
//                   <ul className="mt-1 space-y-2">
//                     {item.noService.map((noService, i) => (
//                       <li key={i} className="flex items-center">
//                         <FontAwesomeIcon icon={faCircleXmark} className="mr-2 text-red-500" />
//                         {noService}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//               <div className="mt-auto flex flex-col p-5 pt-10">
//                 <button
//                   onClick={handlePriceUpdate}
//                   className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//                 >
//                   Update Price
//                 </button>
//                 <a
//                   href="https://wa.me/+6281342709321"
//                   className="rounded-lg bg-rose-600 object-center py-2 text-center font-bold uppercase tracking-widest text-white mt-4"
//                 >
//                   Booking acara anda <span></span>
//                   <FontAwesomeIcon icon={faWhatsapp} />
//                 </a>
//                 <p className="flex py-2 text-justify text-sm">
//                   *Tanya-tanya & info lebih lanjut bisa lewat tombol di atas
//                   <br />
//                   *Di luar Tomohon dikenakan Ongkir
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PricingList;
