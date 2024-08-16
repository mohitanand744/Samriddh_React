import React from "react";
import Title from "./../components/Titles/Title";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  margin: 30,
  items: 1,
  loop: true,
  nav: true,
  dots: false,
  autoplay: true,
  navText: [
    '<img src="./Arrow left.png" alt="" />',
    '<img src="./Arrow right.png" alt="" />',
  ],
};

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className={`about_section_1`}>
        <div className="image-container text-center">
          <img
            className="img-fluid about-hero-img"
            src="./aboutUsImg1.png"
            alt=""
          />
        </div>
      </div>

      <div className={`about_section_2 container `}>
        <Title
          first_text={"Why did we start"}
          span_text={"Samriddh Kendra"}
          last_text={"?"}
        />

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <div
              className={`visionMissionPurposeContainer d-lg-flex d-md-flex d-sm-flex d-none justify-content-center align-items-lg-start align-items-md-center align-items-center flex-column gap-4 position-relative`}
            >
              <div className={`visionContainer`}>
                <h2 className={`font-inter fs-1 fw-semibold commonTitle`}>
                  VISION
                </h2>
                <p className="font-inter fs-4 fw-medium">
                  To be the most trusted and loved insurance and benefits
                  provider in the world
                </p>
              </div>
              <div className={`visionContainer`}>
                <h2 className={`font-inter fs-1 fw-semibold commonTitle`}>
                  MISSION
                </h2>
                <p className="font-inter fs-4 fw-medium">
                  To ensure 10 million lives by 2025
                </p>
              </div>
              <div className={`visionContainer`}>
                <h2 className={`font-inter fs-1 fw-semibold commonTitle`}>
                  PURPOSE
                </h2>
                <p className="font-inter fs-4 fw-medium">
                  To positively impact the health and financial wellbeing of
                  every human
                </p>
              </div>
            </div>
            <div
              className={`visionMissionPurposeContainer d-lg-none d-md-none d-sm-none d-flex order-last `}
            >
              <OwlCarousel className="owl-carousel owl-theme" {...options}>
                <div className="item ">
                  <div className={`visionContainer position-relative`}>
                    <h2 className={`font-inter fs-1 fw-semibold commonTitle`}>
                      VISION
                    </h2>
                    <p className="font-inter fs-4 fw-medium">
                      To be the most trusted and loved insurance and benefits
                      provider in the world
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className={`visionContainer `}>
                    <h2 className={`font-inter fs-1 fw-semibold commonTitle`}>
                      MISSION
                    </h2>
                    <p className="font-inter fs-4 fw-medium">
                      To ensure 10 million lives by 2025
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className={`visionContainer `}>
                    <h2 className={`font-inter fs-1 fw-semibold commonTitle`}>
                      PURPOSE
                    </h2>
                    <p className="font-inter fs-4 fw-medium">
                      To positively impact the health and financial wellbeing of
                      every human
                    </p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="col-lg-6  col-md-12 col-12">
            <div className="image-container text-center mt-lg-0 mt-md-5 order-first">
              <img className="img-fluid" src="./aboutUsImg2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
