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
              className={`visionMissionPurposeContainer d-lg-none d-md-none d-sm-none d-flex order-last position-relative`}
            >
              <OwlCarousel className="owl-carousel owl-theme" {...options}>
                <div className="item">
                  <div className={`visionContainer`}>
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
                  <div className={`visionContainer MISSION`}>
                    <h2 className={`font-inter fs-1 fw-semibold commonTitle`}>
                      MISSION
                    </h2>
                    <p className="font-inter fs-4 fw-medium">
                      To ensure 10 million lives by 2025
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className={`visionContainer PURPOSE`}>
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

      <div className="about_section_3 container-fluid">
        <Title first_text={""} span_text={"Our Story?"} last_text={""} />

        <div className="container">
          <div className="box-container mt-lg-0 mt-md-5 mt-7">
            <div className="box">
              <div className="title-content d-flex align-items-center justify-content-end me-6 gap-3">
                <img
                  className="img-fluid timelineIcon"
                  src="./timelineIcon.png"
                  alt=""
                />
                <p className="fs-3 font-inter fw-semibold">2018</p>
              </div>
              <p className="fw-bold font-inter fs-20 text-dark d-flex justify-content-end me-7">
                Founded{" "}
              </p>
            </div>
            <div className="box">
              <div className="title-content d-flex align-items-center gap-3">
                <img
                  className="img-fluid timelineIcon"
                  src="./Collaboration.png"
                  alt=""
                />
                <p className="fs-3 font-inter fw-semibold">2019-2022</p>
              </div>

              <p className="fw-bold font-inter fs-20 text-dark ms-10">
                Collaboration{" "}
              </p>
              <div className="txt-content">
                <ul className="fw-medium font-inter fs-18">
                  <li>
                    Worked with PhonePe, BharatPe, Amazon Pay, and Airtel on
                    merchant and customer acquisition in Bihar, Jharkhand, West
                    Bengal, Odisha, Uttar Pradesh, and NESA.
                  </li>
                  <li>On Boarded 21L merchants</li>
                  <li>Market Research: Started for financial inclusion</li>
                  <li>MVP Development: Began in October 2022</li>
                </ul>
              </div>
            </div>
            <div className="box">
              <div className="title-content d-flex align-items-center justify-content-end gap-3 me-6">
                <img
                  className="img-fluid timelineIcon"
                  src="./Establishment.png"
                  alt=""
                />
                <p className="fs-3 font-inter fw-semibold">2023</p>
              </div>
              <p className="fw-bold font-inter d-flex justify-content-end me-7 fs-20 text-dark ">
                Establishment{" "}
              </p>
              <div className="txt-content">
                <ul className="fw-medium font-inter  fs-18">
                  <li>Company Registration: Completed in April</li>
                  <li>MVP Launch: Rolled out in July - August </li>
                  <li>
                    Onboarding Samriddh Sathi: 1,600 onboarded across 400
                    pincodes
                  </li>
                  <li>
                    Customer Onboarding: 10,000 customers onboarded within 3
                    months
                  </li>
                  <li>
                    Pivoted to a DSA model to leverage the existing merchant
                    base
                  </li>
                  <li>Disbursed loan amounting to INR 5Cr (3 months)</li>
                </ul>
              </div>
            </div>
            <div className="box">
              <div className="title-content d-flex align-items-center flex-wrap gap-3">
                <img
                  className="img-fluid timelineIcon"
                  src="./Expansion.png"
                  alt=""
                />
                <p className="fs-3 font-inter fw-semibold">2024</p>
              </div>
              <p className="fw-bold font-inter fs-20 text-dark ms-6">
                Expansion{" "}
              </p>
              <div className="txt-content ">
                <ul className="fw-medium font-inter fs-18">
                  <li>
                    Worked with PhonePe, BharatPe, Amazon Pay, and Airtel on
                    merchant and customer acquisition in Bihar, Jharkhand, West
                    Bengal, Odisha, Uttar Pradesh, and NESA.
                  </li>
                  <li>On Boarded 21L merchants</li>
                  <li>Market Research: Started for financial inclusion</li>
                  <li>MVP Development: Began in October 2022</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_section_4">
        <div className="container">
          <Title first_text={"Our core values"} span_text={""} last_text={""} />
        </div>

        <div className="coreValue container-fluid">
          <div className="d-flex h-100 font-inter align-items-center justify-content-center p-5">
            <p className="fw-semibold fs-28 text-medium-gray">
              <span>S</span>ustainale <span>A</span>ccess to <span>M</span>arket
              and <span>R</span>ural <span>I</span>nitiatives for <span>D</span>
              riving <span>D</span>evelopment and <span>H</span>olistic growth
            </p>
          </div>
        </div>
      </div>

      <div className="about_section_5">
        <Title
          first_text={"The Team Behind Samriddh Kendra"}
          span_text={""}
          last_text={""}
        />
        <div className="container">
          <div className="row gap-5 justify-content-lg-center justify-content-md-center justify-content-start flex-lg-wrap flex-md-wrap flex-sm-nowrap flex-nowrap justify-content-start profiles-sliders">
            <div className="card text-center font-inter">
              <div className="profile-container ">
                <img
                  src="./Suman Saurav.png"
                  className="img-fluid profile"
                  alt="..."
                />
              </div>
              <div className="light-gray-bg mt-4">
                <div className="card-body">
                  <h5 className="card-title fs-26 fw-semibold text-dark-blue">
                    Suman Saurav
                  </h5>
                  <p className="text-light-blue fs-26">Founder and CEO</p>
                  <p className="card-text fs-18 text-light-gray">
                    Hello, Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="card text-center font-inter">
              <div className="profile-container ">
                <img
                  src="./Bipul Kumar.png"
                  className="img-fluid profile"
                  alt="..."
                />
              </div>
              <div className="light-gray-bg mt-4">
                <div className="card-body">
                  <h5 className="card-title fs-26 fw-semibold text-dark-blue">
                    Bipul Kumar
                  </h5>
                  <p className="text-light-blue fs-26">ounder and CE</p>
                  <p className="card-text fs-18 text-light-gray">
                    Hello, Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="card text-center font-inter">
              <div className="profile-container ">
                <img
                  src="./Rajesh Mishra.png"
                  className="img-fluid profile"
                  alt="..."
                />
              </div>
              <div className="light-gray-bg mt-4">
                <div className="card-body">
                  <h5 className="card-title fs-26 fw-semibold text-dark-blue">
                    Rajesh Mishra
                  </h5>
                  <p className="text-light-blue fs-26">
                    CBO- Distribution Head
                  </p>
                  <p className="card-text fs-18 text-light-gray">
                    Hello, Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="card text-center font-inter">
              <div className="profile-container ">
                <img
                  src="./Yashwardhan Parwal.png"
                  className="img-fluid profile"
                  alt="..."
                />
              </div>
              <div className="light-gray-bg mt-4">
                <div className="card-body">
                  <h5 className="card-title fs-26 fw-semibold text-dark-blue">
                    Yashwardhan Parwal
                  </h5>
                  <p className="text-light-blue fs-26">
                    Strategy and Product -head
                  </p>
                  <p className="card-text fs-18 text-light-gray">
                    Hello, Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="card text-center font-inter">
              <div className="profile-container ">
                <img
                  src="./Vishal Chopra.png"
                  className="img-fluid profile"
                  alt="..."
                />
              </div>
              <div className="light-gray-bg mt-4">
                <div className="card-body">
                  <h5 className="card-title fs-26 fw-semibold text-dark-blue">
                    Vishal Chopra
                  </h5>
                  <p className="text-light-blue fs-26">
                    Strategy and Product -head
                  </p>
                  <p className="card-text fs-18 text-light-gray">
                    Hello, Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_section_6">
        <Title
          first_text={"Want to create an Impact?"}
          span_text={"Join Samriddh Kendra for building a Samriddh Bharat"}
          last_text={""}
        />
        <h2 className="container text-danger fs-1 fw-bold">
          Working on this section...
        </h2>
      </div>
    </div>
  );
};

export default AboutUs;
