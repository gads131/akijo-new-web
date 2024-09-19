import React from "react";
import { akijo, carousel1 } from "../assets/images";
import { FaCheckCircle } from "react-icons/fa";

const boothBakso = [
  {
    title: "Paket Booth Bakso AKIJO",
    harga: "IDR 1jt",
    text: [
      "50 s/d 60 kepala",
      "10 Bungkus Bakso Ba'",
      "3kg Mie",
      "100 biji Gorengan (pangsit/tahu)",
    ],
  },
  {
    title: "Paket Pork Slice BBQ",
    harga: "IDR 1jt",
    text: ["20 s/d 30 kepala", "7 Bungkus Pork Slice", "Live Cooking BBQ"],
  },
];

const boothKopi = [
  {
    title: "Paket Booth Kopi",
    harga: "IDR 1jt",
    text: ["100 cups kopi", "300 biji Kue Cucur/Onde-onde"],
  },
];

function Service() {
  return (
    <div className="page-container">
      <div className="mt-24 grid items-center justify-center gap-8">
        <img
          className="max-w-[400px] rounded-md object-cover shadow-lg md:max-w-[600px] lg:max-w-[800px]"
          src={akijo}
          alt="gerobak akijo"
        />

        {/* Render boothBakso Array */}
        <div className="flex flex-col items-center justify-center gap-32">
          {boothBakso.map((booth, index) => (
            <div
              id="boothBakso"
              key={index}
              className="flex w-full flex-col items-center justify-center"
            >
              <div className="flex w-full max-w-full items-center justify-center border-red-500 bg-red-500 md:max-w-[500px] lg:max-w-[600px] lg:px-32">
                <h1 className="text-nowrap py-2 text-center text-lg font-bold uppercase tracking-wide text-slate-200 md:text-2xl">
                  {booth.title}
                </h1>
              </div>
              <ul className="flex flex-col gap-8 text-center">
                <li className="pt-4 text-3xl font-bold tracking-widest text-black md:text-4xl">
                  {booth.harga}
                  <span className="text-xs font-light text-slate-600">
                    /paket
                  </span>
                </li>
                {booth.text.map((item, i) => (
                  <li
                    key={i}
                    className="price-text flex items-center justify-center gap-1 border-b-2 border-red-300 py-2 md:text-lg"
                  >
                    <FaCheckCircle style={{ color: "#1fba04" }} />
                    {item}
                  </li>
                ))}
                <button className="mt-4 rounded-lg bg-lime-400 px-4 py-2 text-slate-700 hover:bg-lime-700 hover:text-slate-100">
                  Order
                </button>
              </ul>
            </div>
          ))}

          <img
            className="h-[450px] max-w-[500px] rounded-md object-cover shadow-lg md:max-w-[600px] lg:max-w-[800px]"
            loading="lazy"
            src={carousel1}
            alt="gerobak akijo"
          />
          {/* Render boothKopi Array */}
          {boothKopi.map((booth, index) => (
            <div
              id="Kopi"
              key={index}
              className="flex w-full flex-col items-center justify-center"
            >
              <div className="-mt-24 flex w-full max-w-full items-center justify-center border-red-500 bg-red-500 md:max-w-[500px] lg:max-w-[600px] lg:px-32">
                <h1 className="text-nowrap py-2 text-center text-lg font-bold uppercase tracking-wide text-slate-200 md:text-2xl">
                  {booth.title}
                </h1>
              </div>
              <ul className=" flex flex-col gap-8 text-center">
                <li className="pt-4 text-3xl font-bold tracking-widest text-black md:text-4xl">
                  {booth.harga}
                  <span className="text-xs font-light text-slate-600">
                    /paket
                  </span>
                </li>
                {booth.text.map((item, i) => (
                  <li
                    key={i}
                    className="price-text flex w-full items-center justify-center gap-1 border-b-2 border-red-300 py-4 md:text-lg"
                  >
                    <FaCheckCircle style={{ color: "#1fba04" }} />
                    {item}
                  </li>
                ))}
                <button className="mt-4 w-full rounded-lg bg-lime-400 px-4 py-2 text-slate-700 hover:bg-lime-700 hover:text-slate-100">
                  Order
                </button>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
