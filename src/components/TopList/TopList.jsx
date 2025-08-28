// import React from "react";
// import Image1 from "../../assets/3.png";
// import Image2 from "../../assets/4.png";
// import Image3 from "../../assets/5.png";

// const FoodData = [
//   {
//     image: Image1,
//     rating: "⭐⭐⭐⭐⭐",
//     price: "$10.99",
//     name: "Food Name 1",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     image: Image2,
//     rating: "⭐⭐⭐⭐⭐",
//     price: "$10.99",
//     name: "Food Name 2",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     image: Image3,
//     rating: "⭐⭐⭐⭐⭐",
//     price: "$10.99",
//     name: "Food Name 3",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
// ];

// const TopList = () => {
//   return (
//     <div className="container py-14">
//       {/* header section */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-semibold">Top List</h1>
//         <p>Our top list</p>
//       </div>
//       {/* card section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
//         {FoodData.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white/50 p-5 lg:p-6 rounded-3xl hover:scale-110 transition duration-300 "
//           >
//             <img
//               src={item.image}
//               alt=""
//               className="w-60 sm:w-40  lg:w-[240px] mx-auto object-cover rounded-full img-shadow"
//             />
//             <div className="space-y-2">
//               <p className="text-red-500">{item.rating}</p>
//               <p className="text-lg font-semibold ">{item.name}</p>
//               <p>{item.desc}</p>
//               <p className="text-lg font-semibold">{item.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopList;

import React, { useState } from "react";
import { IoStar } from "react-icons/io5";

const menuItems = [
  {
    id: 1,
    name: "Jollof Rice",
    description:
      "Traditional West African rice dish with aromatic spices, tomatoes, and your choice of chicken or beef",
    price: "£12.99",
    category: "Main Dishes",
    image: "menu/jellof.png",
    spicy: true,
    popular: true,
  },
  {
    id: 2,
    name: "Suya Skewers",
    description:
      "Grilled meat skewers marinated in traditional Nigerian spice blend, served with fresh vegetables",
    price: "£8.99",
    category: "Appetizers",
    image: "/menu/taba.jpeg",
    spicy: true,
  },
  {
    id: 3,
    name: "Injera with Doro Wat",
    description:
      "Ethiopian sourdough flatbread served with spicy chicken stew and hard-boiled eggs",
    price: "£14.99",
    category: "Main Dishes",
    image: "/menu/chicken.jpeg",
    spicy: true,
    popular: true,
  },
];

// const categories = ["All", "Appetizers", "Main Dishes", "Sides", "Desserts"];

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3
            className="text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Top List
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A blend of cultures and tastes from across Africa, bringing together
            the best and most authentic flavors with chefs from all backgrounds.
          </p>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-1">
                  {item.popular && (
                    <span className="flex items-center bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-semibold">
                      <IoStar className="mr-1 h-3 w-3" /> Popular
                    </span>
                  )}
                  {item.spicy && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      🌶️ Spicy
                    </span>
                  )}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4
                    className="text-lg font-semibold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.name}
                  </h4>
                  <span className="text-lg font-bold text-primary">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
