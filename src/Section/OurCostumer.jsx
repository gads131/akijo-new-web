import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import {
  gerobak2,
  gerobak3,
  gerobak4,
  gerobak5,
  gerobak6,
  gerobak7,
  gerobak8,
} from "../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const OurCostumer = () => {
  return (
    <div className="">
      <div className="flex h-20 items-center justify-center bg-neutral-100">
        <span className="hidden font-semibold uppercase text-slate-900 md:block">
          Scroll down
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 5 }}
            transition={{
              repeat: Infinity,
              duration: 0.7,
            }}
            className="z-10 flex justify-center"
          >
            <FontAwesomeIcon icon={faArrowDown} style={{ color: "#0f172a" }} />
          </motion.div>
        </span>
        <span className="font-semibold uppercase text-slate-900 md:hidden">
          swipe up
          <motion.div
            initial={{ y: 5 }}
            animate={{ y: 0 }}
            transition={{
              repeat: Infinity,
              duration: 0.7,
            }}
            className="z-10 flex justify-center"
          >
            <FontAwesomeIcon icon={faArrowUp} style={{ color: "#0f172a" }} />
          </motion.div>
        </span>
      </div>
      <HorizontalScrollCarousel />
      {/* <div className="flex h-20 items-center justify-center bg-neutral-800">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-yellow-50">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[250px] w-[250px] overflow-hidden rounded-lg bg-neutral-200 md:h-[300px]  md:w-[300px] xl:h-[450px] xl:w-[450px]"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-around">
        <p className="rounded-sm bg-gradient-to-br from-white/20 to-white/0 p-2 font-mono text-xs uppercase text-neutral-200 backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default OurCostumer;

const cards = [
  {
    url: gerobak2,
    title: "AKIJO Gerobak",
    id: 2,
  },
  {
    url: gerobak3,
    title: "AKIJO Gerobak",
    id: 3,
  },
  {
    url: gerobak4,
    title: "Gorengan",
    id: 4,
  },
  {
    url: gerobak5,
    title: "Kopi + AKIJO",
    id: 5,
  },
  {
    url: gerobak6,
    title: "AKIJO Gerobak",
    id: 6,
  },
  {
    url: gerobak7,
    title: "AKIJO Gerobak",
    id: 7,
  },
  {
    url: gerobak8,
    title: "AKIJO Gerobak",
    id: 8,
  },
];
