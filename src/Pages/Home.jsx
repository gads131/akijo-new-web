import React, { lazy, Suspense } from "react";
import ImageCarousel from "../components/ImageCarousel";

// Lazy load components
const About = lazy(() => import("../Section/About"));

// Loading placeholder
const LoadingPlaceholder = () => <div>Loading...</div>;

const Home = () => {
  return (
    <>
      <ImageCarousel />
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      </section>
    </>
  );
};

export default Home;
