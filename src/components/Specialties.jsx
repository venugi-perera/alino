import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Specialties = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animate on scroll down & up
    });
  }, []);

  const items = [
    {
      img: "/images/lobster.jpg",
      title: "Broiled Lobster Tails",
      desc: "Roast Beef / Bone Marrow / Black Garlic / Mustard Seeds",
      price: "£12.55",
    },
    {
      img: "/images/salmon.jpg",
      title: "Baked Salmon Fillets Dijon",
      desc: "Roast Beef / Bone Marrow / Black Garlic / Mustard Seeds",
      price: "£12.55",
    },
    {
      img: "/images/shrimp.jpg",
      title: "Grilled Shrimp Scampi",
      desc: "Roast Beef / Bone Marrow / Black Garlic / Mustard Seeds",
      price: "£12.55",
    },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }} // ✅ white base background
    >
      {/* ✅ Gradient overlay (same as previous sections) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#007A4D]/10 via-transparent to-[#FFB612]/10" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 text-center">
        {/* Section Heading */}
        <p
          className="uppercase tracking-[0.2em] text-sm"
          style={{ color: "#007A4D" }}
          data-aos="fade-up"
        >
          Recommendations
        </p>
        <h2
          className="text-3xl lg:text-5xl font-bold mt-2"
          style={{ color: "#000000", fontFamily: "var(--font-heading)" }}
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
              className="text-center group rounded-2xl p-6 bg-white shadow-lg
                         transition duration-500 ease-out
                         hover:-translate-y-3
                         hover:shadow-[0_0_30px_#007A4D]
                         active:shadow-[0_0_30px_#FFB612]"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              {/* Dish Image */}
              <div className="flex justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-64 h-64 object-cover rounded-full shadow-md
                             transition duration-500 ease-out
                             group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3
                className="mt-6 text-xl font-semibold"
                style={{ color: "#000000", fontFamily: "var(--font-heading)" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "#4B5563" }}
              >
                {item.desc}
              </p>

              {/* Price */}
              <p
                className="mt-4 text-lg font-bold"
                style={{ color: "#FFB612" }}
              >
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
