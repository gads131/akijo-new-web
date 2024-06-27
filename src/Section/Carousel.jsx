// import React, { useRef, useEffect, useState } from "react";
// import { motion, useAnimation, useMotionValue, animate } from "framer-motion";
// import "./Carousel.css";
// import {
//   carousel1,
//   carousel2,
//   carousel3,
//   carousel4,
//   carousel5,
//   carousel6,
//   carousel7,
//   carousel8,
// } from "../assets/images";

// const images = [
//   carousel1,
//   carousel2,
//   carousel3,
//   carousel4,
//   carousel5,
//   carousel6,
//   carousel7,
//   carousel8,
// ];

// const Carousel = () => {
//   const carouselRef = useRef();
//   const xTranslation = useMotionValue(0);
//   const controls = useAnimation();
//   const [isZoomed, setIsZoomed] = useState(false);

//   useEffect(() => {
//     const width = carouselRef.current.offsetWidth;
//     const duration = 25; // Duration in seconds

//     const loopAnimation = () => {
//       controls.start({
//         x: -width,
//         transition: {
//           duration: duration,
//           ease: "linear",
//           repeat: Infinity,
//           repeatType: "loop",
//         },
//       });
//     };

//     loopAnimation();
//   }, [controls]);

//   const handleMouseEnter = () => {
//     controls.stop();
//     controls.start({
//       x: xTranslation.get(),
//       transition: { duration: 1 },
//     });
//   };

//   const handleMouseLeave = () => {
//     const width = carouselRef.current.offsetWidth;
//     const remainingDistance = width + xTranslation.get();
//     const remainingDuration = (remainingDistance / width) * 25;

//     controls.start({
//       x: -width,
//       transition: {
//         duration: remainingDuration,
//         ease: "linear",
//         repeat: Infinity,
//         repeatType: "loop",
//       },
//     });
//   };

//   const handleZoomClick = () => {
//     setIsZoomed(!isZoomed);
//   };

//   return (
//     <div className="relative h-64 w-full overflow-hidden">
//       <motion.div
//         className="absolute left-0 flex gap-4"
//         ref={carouselRef}
//         style={{ x: xTranslation }}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         animate={controls}
//       >
//         {images.map((src, index) => (
//           <motion.div key={index} className="h-64 w-64 flex-shrink-0">
//             <motion.img
//               src={src}
//               alt={`Carousel item ${index + 1}`}
//               className={`h-full w-full cursor-pointer object-cover ${isZoomed ? "scale-150" : ""}`}
//               onClick={handleZoomClick}
//               initial={{ scale: 1 }}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.5 }}
//             />
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Carousel;
