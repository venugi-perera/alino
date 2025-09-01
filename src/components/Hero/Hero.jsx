import React, { useState, useEffect } from "react";
import Logo from "/logo.jpeg"; // <-- your logo image

const Hero = () => {
  const taglines = [
    "Delicious Food Is Waiting For You",
    "Experience The Taste Of Happiness",
    "Fresh Ingredients, Perfectly Cooked",
    "Your Favorite Meals, Anytime",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <div className="relative w-full h-screen">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-5" />

      {/* Logo */}
      {/* <div className="absolute top-6 left-6 z-20">
        <img
          src={Logo}
          alt="Restaurant Logo"
          className="w-32 md:w-40 drop-shadow-lg"
        />
      </div> */}

      {/* Content */}
      <div className="relative container h-full grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
        {/* text section */}
        <div className="flex flex-col justify-center gap-8 text-center md:text-left text-white">
          <h1 className="text-4xl lg:text-6xl font-semibold drop-shadow-lg transition-opacity duration-1000">
            {taglines[currentIndex]}
          </h1>
          <p className="drop-shadow-md max-w-xl mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            assumenda qui ipsam id officiis modi cumque minus dolores placeat
            explicabo.
          </p>
          <div className="flex gap-4 items-center md:justify-start justify-center">
            <button className="primary-btn hover:scale-105 duration-200">
              Food Menu
            </button>
            <button className="secondary-btn text-black hover:scale-105 duration-200">
              Book Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
