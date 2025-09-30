import React from "react";

const DelightfulExperience = () => {
  return (
    <section id="aboutus" className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Image */}
          <div data-aos="fade-right" className="flex justify-center">
            <img
              src="/images/seafood-cooking.jpg" // replace with your left image
              alt="Cooking seafood"
              className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          {/* Middle Content */}
          <div
            className="text-center space-y-6 px-4"
            data-aos="fade-up"
          >
            <p className="uppercase tracking-widest text-sm text-[#a45731]">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Delightful <br /> Experience
            </h2>

            <p className="text-xl italic font-light text-gray-800 leading-relaxed">
              “Everything is possible. We’ll make your stay unforgettable.”
            </p>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              From traditional flavours influenced by local culture to gastronomic
              delights that trot the world, we have always raised the standard of
              hospitality through Responsible Luxury.
            </p>

            {/* Founder Signature */}
            <div className="pt-4">
              <p className="font-signature text-xl">Josefine</p>
              <p className="uppercase tracking-widest text-xs text-gray-500 mt-2">
                JOSEFINE HOELLER / <span className="text-[#a45731]">Founder</span>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div data-aos="fade-left" className="flex justify-center">
            <img
              src="/images/crabs.jpg" // replace with your right image
              alt="Seafood dish"
              className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DelightfulExperience;
