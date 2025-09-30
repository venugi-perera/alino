import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Specialties = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false,    // allow animations both scrolling down and up
    });
  }, []);

  const items = [
    {
      img: "/images/lobster.jpg",
      title: "Broiled Lobster Tails",
      desc: "Roast Beef / Bone Marrow / Black Garlic / Mustard Seeds",
      price: "$12.55",
    },
    {
      img: "/images/salmon.jpg",
      title: "Baked Salmon Fillets Dijon",
      desc: "Roast Beef / Bone Marrow / Black Garlic / Mustard Seeds",
      price: "$12.55",
    },
    {
      img: "/images/shrimp.jpg",
      title: "Grilled Shrimp Scampi",
      desc: "Roast Beef / Bone Marrow / Black Garlic / Mustard Seeds",
      price: "$12.55",
    },
  ];

  return (
    <section className="bg-[#4B2A1A] py-16">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center">
        {/* Section Heading */}
        <p
          className="uppercase tracking-[0.2em] text-sm text-gray-300"
          data-aos="fade-up"
        >
          Recommendations
        </p>
        <h2
          className="text-3xl lg:text-5xl font-semibold text-white mt-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Best Specialties
        </h2>

        {/* Grid Items */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay={index * 200} // staggered animation
            >
              {/* Dish Image */}
              <div className="flex justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-64 h-64 object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg text-white mt-6 font-medium">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 mt-2">{item.desc}</p>

              {/* Price */}
              <p className="mt-4 text-[#d4a373] font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
