import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <HeroImg2 heading="CONTACT" text="Hire Me" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
