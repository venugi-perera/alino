"use client";

import React, { useEffect } from "react";
import { IoMusicalNotes, IoHeart, IoRestaurant } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,        // replay every time (scroll down & up)
      mirror: true,       // animate out when scrolling back up
      anchorPlacement: "top-bottom",
      offset: 100,        // trigger earlier/later
    });

    // Refresh to ensure animations register
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
    <section className="py-24 bg-card min-h-screen">
      <div className="container mx-auto px-8 lg:px-28">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Text Section */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h3
              className="text-4xl lg:text-5xl font-bold text-foreground mb-10 leading-snug"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Story
            </h3>
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
              <p
                className="flex items-start space-x-4"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <IoMusicalNotes className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                <span>
                  Alino began his journey in music, touring as a DJ and spreading
                  joy through vibrant rhythms and performances.
                </span>
              </p>
              <p
                className="flex items-start space-x-4"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <IoHeart className="h-7 w-7 text-accent mt-1 flex-shrink-0" />
                <span>
                  His love for music seamlessly blended with his wife's culinary
                  expertise, creating a unique fusion of culture and flavor.
                </span>
              </p>
              <p
                className="flex items-start space-x-4"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <IoRestaurant className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
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
              className="rounded-xl shadow-xl w-full h-[500px] object-cover transform transition duration-500 ease-out group-hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-3"
            />
            <div className="absolute inset-0 rounded-xl bg-black opacity-0 group-hover:opacity-20 transition duration-500 ease-out" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
