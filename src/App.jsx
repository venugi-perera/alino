import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopList from "./components/TopList/TopList";
import Banner from "./components/Banner/Banner";
import OurServices from "./components/OurServices/OurServices";
import AboutUs from "./components/AboutUs/AboutUs";
import MenuSection from "./components/MenuSection/MenuSection";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
// import MenuPage from "./pages/MenuPage"; // Your new Menu page
// import HomePage from "./pages/HomePage"; // Optional: wrap homepage sections in this

const bgStyle = {
  // backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const App = () => {
  return (
    <Router>
      <div style={bgStyle} className="overflow-x-hidden">
        <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
          <Navbar />

          <Routes>
            {/* Home page route */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AboutUs />
                  <TopList />
                  <Banner />
                  <OurServices />
                  <ContactUs />
                </>
              }
            />

            {/* Menu page route */}
            <Route path="/menu" element={<MenuSection />} />

            {/* About page route (optional) */}
            <Route path="/about" element={<AboutUs />} />

            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
