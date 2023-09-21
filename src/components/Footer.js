import "./FooterStyles.css";

import React from "react";

import {
  FaHome,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="location">
            <FaHome size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>
                No. 4, 1st floor, Alley 18, Lane 711, Dingzhong Road, Sanmin
                District, Kaohsiung City, Taiwan 80792
              </p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +886 9 1138 5962
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              saiphanas.k@gmail.com
            </h4>
          </div>
        </div>

        <div className="footer-right">
          <h4>
            <b>About</b>
          </h4>

          <div className="social">
            <a
              href="https://linkedin.com/in/kamolwan-s-84159b201"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://github.com/gxysai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
