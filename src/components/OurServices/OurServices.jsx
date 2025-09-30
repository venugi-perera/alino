"use client";
import React, { useEffect } from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { MdRestaurantMenu, MdLocalDining } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";

const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,  // replay every scroll
      mirror: true, // animate on scroll up
      offset: 100,
      easing: "ease-out",
    });

    const refreshTimer = setTimeout(() => AOS.refreshHard(), 300);
    window.addEventListener("resize", AOS.refresh);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("resize", AOS.refresh);
    };
  }, []);

  // service cards data
  const services = [
    {
      id: 1,
      icon: <FaMobileScreen className="text-4xl text-red-600 mb-4" />,
      title: "Online Reservations",
      desc: "Book your table instantly through our app or website",
      shadow: "hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]", // red glow
    },
    {
      id: 2,
      icon: <MdRestaurantMenu className="text-4xl text-green-600 mb-4" />,
      title: "Gourmet Menu",
      desc: "Enjoy a wide range of delicious meals crafted by top chefs",
      shadow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]", // green glow
    },
    {
      id: 3,
      icon: <MdLocalDining className="text-4xl text-yellow-600 mb-4" />,
      title: "Dine-In Experience",
      desc: "Relax in our cozy restaurant with a welcoming ambiance",
      shadow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.6)]", // yellow glow
    },
    {
      id: 4,
      icon: <CiDeliveryTruck className="text-4xl text-blue-600 mb-4" />,
      title: "Home Delivery",
      desc: "Get your favorite meals delivered fast and fresh to your door",
      shadow: "hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]", // blue glow
    },
  ];

  return (
    <div className="container py-12">
      {/* header section */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h1
          className="text-4xl font-semibold text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our Services
        </h1>
        <p className="mt-2 text-gray-600">
          Experience the best dining with our premium services
        </p>
      </div>

      {/* icons section with cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            className={`flex flex-col items-center text-center bg-white shadow-lg rounded-xl p-8 h-72 transform transition duration-500 ease-out cursor-pointer ${service.shadow}`}
          >
            {service.icon}
            <p className="text-xl font-semibold mb-2">{service.title}</p>
            <span className="text-gray-500 text-sm">{service.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
