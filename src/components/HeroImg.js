import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../assets/introbg.jpg";

import { Link } from "react-router-dom";

function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>
          Hello! Im Goy A Software Developer with Fundamental Business Knowledge
          and Theatre Management background.
        </p>
        <h2>Fullstack Developer</h2>
        <div>
          <Link to="/project" className="btn">
            PROJECT
          </Link>
          <Link to="/contact" className="btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
