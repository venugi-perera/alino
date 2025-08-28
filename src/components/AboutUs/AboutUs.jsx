import React from "react";
import { IoMusicalNotes, IoHeart, IoRestaurant } from "react-icons/io5";

const AboutUs = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3
              className="text-3xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-start space-x-3">
                <IoMusicalNotes className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>
                  Alino began his journey in music, touring as a DJ and
                  spreading joy through vibrant rhythms and performances.
                </span>
              </p>
              <p className="flex items-start space-x-3">
                <IoHeart className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span>
                  His love for music seamlessly blended with his wife's culinary
                  expertise, creating a unique fusion of culture and flavor.
                </span>
              </p>
              <p className="flex items-start space-x-3">
                <IoRestaurant className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>
                  Together, they founded Alino Restaurant, bringing authentic
                  African dishes to the heart of the community.
                </span>
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/image.png"
              alt="Alino Restaurant Interior"
              className="rounded-lg shadow-lg w-full h-90 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
