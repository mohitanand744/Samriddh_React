import React, { useContext } from "react";
import Button from "../components/Buttons/Button";
import Title from "../components/Titles/Title";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CreatingContext from "../context/ContexAPI";

const BecomeOurPartner = () => {
  const { carouselOptions, productsCarouselOptions } =
    useContext(CreatingContext);
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
            <div className="col-lg-6 col-md-12 col-12 order-lg-first order-md-last order-last">
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
              <OwlCarousel
                className="owl-carousel owl-theme"
                {...carouselOptions}
              >
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
            <div className="col-lg-6  col-md-12 col-12 order-lg-last order-md-first order-first">
              <div className="image-container text-center mt-lg-0 mt-md-5 mt-5  p-5">
                <img className="img-fluid" src="./start Earning.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="BecomeOurPartner_section_4 ">
        <Title first_text={"Products we"} span_text={"Offer"} last_text={""} />

        <div className="container-fluid">
          <div className="productContainer">
            <div className="row">
              <div className="col-lg-10 col-md-10 col-sm-9 col-9">
                <OwlCarousel
                  className="owl-carousel owl-theme"
                  {...productsCarouselOptions}
                >
                  <div className="item">
                    <div className="productCard text-center">
                      <div className="img-container">
                        <img className="img-fluid" src="./EV LOAN.png" alt="" />
                      </div>
                      <p className="font-inter fs-18 fw-medium text-white">
                        EV LOAN
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="productCard text-center">
                      <div className="img-container">
                        <img
                          className="img-fluid"
                          src="./BUSINESS LOAN2.png"
                          alt=""
                        />
                      </div>
                      <p className="font-inter fs-18 fw-medium text-white">
                        BUSINESS LOAN
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="productCard text-center">
                      <div className="img-container">
                        <img
                          className="img-fluid"
                          src="./MICRO LOAN AGAINST PROPERTY.png"
                          alt=""
                        />
                      </div>
                      <p className="font-inter fs-18 fw-medium text-white">
                        MICRO LOAN AGAINST PROPERTY
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="productCard text-center">
                      <div className="img-container">
                        <img
                          className="img-fluid"
                          src="./LOAN AGAINST SECURITY.png"
                          alt=""
                        />
                      </div>
                      <p className="font-inter fs-18 fw-medium text-white">
                        LOAN AGAINST SECURITY
                      </p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-3 col-3">
                <p className="fs-36 fw-medium text-white title-font text-lg-center text-md-center text-sm-center text-start mt-12">
                  Loan
                </p>
              </div>
            </div>
          </div>
          <div className="productContainer mt-5">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-3 col-3 px-5">
                <p className="fs-36 fw-medium text-white title-font text-lg-center text-md-center text-sm-start text-start mt-12">
                  Insaurance
                </p>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-9 col-9">
                <OwlCarousel
                  className="owl-carousel owl-theme"
                  {...productsCarouselOptions}
                >
                  <div className="item">
                    <div className="productCard text-center">
                      <div className="img-container">
                        <img
                          className="img-fluid"
                          src="./Health insurance.png"
                          alt=""
                        />
                      </div>
                      <p className="font-inter fs-18 fw-medium text-white">
                        Health Insurance
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="productCard text-center">
                      <div className="img-container">
                        <img
                          className="img-fluid"
                          src="./Life Insurance.png"
                          alt=""
                        />
                      </div>
                      <p className="font-inter fs-18 fw-medium text-white">
                        Life Insurance
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="productCard text-center">
                      <div className="img-container">
                        <img
                          className="img-fluid"
                          src="./Shop insurance.png"
                          alt=""
                        />
                      </div>
                      <p className="font-inter fs-18 fw-medium text-white">
                        Shop Insurance
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="productCard text-center">
                      <div className="img-container">
                        <img
                          className="img-fluid"
                          src="./Motor insurance.png"
                          alt=""
                        />
                      </div>
                      <p className="font-inter fs-18 fw-medium text-white">
                        Motor Insurance
                      </p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeOurPartner;
