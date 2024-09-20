import React, { lazy, Suspense } from "react";
import ImageCarousel from "../components/ImageCarousel";
import DotLoader from "../components/DotLoader";

// Lazy load components
const About = lazy(() => import("../Section/About"));

// Loading placeholder

const Home = () => {
  return (
    <>
      <ImageCarousel />
      <section>
        <Suspense fallback={<DotLoader />}>
          <About />
        </Suspense>
      </section>
    </>
  );
};

export default Home;
