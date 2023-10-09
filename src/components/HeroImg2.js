import "./HeroImg2Styles.css";
import React, { Component } from "react";
// import IntroImg from "../assets/introbg.jpg";
class HeroImg2 extends Component {
  render() {
    return (
      <div className="hero-img">
        {/* <div className="mask">
          <img className="intro-img" src={IntroImg} alt="intro-bg" />
        </div> */}
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImg2;
