import React from "react";
import { FaFish, FaStore, FaUtensils } from "react-icons/fa";
import { GiCrab } from "react-icons/gi"; // correct crab icon

const SeafoodSection = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="uppercase tracking-widest text-blue-600 font-semibold flex items-center gap-2">
              <FaFish /> Daily Fresh Kitchen
            </p>
            <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-gray-900 leading-tight relative inline-block">
              Finest Seafood & Cozy Atmosphere
              <span className="block w-24 h-[3px] bg-blue-500 mt-2 animate-pulse" />
            </h2>

            <p className="mt-6 text-gray-600 text-lg">
              Embark on a journey towards excellence with us! Whether you're
              seeking innovative solutions or expert guidance.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <FaUtensils className="text-blue-500 text-3xl" />
                <p className="text-gray-700">
                  Indulge in an Abundance of Fresh Seafood Delights.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <GiCrab className="text-blue-500 text-3xl" />
                <p className="text-gray-700">
                  Experience the Bounty of the Ocean on Your Plate.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaStore className="text-blue-500 text-3xl" />
                <p className="text-gray-700">
                  Savor the Taste of the Coastline in Every Bite.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaFish className="text-blue-500 text-3xl" />
                <p className="text-gray-700">
                  A Culinary Celebration of the Finest Seafood.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8">
              <button className="relative px-6 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-800 transition">
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-400 animate-ping" />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center items-center">
            <img
              src="/images/woman-eating.jpg"
              alt="Dining Experience"
              className="rounded-2xl shadow-lg w-full h-[450px] object-cover"
            />
            <img
              src="/images/seafood-plate.png"
              alt="Seafood Plate"
              className="absolute bottom-[-40px] right-[-40px] w-48 h-48 rounded-full animate-spin"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeafoodSection;
