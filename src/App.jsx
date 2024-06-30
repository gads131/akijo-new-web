import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./Section/Hero";
import AboutUs from "./Section/AboutUs";
import Loader from "./components/Loader";
import Layout from "./components/Layout";
import OurMenu from "./Section/OurMenu";
// import Carousel from "./Section/Carousel";
import { BrowserRouter } from "react-router-dom";
// import OurCostumer from "./Section/OurCostumer";
import OurProduct from "./Section/OurProduct";
import Footer from "./Section/Footer";
import PricingList from "./Section/Pricing";
// import Layout from "./components/Layout";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <Layout>
      <Helmet>
        <title>AKIJO - Premium Frozen Food & Catering Services</title>
        <meta
          name="description"
          content="AKIJO menyediakan produk-produk frozen food, seperti bakso babi, ayam goreng/bakar, pork slice, siomay. Kami juga melayanani jasa home serivce cooking dan catering untuk acara, pesta, dan event atau kegiatan lainnya"
        />
        <meta
          name="keywords"
          content="akijo food, frozen food, bakso babi, catering service, daily catering, event catering"
        />
        <meta property="og:title" content="AKIJO - Premium food provider" />
        <meta
          property="og:description"
          content="AKIJO offers the best catering service with a variety of menus for daily, events, and special occasions."
        />
        <meta property="og:url" content="https://akijofood.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <section id="Main" className="section">
        <Hero />
      </section>
      <section id="AboutUs" className="section">
        <AboutUs />
      </section>
      <section id="Pricing" className="section">
        <PricingList />
      </section>
      {/* <section id="OurCostumer" className="section">
        <OurCostumer />
      </section> */}
      <section id="OurMenu" className="section px-4 py-2">
        <OurMenu />
      </section>
      <section id="OurProduct" className="section">
        <OurProduct />
      </section>
      <div id="Contact">
        <Footer />
      </div>
    </Layout>
  );
};

export default App;
