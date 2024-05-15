import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p className="text-gray-700">
            AKIJO started with a simple idea: to bring delicious pork meatballs to the people of Manado. While beef meatballs are a staple in Indonesian cuisine, pork meatballs were something new and exciting. Our love for good food and a passion for innovation led us to create a unique product that quickly became popular among locals.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Journey</h3>
          <p className="text-gray-700">
            From humble beginnings, we began promoting our products through home service cooking for various events such as weddings, birthday parties, worship events, and more. This personal touch allowed people to experience the quality and taste of AKIJO pork meatballs firsthand, and it wasn't long before our reputation grew. We also have our unique cart that will bring something new to your events
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Goals</h3>
          <p className="text-gray-700">
            Our ultimate goal is to have AKIJO products available in supermarkets alongside other frozen food brands, making it easy for everyone to enjoy our delicious offerings. We are also excited to announce the upcoming opening of our restaurant, where customers can savor our products prepared with our unique cooking recipes.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Repeat this block for each service */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-2">Event Catering</h4>
              <p className="text-gray-700">
                We provide home service cooking for events such as weddings, birthday parties, worship events, and more, offering a unique dining experience with our pork meatballs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-2">Event Catering</h4>
              <p className="text-gray-700">
                We provide home service cooking for events such as weddings, birthday parties, worship events, and more, offering a unique dining experience with our pork meatballs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-2">Event Catering</h4>
              <p className="text-gray-700">
                We provide home service cooking for events such as weddings, birthday parties, worship events, and more, offering a unique dining experience with our pork meatballs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-2">Event Catering</h4>
              <p className="text-gray-700">
                We provide home service cooking for events such as weddings, birthday parties, worship events, and more, offering a unique dining experience with our pork meatballs.
              </p>
            </div>
            {/* End of service block */}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Join Us</h3>
          <p className="text-gray-700 mb-4">Interested in joining our team or contributing to our project? Get in touch!</p>
          <a href="/contact" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
