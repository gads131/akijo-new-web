import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { akijo1, order } from "../assets/images";

Modal.setAppElement("#root");

const cards = [
  {
    tittle: "Paket Booth Bakso AKIJO",
    image:
      "https://d3gal648yor2nc.cloudfront.net/assets/images/card/akijo1.jpg",
    alt: "Paket Gerobak Bakso Babi, Tomohon Manado dan sekitarnya",
    description:
      "Paket booth bakso untuk 50 s/d 60 orang, alat makan disediakan (mangkok, sendok dll)",
  },
  {
    tittle: "Paket Booth Kopi AKIJO",
    image:
      "https://d3gal648yor2nc.cloudfront.net/assets/images/card/akijo2.jpg",
    alt: "Paket Booth Kopi, Tomohon Manado dan sekitarnya",
    description: "Paket untuk 100 cup kopi plus 150 kue Onde-onde",
  },
  {
    tittle: "Pesanan Sesuai Permintaan",
    image: "https://d3gal648yor2nc.cloudfront.net/assets/images/card/order.jpg",
    alt: "Order by request",
    description: "~",
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

const AboutUs = () => {
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
    <div id="AboutUs">
      {/* --------------------------------------------------- */}
      <div className=" flex items-center justify-center">
        <div className=" rounded-md bg-zinc-700 md:w-3/4">
          <h2 className="md:judul px-8 py-4 text-center text-3xl font-bold text-slate-200 xl:mb-2">
            Welcome to AKIJO
          </h2>
          <p className="font-montserrat mb-16 items-center px-4 text-center text-xl tracking-wider text-slate-200 md:px-16 md:leading-loose lg:text-2xl">
            AkijoFood melayani pesanan untuk berbagai acara & pesta, dari Ibadah
            sampai pesta perkawinan, dan event atau kegiatan lainnya. Ramaikan
            acara/event anda dengan gerobak bakso AKIJO . <br /> <br /> Kami
            juga menyediakan makanan frozen siap saji seperti Bakso babi, daging
            babi slice (pork slice), siomay, dan ayam goreng/bakar.
          </p>

          {/* <p
              onClick={toggleExpand}
              className={`font-montserrat mb-16 items-center px-16 text-center text-xl leading-loose tracking-wider text-slate-200
              ${expand ? "" : "line-clamp-3"}
              cursor-pointer md:line-clamp-none md:cursor-default`}
            ></p> */}
          {/* <p
              onClick={toggleExpand}
              className={`px-16  text-justify text-lg leading-loose text-slate-200 md:mb-10 lg:text-center xl:mb-14  
            ${expand ? "" : "line-clamp-3"}
            cursor-pointer md:line-clamp-none md:cursor-default`}
            >
              AKIJO started with a simple idea, to bring delicious pork
              meatballs to the people of Manado. While beef meatballs are a
              staple in Indonesian cuisine, pork meatballs were something new
              and exciting. Our love for good food and a passion for innovation
              led us to create a unique product that quickly became popular
              among locals. From humble beginnings, we began promoting our
              products through home service cooking for various events such as
              weddings, birthday parties, worship events, and more. This
              personal touch allowed people to experience the quality and taste
              of AKIJO pork meatballs firsthand, and it wasn't long before our
              reputation grew. We also have our unique cart that will bring
              something new to your events
            </p> */}
        </div>
      </div>
      {/* ----------------------------------------- */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center">
          <h2 className="flex justify-center text-3xl font-bold uppercase text-slate-900">
            layanan kami
          </h2>
          <div className="h-1 w-1/5 max-w-xs items-center justify-center bg-red-400 object-center"></div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
          {cards.map((card, index) => {
            const [ref, controls] = cardRefs[index];
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
                  type: "spring",
                  stiffness: 100,
                  duration: 0.5,
                }}
                key={index}
                className="flex flex-col rounded border p-4 shadow-lg"
              >
                <div className="flex-grow">
                  <img
                    src={card.image}
                    alt={card.tittle}
                    className="mb-4 h-64 w-full cursor-pointer object-cover"
                    onClick={() => openModal(card.image)}
                  />
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    {card.tittle}
                  </h3>
                  <p className="text-wrap text-justify text-slate-800">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Image Modal */}
      <Modal
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
      </Modal>
    </div>
  );
};

export default AboutUs;

// AkijoFood melayani pesanan untuk berbagai acara & pesta, dari Ibadah sampai pesta perkawinan, dan event atau kegiatan lainnya. Ramaikan acara/event anda dengan gerobak bakso AKIJO . Kami juga menyediakan makanan frozen siap saji seperti Bakso babi, daging babi slice (pork slice), siomay, dan ayam goreng/bakar.
