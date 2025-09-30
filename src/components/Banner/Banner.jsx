"use client";
import React, { useEffect } from "react";
import BannerImg from "../../assets/2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom"; // ✅ React Router Link

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,   // replay every time
      mirror: true,  // animate back on scroll up
      offset: 100,
      easing: "ease-in-out",
    });

    const refreshTimer = setTimeout(() => {
      AOS.refreshHard();
    }, 300);

    window.addEventListener("resize", AOS.refresh);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("resize", AOS.refresh);
    };
  }, []);

  return (
    <section className="relative bg-card py-20 lg:py-32 overflow-hidden">
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* img section */}
          <div
            className="flex justify-center items-center"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src={BannerImg}
              alt="Delicious food on table"
              className="rounded-2xl shadow-2xl w-full max-w-lg transform transition duration-500 ease-out hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            />
          </div>

          {/* text section */}
          <div
            className="flex flex-col justify-center text-center md:text-left"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h1
              className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Food Is Always <span className="text-primary">Good</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              At our restaurant, every dish is crafted with fresh ingredients,
              bold flavors, and a touch of love. From classic favorites to
              unique specialties, we believe great food brings people together.
              Sit back, relax, and enjoy a meal that’s made to delight your
              taste buds.
            </p>
            <div>
              {/* ✅ React Router navigation to /menu */}
              <Link to="/menu">
                <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-primary/90 hover:scale-105 transition-transform duration-300">
                  Explore Menu
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
