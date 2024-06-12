import React, { useState } from "react";
import Modal from "react-modal";
import { akijo1, akijo2, order } from "../assets/images";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const AboutUs = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div id="AboutUs">
      <div className=" bg-neutral-100 p-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-red-500 md:mb-10 xl:mb-14">
          Welcome to AKIJO
        </h2>
        <p className="mb-4 text-justify  text-lg leading-loose text-slate-800 md:mb-10 lg:text-center xl:mb-14">
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

        {/* CARD */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col rounded border p-4 shadow-lg">
            <div className="flex-grow">
              <img
                src={akijo1}
                alt="Step 1"
                className="mb-4 h-64 w-full cursor-pointer object-cover"
                onClick={() => openModal(akijo1)}
              />
              <h3 className="mb-2 text-xl font-semibold text-slate-900">
                AKIJO Pork Meatball Food Cart
              </h3>
              <p className="text-wrap text-justify font-light text-slate-800">
                Packages for 50 to 60 servings per person. We provide equipment
                and supplies such as food carts, tables, bowls, and other
                complements.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col rounded border p-4 shadow-lg">
            <div className="flex-grow">
              <img
                src={akijo2}
                alt="Step 2"
                className="mb-4 h-64 w-full cursor-pointer object-cover"
                onClick={() => openModal(akijo2)}
              />
              <h3 className="mb-2 text-xl font-semibold text-slate-900">
                Booth Coffe AKIJO
              </h3>
              <p className="text-wrap text-justify font-light text-slate-800">
                The package is for 100 cups of coffee. Along with "Cucur" or
                "Onde-onde".
              </p>
            </div>
          </div>

          {/* Card 3 */}
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
              <p className="text-wrap text-justify font-light text-slate-800">
                ~
              </p>
            </div>
          </div>
        </div>

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
        <div className="mb-4 flex flex-col gap-4 text-center">
          <p className="mb-4 text-lg text-gray-700">
            For more information and order Contact us via the link below
          </p>
          <div>
            <a
              href="https://wa.me/+6281342709321"
              className="rounded-lg bg-rose-600 px-4 py-2 text-white"
            >
              Contact Us (WA)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

{
  /* <h2 className="mb-4 text-center text-2xl font-bold">
        Krijg inzicht in de performance van horecapersoneel
      </h2> */
}
{
  /* <p className="mb-8 text-center">
        Met Felix krijg je inzicht in de performance van uitzendbureaus. Hoeveel
        diensten vullen ze? Hoe is de kwaliteit van de medewerkers? En zijn de
        mensen van het uitzendbureau op tijd? Of zijn ze vaak ziek? Met Felix
        monitoren we al die data en kunnen alle opdrachtgevers inzicht geven in
        de feitelijke kwaliteit van het uitzendbureau. Je bent als klant hiermee
        niet meer overgeleverd aan alle mooie woorden van de uitzendondernemers.
      </p> */
}
{
  /* <div className="flex justify-center">
        <img
          src="https://pixabay.com/photos/blue-tit-nuthatch-bird-animal-8024809/"
          alt="Team"
          className="w-full max-w-lg rounded shadow"
        />
      </div> */
}

// import React from "react";
// import sign from "../assets/sign.png";

// const AboutUs = () => {
//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="container mx-auto px-4">
//         <h2 className="mb-8 text-center text-3xl font-bold">About Us</h2>

//         <div className="mb-8">
//           <h3 className="mb-4 text-2xl font-semibold">Our Story</h3>
//           <div className="mx-auto flex">
//             <p className="text-gray-700">
//               AKIJO started with a simple idea: to bring delicious pork
//               meatballs to the people of Manado. While beef meatballs are a
//               staple in Indonesian cuisine, pork meatballs were something new
//               and exciting. Our love for good food and a passion for innovation
//               led us to create a unique product that quickly became popular
//               among locals.
//             </p>
//             <img src={sign} alt="" width={300} height={300} />
//           </div>
//         </div>

//         <div className="mb-8">
//           <h3 className="mb-4 text-2xl font-semibold">Our Journey</h3>
//           <p className="text-gray-700">
//             From humble beginnings, we began promoting our products through home
//             service cooking for various events such as weddings, birthday
//             parties, worship events, and more. This personal touch allowed
//             people to experience the quality and taste of AKIJO pork meatballs
//             firsthand, and it wasn't long before our reputation grew. We also
//             have our unique cart that will bring something new to your events
//           </p>
//         </div>

//         <div className="mb-8">
//           <h3 className="mb-4 text-2xl font-semibold">Our Goals</h3>
//           <p className="text-gray-700">
//             Our ultimate goal is to have AKIJO products available in
//             supermarkets alongside other frozen food brands, making it easy for
//             everyone to enjoy our delicious offerings. We are also excited to
//             announce the upcoming opening of our restaurant, where customers can
//             savor our products prepared with our unique cooking recipes.
//           </p>
//         </div>

//         <div className="mb-8">
//           <h3 className="mb-4 text-2xl font-semibold">Our Services</h3>
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {/* Repeat this block for each service */}
//             <div className="rounded-lg bg-white p-6 shadow-lg">
//               <h4 className="mb-2 text-xl font-bold">Event Catering</h4>
//               <p className="text-gray-700">
//                 We provide home service cooking for events such as weddings,
//                 birthday parties, worship events, and more, offering a unique
//                 dining experience with our pork meatballs.
//               </p>
//             </div>

//             <div className="rounded-lg bg-white p-6 shadow-lg">
//               <h4 className="mb-2 text-xl font-bold">Event Catering</h4>
//               <p className="text-gray-700">
//                 We provide home service cooking for events such as weddings,
//                 birthday parties, worship events, and more, offering a unique
//                 dining experience with our pork meatballs.
//               </p>
//             </div>

//             <div className="rounded-lg bg-white p-6 shadow-lg">
//               <h4 className="mb-2 text-xl font-bold">Event Catering</h4>
//               <p className="text-gray-700">
//                 We provide home service cooking for events such as weddings,
//                 birthday parties, worship events, and more, offering a unique
//                 dining experience with our pork meatballs.
//               </p>
//             </div>

//             <div className="rounded-lg bg-white p-6 shadow-lg">
//               <h4 className="mb-2 text-xl font-bold">Event Catering</h4>
//               <p className="text-gray-700">
//                 We provide home service cooking for events such as weddings,
//                 birthday parties, worship events, and more, offering a unique
//                 dining experience with our pork meatballs.
//               </p>
//             </div>
//             {/* End of service block */}
//           </div>
//         </div>

//         <div className="text-center">
//           <h3 className="mb-4 text-2xl font-semibold">Join Us</h3>
//           <p className="mb-4 text-gray-700">
//             Interested in joining our team or contributing to our project? Get
//             in touch!
//           </p>
//           <a
//             href="/contact"
//             className="rounded-lg bg-blue-500 px-4 py-2 text-white"
//           >
//             Contact Us
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;
