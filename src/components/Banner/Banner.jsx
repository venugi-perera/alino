import React from "react";
import BannerImg from "../../assets/2.png";

const Banner = () => {
  return (
    <>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* img section */}
          <div className="flex justify-center items-center">
            <img src={BannerImg} alt="Delicious food on table" />
          </div>
          {/* text section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-semibold">Food Is Always Good</h1>
            <p className="py-4 font-semibold text-gray-700">
              At our restaurant, every dish is crafted with fresh ingredients,
              bold flavors, and a touch of love. From classic favorites to
              unique specialties, we believe great food brings people together.
              Sit back, relax, and enjoy a meal that’s made to delight your
              taste buds.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
