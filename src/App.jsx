import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./Section/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import DotLoader from "./components/DotLoader";

const Home = lazy(() => import("./Pages/Home"));
const Services = lazy(() => import("./Pages/Services"));
const Produk = lazy(() => import("./Pages/Produk"));
const Tentang = lazy(() => import("./Pages/Tentang"));
const Kontak = lazy(() => import("./Pages/Kontak"));

const App = () => {
  return (
    <Router>
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
          <Suspense fallback={<DotLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/produk" element={<Produk />} />
              <Route path="/tentang" element={<Tentang />} />
              <Route path="/kontak" element={<Kontak />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </HelmetProvider>
    </Router>
  );
};

export default App;
