import React from "react";
import style from "../css/AboutUs.module.css";
import "../css/css-responsive.css";
import Title from "./../components/Titles/Title";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className={`${style.section_1}`}>
        <div className="image-container text-center">
          <img
            className="img-fluid about-hero-img"
            src="./aboutUsImg1.png"
            alt=""
          />
        </div>
      </div>

      <div className={`${style.section_2} container`}>
        <Title
          first_text={"Why did we start"}
          span_text={"Samriddh Kendra"}
          last_text={"?"}
        />

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <div
              className={`${style.visionMissionPurposeContainer} d-flex justify-content-center align-items-lg-start align-items-md-center align-items-center flex-column gap-4`}
            >
              <div className={`${style.visionContainer}`}>
                <h2
                  className={`font-inter fs-1 fw-semibold ${style.commonTitle}`}
                >
                  VISION
                </h2>
                <p className="font-inter fs-4 fw-medium">
                  To be the most trusted and loved insurance and benefits
                  provider in the world
                </p>
              </div>
              <div className={`${style.visionContainer}`}>
                <h2
                  className={`font-inter fs-1 fw-semibold ${style.commonTitle}`}
                >
                  MISSION
                </h2>
                <p className="font-inter fs-4 fw-medium">
                  To ensure 10 million lives by 2025
                </p>
              </div>
              <div className={`${style.visionContainer}`}>
                <h2
                  className={`font-inter fs-1 fw-semibold ${style.commonTitle}`}
                >
                  PURPOSE
                </h2>
                <p className="font-inter fs-4 fw-medium">
                  To positively impact the health and financial wellbeing of
                  every human
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6  col-md-12 col-12">
            <div className="image-container text-center">
              <img className="img-fluid" src="./aboutUsImg2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
