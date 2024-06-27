import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { akijo1, akijo2, order } from "../assets/images";

Modal.setAppElement("#root");

const cards = [
  {
    tittle: "Paket Booth Bakso AKIJO",
    image:
      "https://d3gal648yor2nc.cloudfront.net/assets/images/card/akijo1.jpg",
    description:
      "Paket booth bakso untuk 50 s/d 60 orang, alat makan disediakan (mangkok, sendok dll)",
  },
  {
    tittle: "Paket Booth Kopi AKIJO",
    image:
      "https://d3gal648yor2nc.cloudfront.net/assets/images/card/akijo2.jpg",
    description: "Paket untuk 100 cup kopi plus 150 kue Onde-onde",
  },
  {
    tittle: "Pesanan Sesuai Permintaan",
    image: "https://d3gal648yor2nc.cloudfront.net/assets/images/card/order.jpg",
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
      <div className=" bg-neutral-100 p-8">
        <h2 className="judul mb-4 bg-gradient-to-b from-red-400 to-rose-600 bg-clip-text text-center font-bold text-transparent md:mb-10 xl:mb-14">
          Welcome to AKIJO
        </h2>
        <p
          onClick={toggleExpand}
          className={`mb-4 text-justify text-lg leading-loose text-slate-800 md:mb-10 lg:text-center xl:mb-14 
            ${expand ? "" : "line-clamp-3"}
            cursor-pointer md:line-clamp-none md:cursor-default`}
        >
          AKIJO started with a simple idea, to bring delicious pork meatballs to
          the people of Manado. While beef meatballs are a staple in Indonesian
          cuisine, pork meatballs were something new and exciting. Our love for
          good food and a passion for innovation led us to create a unique
          product that quickly became popular among locals. From humble
          beginnings, we began promoting our products through home service
          cooking for various events such as weddings, birthday parties, worship
          events, and more. This personal touch allowed people to experience the
          quality and taste of AKIJO pork meatballs firsthand, and it wasn't
          long before our reputation grew. We also have our unique cart that
          will bring something new to your events
        </p>

        <div className="items-center justify-center p-4 pb-8 text-center">
          <h3 className=" text-xl font-semibold text-red-500">
            Home Service Cooking
          </h3>
        </div>

        {/* card */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
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

        {/* CARD
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          Card 1
          <div className="flex flex-col rounded border p-4 shadow-lg">
            <div className="flex-grow">
              <img
                src={akijo1}
                alt="Step 1"
                className="mb-4 h-64 w-full cursor-pointer object-cover"
                onClick={() => openModal(akijo1)}
              />
              <h3 className="mb-2 text-xl font-semibold text-slate-900">
                Gerobak Bakso Ba' AKIJO
              </h3>
              <p className="text-wrap text-justify text-slate-800">
                Paket untuk 50 sampai 60 porsi/orang. Peralatan dan perlengkapan
                kami sediakan seperti gerobak, meja, mangkok, berserta pelengkap
                lainnya.
              </p>
            </div>
          </div>

          Card 2
          <div className="flex flex-col rounded border p-4 shadow-lg">
            <div className="flex-grow">
              <img
                src={akijo2}
                alt="Step 2"
                className="mb-4 h-64 w-full cursor-pointer object-cover"
                onClick={() => openModal(akijo2)}
              />
              <h3 className="mb-2 text-xl font-semibold text-slate-800">
                Booth Coffe AKIJO
              </h3>
              <p className="text-wrap text-justify text-slate-800">
                Paket untuk 100 cups kopi. Berserta kue cucur
              </p>
            </div>
          </div>

          Card 3
          <div className="flex flex-col rounded border p-4 shadow-lg">
            <div className="flex-grow">
              <img
                src={order}
                alt="Step 3"
                className="mb-4 h-64 w-full cursor-pointer object-cover"
                onClick={() => openModal(order)}
              />
              <h3 className="mb-2 text-xl font-semibold text-slate-800">
                Order By Request
              </h3>
              <p className="text-wrap text-justify text-slate-800">
                Bisa Request pesanan
              </p>
            </div>
          </div>
        </div> */}

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
    </div>
  );
};

export default AboutUs;
