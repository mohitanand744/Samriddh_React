import React from "react";
import style from "../css/AboutUs.module.css";
import "../css/css-responsive.css";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className={`${style.section_1} mb-55`}>
        <div className="image-container text-center">
          <img
            className="img-fluid about-hero-img"
            src="./aboutUsImg1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
