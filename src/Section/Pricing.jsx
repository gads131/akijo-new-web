import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { easeIn } from "framer-motion";

const pricingCard = [
  {
    tittle: "Paket Hemat",
    harga: "IDR 700k",
    kelengkapan: [
      "30 - 40 orang",
      "Bakso Ba' AKIJO",
      "Mie",
      "Gorengan Pangsit/Tahu",
    ],
    noService: ["Gerobak PorkHunterJo", "Home Service"],
  },
  {
    tittle: "Paket Acara",
    harga: "IDR 1 JT",
    kelengkapan: [
      "50 - 60 orang",
      "Bakso Ba' AKIJO",
      "Mie",
      "Gorengan Pangsit & Tahu",
      "Gerobak PorkHunterJo",
      "Home Service",
    ],
    noService: [],
  },
  {
    tittle: "Paket Special",
    harga: "IDR 2 JT",
    kelengkapan: [
      "50 - 60 orang",
      "Bakso Ba' AKIJO",
      "Mie",
      "Gorengan Pangsit & Tahu",
      "Pork Slice BBQ",
      "Panggangan BBQ + Serive",
      "Gerobak PorkHunterJo",
      "Home Service",
    ],
    noService: [],
  },
];

const pulseAnimation = {
  initial: { boxShadow: "0px 0px 25px 10px rgba(255, 255, 255, 0)" },
  hover: {
    boxShadow: ["0px 0px 10px 5px rgba(247, 243, 186, 0.3)"],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

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

const Pricing = () => {
  return (
    <div className="bg-neutral-900 p-4">
      <div className="flex items-center justify-center p-24">
        <h2 className="relative text-center font-serif text-4xl font-semibold text-yellow-100">
          Daftar Harga
          <br />
          <span className="font-montserrat inline-block bg-gradient-to-b from-yellow-200 to-rose-700 bg-clip-text font-bold text-transparent">
            Gerobak PorkHunteJO
          </span>
        </h2>
      </div>
      <div className="relative flex flex-wrap justify-center gap-8 pb-16">
        {pricingCard.map((pricingCard, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={pulseAnimation}
            whileHover="hover"
            className="h-full w-full max-w-md rounded-lg bg-gradient-to-b from-red-300 via-amber-600 to-yellow-500 p-[2px] shadow-lg "
          >
            <div className="flex min-h-full max-w-md flex-col rounded-lg bg-gradient-to-br from-yellow-100 to-rose-100">
              <h2 className="m-4 text-start text-3xl font-extrabold uppercase leading-tight tracking-tight text-rose-600">
                {pricingCard.tittle}
              </h2>
              <p className="text-center text-3xl font-light tracking-widest text-slate-900">
                {pricingCard.harga}
                <span className="text-base font-semibold tracking-tighter text-slate-500">
                  /Paket
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
                  className=" rounded-lg bg-rose-600 object-center py-2 text-center font-bold uppercase tracking-widest text-white"
                >
                  order now <span></span>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <p className="flex py-2 text-justify text-sm">
                  *Tanya-tanya & info lebih lanjut bisa lewat tombol order{" "}
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

export default Pricing;
