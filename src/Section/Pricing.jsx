import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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

const Pricing = () => {
  return (
    <div className="bg-neutral-100 p-4">
      <div className="flex items-center justify-center p-24">
        <h2 className="relative text-center text-4xl text-red-500">
          Daftar Harga
          <br />
          {/* <span className="inline-block bg-gradient-to-b from-amber-600 via-rose-600 to-slate-500 bg-clip-text font-bold text-transparent">
            Gerobak PorkHunteJO
          </span> */}
        </h2>
      </div>
      <div className="relative flex flex-wrap justify-center gap-8">
        {pricingCard.map((pricingCard, index) => (
          <div className=" flex max-w-lg flex-col rounded-lg bg-yellow-50 p-4 shadow-lg">
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
                *Tanya-tanya & info lebih lanjut bisa lewat tombol order <br />
                *Di luar Tomohon dikenakan Ongkir
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
