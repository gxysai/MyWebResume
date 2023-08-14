import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { TbBrandJavascript, TbBrandReactNative } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiGitBranch } from "react-icons/bi";

function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <h2>Hello! Im Goy,</h2>
        <p>
          A Full-stack Software Developer with Fundamental Business Knowledge
          and Theatre Management background.
        </p>
        <div className="tech">
          <h3>
            <FaHtml5 size={65} style={{ color: "#fff", marginRight: "2rem" }} />
            <TbBrandJavascript
              size={70}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <TbBrandReactNative
              size={70}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaNodeJs
              size={70}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <SiMongodb
              size={70}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <BiLogoPostgresql
              size={70}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <BiGitBranch
              size={70}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </h3>
        </div>
        <div className="buttons">
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
