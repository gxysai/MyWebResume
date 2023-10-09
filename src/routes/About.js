import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="Some of my most recent works" />
      <Footer />
    </div>
  );
};

export default About;
