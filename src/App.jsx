import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./Section/Hero";
import AboutUs from "./Section/AboutUs";
import Loader from "./components/Loader";
import Layout from "./components/Layout";
import OurMenu from "./Section/OurMenu";
import Carousel from "./Section/Carousel";
import { BrowserRouter } from "react-router-dom";
import OurCostumer from "./Section/OurCostumer";
import OurProduct from "./Section/OurProduct";
// import Layout from './components/Layout'

const App = () => {
  return (
    <Layout>
      <Navbar />
      <section id="Main" className="section">
        <Hero />
      </section>
      <section id="AboutUs" className="section">
        <AboutUs />
      </section>
      <section id="OurCostumer" className="section">
        <OurCostumer />
      </section>
      <section id="OurMenu" className="section">
        <OurMenu />
      </section>
      <section>
        <OurProduct />
      </section>
    </Layout>
  );
};

export default App;