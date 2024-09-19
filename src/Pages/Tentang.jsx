import React from "react";
import { akijo } from "../assets/images";

const Tentang = () => {
  return (
    <div className="page-container flex flex-col items-center gap-8">
      <div className="mt-24 flex items-center justify-center gap-8">
        <img
          className="max-w-[400px] rounded-md object-cover shadow-lg md:max-w-[600px] lg:max-w-[800px]"
          src={akijo}
          alt="gerobak akijo"
        />
      </div>
      <div className="flex max-w-[400px] flex-col items-center justify-center gap-4 text-justify text-slate-800 md:max-w-[600px] lg:max-w-[800px]">
        <p>
          Berdiri di Tomohon, Sulawesi Utara,{" "}
          <span className="font-bold italic">Akijo</span> adalah bisnis kuliner
          yang berawal dari produksi makanan beku (frozen food). Kami memulai
          perjalan kami dengan memproduksi Bakso Babi, kemudian kami mendapat
          ide untuk menghadirkan produk kami lebih dekat kepada pelanggan.
          Dengan konsep <span className="italic">home service cooking</span>,
          kami menawarkan pengalaman unik langsung di tempat acara atau event
          dengan membawa gerobak bakso kami. Layanan kami mencakup wilayah
          Tomohon, Manado, Tondano, Minahasa, dan sekitarnya.
        </p>
        <p>
          Produk kami kini telah berkembang, tidak hanya bakso babi, tapi juga
          siomay, pork slice daging babi yang telah dislice dan dimarinasi
          dengan bumbu spesial kami, ayam goreng, dan ayam bakar yang juga sudah
          dimarinasi.
        </p>
        <p>
          Tak hanya makanan, kami juga menghadirkan layanan booth kopi yang bisa
          dinikmati di berbagai acara dan event, memberikan suasana yang berbeda
          untuk acara atau event special anda
        </p>
        <p>
          Di <span>Akijo</span>, kami berkomitmen untuk selalu menghadirkan cita
          rasa yang unik dengan menggunakan bahan-bahan yang terbaik.
        </p>
      </div>
    </div>
  );
};

export default Tentang;
