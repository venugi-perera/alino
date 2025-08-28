import React from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";
import { MdLocalDining } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";

const OurServices = () => {
  return (
    <div className="container py-12">
      {/* header section */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Our Services</h1>
        <p className="mt-2 text-gray-600">
          Experience the best dining with our premium services
        </p>
      </div>

      {/* icons section with cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-xl p-8 h-72 hover:shadow-2xl transition-shadow duration-300">
          <FaMobileScreen className="text-4xl text-red-600 mb-4" />
          <p className="text-xl font-semibold mb-2">Online Reservations</p>
          <span className="text-gray-500 text-sm">
            Book your table instantly through our app or website
          </span>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-xl p-8 h-72 hover:shadow-2xl transition-shadow duration-300">
          <MdRestaurantMenu className="text-4xl text-green-600 mb-4" />
          <p className="text-xl font-semibold mb-2">Gourmet Menu</p>
          <span className="text-gray-500 text-sm">
            Enjoy a wide range of delicious meals crafted by top chefs
          </span>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-xl p-8 h-72 hover:shadow-2xl transition-shadow duration-300">
          <MdLocalDining className="text-4xl text-yellow-600 mb-4" />
          <p className="text-xl font-semibold mb-2">Dine-In Experience</p>
          <span className="text-gray-500 text-sm">
            Relax in our cozy restaurant with a welcoming ambiance
          </span>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-xl p-8 h-72 hover:shadow-2xl transition-shadow duration-300">
          <CiDeliveryTruck className="text-4xl text-blue-600 mb-4" />
          <p className="text-xl font-semibold mb-2">Home Delivery</p>
          <span className="text-gray-500 text-sm">
            Get your favorite meals delivered fast and fresh to your door
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
