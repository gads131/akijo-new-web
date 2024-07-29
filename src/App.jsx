import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./Section/Hero";
import AboutUs from "./Section/AboutUs";
import OurMenu from "./Section/OurMenu";
import OurProduct from "./Section/OurProduct";
import Footer from "./Section/Footer";
import PricingList from "./Section/Pricing";
import { Helmet, HelmetProvider } from "react-helmet-async";
import priceDate from "./components/priceDate";

// --------UNUSED
// import Layout from "./components/Layout";
// import OurCostumer from "./Section/OurCostumer";
// import Carousel from "./Section/Carousel";
// import Loader from "./components/Loader";
// import Layout from "./components/Layout";
// import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>AKIJO - Premium Frozen Food & Catering Services</title>
          <meta
            name="description"
            content="AKIJO menyediakan produk-produk frozen food, seperti bakso babi, ayam goreng/bakar, pork slice, siomay. Kami juga melayanani jasa home serivce cooking dan catering untuk acara, pesta, dan event atau kegiatan lainnya"
          />
          <meta
            name="keywords"
            content="akijo food, frozen food, bakso babi, siomay, ayam goreng frozen, ayam bakar frozen, catering, event catering, booth kopi,"
          />
          <meta
            property="og:title"
            content="AKIJO - Premium Food Provider & Service"
          />
          <meta
            property="og:description"
            content="AKIJO Melayani pesanan Paket Gerobak Bakso, Booth kopi, Catering pesta"
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
        <section id="priceDate" className="section">
          <priceDate />
        </section>
        <div id="Contact">
          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default App;
