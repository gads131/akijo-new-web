import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { akijo, kopi, bubur } from "../assets/images";
import "./Layanan.css";

Modal.setAppElement("#root");

const cards = [
  {
    tittle: "Booth Bakso",
    image: akijo,
    alt: "Paket Gerobak Bakso Babi, Untuk acara Pernikahan, Ulang tahun, Ibadah, Event",
    id: "boothBakso",
    description:
      "Paket booth bakso untuk 50 s/d 60 orang, alat makan disediakan (mangkok, sendok dll)",
  },
  {
    tittle: "Booth Kopi & Kue Cucur Onde-onde",
    image: kopi,
    alt: "Paket Booth Kopi, Tomohon Manado dan sekitarnya",
    id: "Kopi",
    description: "Paket untuk 100 cup kopi + 150 kue Cucur atau Onde-onde",
  },
  {
    tittle: "Bubur Ayam Akijo",
    image: bubur,
    alt: "Bubur Ayam Akijo",
    id: "buburAyam",
    description: "Per porsi hanya Rp. 15.000 !",
    terbaru: true,
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

const Layanan = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [expand, setExpand] = useState(false);
  const [ref, controls] = useInView();

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const cardRefs = cards.map(() => useInView());

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center">
          <h2 className="flex justify-center text-base font-bold uppercase text-slate-900 lg:text-3xl">
            layanan kami
          </h2>
          <div className="mt-1 h-1 w-1/5 max-w-xs items-center justify-center bg-red-400 object-center"></div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
          {cards.map((card, index) => {
            const [ref, controls] = cardRefs[index];
            const walink = card.id === "buburAyam";
            return (
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  type: "tween",
                  duration: 0.8,
                }}
                key={index}
                className="flex flex-col rounded border p-4 shadow-lg"
              >
                <div className="relative flex flex-grow flex-col overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.tittle}
                    className="mb-4 h-64 w-full cursor-pointer object-cover"
                    // onClick={() => openModal(card.image)}
                  />
                  {card.terbaru && (
                    <div className="ribbon">
                      <span>BARU</span>
                    </div>
                  )}
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    {card.tittle}
                  </h3>
                  <p className="mb-2 text-wrap text-justify text-slate-800">
                    {card.description}
                  </p>
                  {walink ? (
                    <a
                      href="https://wa.me/6281342709321"
                      className="mt-auto flex items-center justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="mt-auto w-full justify-center rounded-lg bg-lime-400 py-2 font-semibold uppercase tracking-widest text-slate-700 hover:bg-lime-700 hover:text-slate-100">
                        Cek Selengkapnya
                      </button>
                    </a>
                  ) : (
                    <Link
                      to={`/Services#${card.id}`} // Use Link to navigate
                      className="mt-auto flex items-center justify-center"
                    >
                      <button className="mt-auto w-full justify-center rounded-lg bg-lime-400 py-2 font-semibold uppercase tracking-widest text-slate-700 hover:bg-lime-700 hover:text-slate-100">
                        Cek Selengkapnya
                      </button>
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Image Modal */}
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="Modal Modal--open"
        overlayClassName="Overlay Overlay--open"
      >
        <button
          className="absolute right-4 top-4 text-slate-600"
          onClick={closeModal}
        >
          Close
        </button>
        <img src={selectedImage} alt="Fullscreen Modal" className="w-full" />
      </Modal> */}
    </>
  );
};

export default Layanan;
