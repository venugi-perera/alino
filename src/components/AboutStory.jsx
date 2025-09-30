import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutStory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false,    // animation happens every time you scroll up/down
    });
  }, []);

  return (
    <section id="aboutstory" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            About <span className="text-primary">Our Story</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A Decade of Passion &amp; Flavor
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div data-aos="fade-right">
            <p className="text-gray-700 leading-relaxed mb-6">
              For over a decade, <span className="font-semibold">Alino African Restaurant</span> 
              has been Leicester's destination for authentic African cuisine. 
              Our story began with a unique blend of passions—Alino's love for 
              music and entertainment from his years traveling the country as a DJ, 
              and his wife's deep passion for the culinary arts.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Together, they created something extraordinary: a dining experience 
              that brings the rhythm and soul of Africa to every plate. We import our 
              ingredients directly from the motherland, ensuring the most authentic and 
              vibrant flavors in every dish.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our cuisine is a celebration—a blend of cultures and tastes from across Africa, 
              crafted by chefs from diverse backgrounds who share one vision: 
              to bring you the best and most authentic African dining experience.
            </p>
          </div>

          {/* Image / Illustration */}
          <div className="flex justify-center" data-aos="fade-left">
            <img
              src="/about-story.jpg" // replace with your image path
              alt="About Alino African Restaurant"
              className="rounded-xl shadow-lg object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
