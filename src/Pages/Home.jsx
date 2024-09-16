import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import About from "../Section/About";

const Home = () => {
  return (
    <>
      <section>
        <ImageCarousel />
      </section>
      <section>
        <About />
      </section>
    </>
  );
};

export default Home;
