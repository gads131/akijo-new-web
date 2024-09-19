import React from "react";
import akijo from "../assets/images/akijo.webp";
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
    title: "Paket Pork Slide BBQ",
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
    <div className="relative flex min-h-dvh flex-col bg-green-50 p-12">
      <div className="mt-24 flex flex-col items-center justify-center gap-8 px-8">
        <img
          className="w-full max-w-full rounded-md object-cover shadow-lg md:max-w-[500px] lg:max-w-[600px]"
          src={akijo}
          alt="gerobak akijo"
        />

        {/* Render boothBakso Array */}
        <div className="flex flex-col items-center justify-center gap-32">
          {boothBakso.map((booth, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center justify-center"
            >
              <div className="flex w-full max-w-full items-center justify-center border-red-500 bg-red-500 md:max-w-[500px] lg:max-w-[600px]">
                <h1 className="px-32 py-2 text-center text-lg font-bold uppercase tracking-wide text-slate-200 md:text-2xl">
                  {booth.title}
                </h1>
              </div>
              <ul className="flex w-full flex-col gap-8 text-center">
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
                <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
                  Order
                </button>
              </ul>
            </div>
          ))}

          {/* Render boothKopi Array */}
          {boothKopi.map((booth, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center justify-center"
            >
              <div className="flex w-full max-w-full items-center justify-center bg-red-500 md:max-w-[500px] lg:max-w-[600px]">
                <h1 className="px-32 py-2 text-center text-lg font-bold uppercase tracking-wide text-slate-200 md:text-2xl">
                  {booth.title}
                </h1>
              </div>
              <ul className=" flex w-full flex-col gap-8 text-center">
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
                <button className="mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white">
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
