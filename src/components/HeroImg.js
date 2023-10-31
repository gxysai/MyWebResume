import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/introbg.jpg";
import { Link } from "react-router-dom";
import { FaHtml5, FaNode } from "react-icons/fa";
import { TbBrandJavascript, TbBrandReactNative } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiGitBranch } from "react-icons/bi";
import { TbBrandSupabase } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";

function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="intro-bg" />
      </div>
      <div className="content">
        <h2>Hello! Im Goy,</h2>
        <p>
          A Full-stack Software Developer with Fundamental Business Knowledge
          and Theatre Management background.
        </p>
        <div className="tech">
          <h3>
            <FaHtml5 size={50} style={{ color: "#fff", marginRight: "1rem" }} />
            <TbBrandJavascript
              size={50}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <TbBrandReactNative
              size={50}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaNode size={50} style={{ color: "#fff", marginRight: "1rem" }} />
            <SiMongodb
              size={50}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <BiLogoPostgresql
              size={50}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <TbBrandSupabase
              size={50}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <BiGitBranch
              size={45}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <SiPostman
              size={40}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <SiJsonwebtokens
              size={40}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </h3>
        </div>
        <div className="buttons">
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          {/* <Link to="/contact" className="btn-light">
            DOWNLOAD Resume
          </Link> */}
          <a
            href="https://docs.google.com/document/d/1GxKBEgJEpk7-CRu-KSE7DAFjvrm3SnX8qaKTaQBYuT4/edit?usp=sharing"
            download
            className="btn-light"
          >
            DOWNLOAD Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
