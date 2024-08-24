import React from "react";
import Button from "../components/Buttons/Button";
import Title from "../components/Titles/Title";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import options from "../components/Carousel/carouselOptions";

const BecomeOurPartner = () => {
  return (
    <div className="BecomeOurPartner">
      <section className="container-fluid mt-15 BecomeOurPartner_section_1">
        <div className="row align-items-center justify-content-xl-around justify-content-lg-center  justify-content-md-center justify-content-center">
          <div className="col-xl-7 col-lg-6 col-md-6 col-12">
            <img src="./MERCHANTHeroImg.png" className="img-fluid" />
          </div>

          <div className="col-xl-5  col-lg-6 col-md-6 col-12 p-8 p-5-mv">
            <h1 className="title-font fw-semibold fs-40">
              Join Samriddh: Sell, earn, and live your dreams!
            </h1>
            <p className="fs-20 mt-5 mb-5 text-light-gray ">
              Start your business with zero Investment with Samriddh and sell
              financial product to earn up to Rs 1.5 lac per months
            </p>

            <div className="btn-container mt-7">
              <Button content={"Download application"} />
            </div>
          </div>
        </div>
      </section>

      <section className="BecomeOurPartner_section_2">
        <Title
          first_text={"Who can become "}
          span_text={"Samriddh Sathi ?"}
          last_text={""}
        />
        <div className="container">
          <div className="row justify-content-lg-center justify-content-md-center justify-content-start flex-lg-wrap flex-md-wrap flex-sm-nowrap flex-nowrap justify-content-start agent-card-slider gap-4">
            <div className="agent-card d-flex justify-content-between  align-items-center flex-column bg-light-gray text-center">
              <div className="img-container">
                <img className="img-fluid" src="Loan Agents.png" alt="" />
              </div>
              <p className="font-inter fs-24 fw-semibold ">Loan Agents</p>
            </div>
            <div className="agent-card d-flex justify-content-between  align-items-center flex-column bg-light-gray text-center">
              <div className="img-container">
                <img
                  className="img-fluid"
                  src="Former bank employees.png"
                  alt=""
                />
              </div>
              <p className="font-inter fs-24 fw-semibold ">
                Former bank employees
              </p>
            </div>
            <div className="agent-card d-flex justify-content-between  align-items-center flex-column bg-light-gray text-center">
              <div className="img-container">
                <img className="img-fluid" src="Insurance agents.png" alt="" />
              </div>
              <p className="font-inter fs-24 fw-semibold ">Insurance agents</p>
            </div>

            <div className="agent-card d-flex justify-content-between  align-items-center flex-column bg-light-gray text-center">
              <div className="img-container">
                <img className="img-fluid" src="Wealth Advisors.png" alt="" />
              </div>
              <p className="font-inter fs-24 fw-semibold ">Wealth Advisors</p>
            </div>
            <div className="agent-card d-flex justify-content-between  align-items-center flex-column bg-light-gray text-center">
              <div className="img-container">
                <img
                  className="img-fluid"
                  src="BFSI Professionals.png"
                  alt=""
                />
              </div>
              <p className="font-inter fs-24 fw-semibold ">
                BFSI Professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="BecomeOurPartner_section_3">
        <Title
          first_text={"4 easy steps to"}
          span_text={"start Earning"}
          last_text={""}
        />

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-12 order-lg-first order-md-last order-last">
              <div
                className={`startEarning text-white d-lg-flex d-md-flex d-sm-flex d-none justify-content-center align-items-lg-start align-items-md-center align-items-center flex-column gap-4 `}
              >
                <div className={`startEarningCard  step1`}>
                  <h2 className={`font-inter fs-1 fw-semibold `}>Sign up</h2>
                  <p className="font-inter fs-4 fw-medium">
                    Click on Signup Button and create an account
                  </p>
                  <p className="steps fw-semibold font-zilla">1</p>
                </div>
                <div className={`startEarningCard step2`}>
                  <h2 className={`font-inter fs-1 fw-semibold `}>
                    Complete KYC{" "}
                  </h2>
                  <p className="font-inter fs-4 fw-medium">
                    Complete your pan and Aadhar verification
                  </p>
                  <p className="steps fw-semibold font-zilla">2</p>
                </div>
                <div className={`startEarningCard step3`}>
                  <h2 className={`font-inter fs-1 fw-semibold `}>
                    Complete Your product training{" "}
                  </h2>
                  <p className="font-inter fs-4 fw-medium">
                    Complete your pan and Aadhar verification
                  </p>
                  <p className="steps fw-semibold font-zilla">3</p>
                </div>
                <div className={`startEarningCard step4`}>
                  <h2 className={`font-inter fs-1 fw-semibold `}>
                    Start selling & earning
                  </h2>
                  <p className="font-inter fs-4 fw-medium">
                    Get payout on lead conversion
                  </p>
                  <p className="steps fw-semibold font-zilla">4</p>
                </div>
              </div>
            </div>
            <div
              className={` d-lg-none d-md-none d-sm-none d-flex order-last position-relative bg-dark-blue`}
            >
              <OwlCarousel className="owl-carousel owl-theme" {...options}>
                <div className="item">
                  <div className={`startEarningCard text-center  step1`}>
                    <h2 className={`font-inter fs-1 fw-semibold `}>Sign up</h2>
                    <p className="font-inter fs-4 fw-medium">
                      Click on Signup Button and create an account
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className={`startEarningCard text-center step2`}>
                    <h2 className={`font-inter fs-1 fw-semibold `}>
                      Complete KYC{" "}
                    </h2>
                    <p className="font-inter fs-4 fw-medium">
                      Complete your pan and Aadhar verification
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className={`startEarningCard text-center step3`}>
                    <h2 className={`font-inter fs-1 fw-semibold `}>
                      Complete Your product training{" "}
                    </h2>
                    <p className="font-inter fs-4 fw-medium">
                      Complete your pan and Aadhar verification
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className={`startEarningCard text-center step4`}>
                    <h2 className={`font-inter fs-1 fw-semibold `}>
                      Start selling & earning
                    </h2>
                    <p className="font-inter fs-4 fw-medium">
                      Get payout on lead conversion
                    </p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
            <div className="col-lg-7  col-md-12 col-12 order-lg-last order-md-first order-first">
              <div className="image-container text-center mt-lg-0 mt-md-5 mt-5  p-5">
                <img className="img-fluid" src="./start Earning.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeOurPartner;
