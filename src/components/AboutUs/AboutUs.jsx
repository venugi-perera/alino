"use client";

import React, { useEffect } from "react";
import { IoMusicalNotes, IoHeart, IoRestaurant } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
      offset: 100,
    });

    const refreshTimer = setTimeout(() => {
      AOS.refreshHard();
    }, 300);

    const handleResize = () => AOS.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="relative py-24 min-h-screen overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }} // ✅ white base background
    >
      {/* Gradient overlay like Banner/Menu */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#007A4D]/10 via-transparent to-[#FFB612]/10" />

      <div className="container mx-auto px-8 lg:px-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Text Section */}
          <div data-aos="fade-right" data-aos-delay="100">
            <h3
              className="text-4xl lg:text-5xl font-bold mb-10 leading-snug"
              style={{
                fontFamily: "var(--font-heading)",
                color: "#007A4D", // green heading
              }}
            >
              Our Story
            </h3>
            <div className="space-y-8 text-lg leading-relaxed">
              <p
                className="flex items-start space-x-4"
                data-aos="fade-up"
                data-aos-delay="150"
                style={{ color: "#000000" }} // black text
              >
                <IoMusicalNotes
                  className="h-7 w-7 mt-1 flex-shrink-0"
                  style={{ color: "#FFB612" }} // yellow icon
                />
                <span>
                  Alino began his journey in music, touring as a DJ and spreading
                  joy through vibrant rhythms and performances.
                </span>
              </p>
              <p
                className="flex items-start space-x-4"
                data-aos="fade-up"
                data-aos-delay="250"
                style={{ color: "#000000" }}
              >
                <IoHeart
                  className="h-7 w-7 mt-1 flex-shrink-0"
                  style={{ color: "#007A4D" }} // green icon
                />
                <span>
                  His love for music seamlessly blended with his wife's culinary
                  expertise, creating a unique fusion of culture and flavor.
                </span>
              </p>
              <p
                className="flex items-start space-x-4"
                data-aos="fade-up"
                data-aos-delay="350"
                style={{ color: "#000000" }}
              >
                <IoRestaurant
                  className="h-7 w-7 mt-1 flex-shrink-0"
                  style={{ color: "#FFB612" }} // yellow icon
                />
                <span>
                  Together, they founded Alino Restaurant, bringing authentic
                  African dishes to the heart of the community.
                </span>
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className="relative group"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src="/image.png"
              alt="Alino Restaurant Interior"
              className="rounded-xl w-full h-[500px] object-cover 
                         transform transition duration-500 ease-out
                         group-hover:scale-105 group-hover:-translate-y-3
                         hover:shadow-[0_0_30px_#007A4D] 
                         active:shadow-[0_0_30px_#FFB612]"
            />
            {/* Overlay effect */}
            <div className="absolute inset-0 rounded-xl bg-black opacity-0 
                            group-hover:opacity-20 active:opacity-20 
                            transition duration-500 ease-out" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
