import React, { useContext } from "react";
import Button from "../components/Buttons/Button";
import Title from "../components/Titles/Title";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CreatingContext from "../context/ContexAPI";

const BecomeOurPartner = () => {
  const { carouselOptions, productsCarouselOptions, faqData } =
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
              <div className="col-lg-2 col-md-2 col-sm-3 col-4 px-5">
                <p className="fs-36 fw-medium text-white title-font text-lg-center text-md-center text-sm-start text-start mt-12">
                  Insaurance
                </p>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-9 col-8">
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

      <section className="BecomeOurPartner_section_6">
        <header className="container mb-5">
          <Title
            first_text="What our"
            span_text="Partners"
            last_text="say about us?"
          />
        </header>

        <div className="partners-Customers py-5 container-fluid">
          <div className="container py-5 position-relative positions1">
            <div className="d-flex justify-content-xl-start justify-content-lg-between align-items-center flex-lg-row flex-md-column flex-column justify-content-md-center">
              <div
                className="
              ratings-container col-xl-4 col-lg-4 col-md-12 col-12  mb-md-5 mb-5 d-flex justify-content-xl-center justify-content-lg-center justify-content-md-start justify-content-start order-lg-last order-md-first order-first
               "
              >
                <div className="  rating-card">
                  <div className="img-container">
                    <img className="img-fluid" src="ratings.webp" alt="" />
                  </div>
                  <div className="d-flex flex-column align-items-lg-center align-items-md-start align-items-start">
                    <p className="fs-lg-3 fs-md-2 fs-1 text-white font-poppins mt-4">
                      Our Partners
                    </p>

                    <div className=" ratings mb-7">
                      <span className="text-war fs-lg-3 fs-md-2 fs-1 mx-1">
                        5.0
                      </span>{" "}
                      <img
                        className="d-md-block  d-none"
                        src="./star.png"
                        alt="rating"
                      />
                      <img
                        className="d-md-block  d-none"
                        src="./star.png"
                        alt="rating"
                      />
                      <img
                        className="d-md-block  d-none"
                        src="./star.png"
                        alt="rating"
                      />
                      <img
                        className="d-md-block  d-none"
                        src="./star.png"
                        alt="rating"
                      />
                      <img
                        className="d-md-block  d-none"
                        src="./star.png"
                        alt="rating"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" reviews-container col-xl-8 col-lg-8 col-md-12 col-12 order-md-last order-last">
                <div className="reviews">
                  <OwlCarousel
                    className="owl-carousel owl-theme"
                    {...carouselOptions}
                  >
                    <div className=" item">
                      <div className="bg-white review-card rounded-top-6 d-flex flex-column justify-content-between">
                        <div className="text">
                          <h2 className="title-font text-dark fs-1 fw-bold">
                            Top notch team, top notch product
                          </h2>
                          <p className="font-inter fs-lg-4 fs-md-3 fs-sm-2 fs-7 text-gray mt-5">
                            Metaforms has been a gamechanger in our journey of
                            optimising our user funnels. The level of attention
                            to detail the team brings with pro-activeness in
                            understanding the nuances of business is exemplary. 
                          </p>
                        </div>
                        <div className="profile-footer d-flex align-items-center">
                          <img
                            className="img-fluid avatar mr-4"
                            src="./avtar.png"
                            alt=""
                          />
                          <div className="d-flex flex-column gap-2">
                            <p className="fs-2 font-poppins fw-semibold ">
                              Apoorva
                            </p>
                            <p className="fs-4 font-poppins">Porter</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="  item">
                      <div className="bg-white review-card rounded-4">
                        <div className="top-container">
                          <div className="img">
                            <img src="./empty-img.webp" alt="" />
                          </div>
                          <h2 className="title-font fs-1 text-dark fw-bold mx-4">
                            All necessary integrations were available.
                          </h2>
                        </div>
                        <div className="profile-footer d-flex align-items-center">
                          <img
                            className="img-fluid avatar mr-4"
                            src="./avtar.png"
                            alt=""
                          />
                          <div className="d-flex flex-column gap-2">
                            <p className="fs-2 font-poppins fw-semibold ">
                              Apoorva
                            </p>
                            <p className="fs-4 font-poppins">Porter</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" item">
                      <div className="bg-white review-card rounded-top-6 d-flex flex-column justify-content-between">
                        <div className="text">
                          <h2 className="title-font text-dark fs-1 fw-bold">
                            Top notch team, top notch product
                          </h2>
                          <p className="font-inter fs-lg-4 fs-md-3 fs-sm-2 fs-7  text-gray mt-5">
                            Metaforms has been a gamechanger in our journey of
                            optimising our user funnels. The level of attention
                            to detail the team brings with pro-activeness in
                            understanding the nuances of business is exemplary. 
                          </p>
                        </div>
                        <div className="profile-footer d-flex align-items-center">
                          <img
                            className="img-fluid avatar mr-4"
                            src="./avtar.png"
                            alt=""
                          />
                          <div className="d-flex flex-column gap-2">
                            <p className="fs-2 font-poppins fw-semibold ">
                              Apoorva
                            </p>
                            <p className="fs-4 font-poppins">Porter</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="  item">
                      <div className="bg-white review-card rounded-4">
                        <div className="top-container">
                          <div className="img">
                            <img src="./empty-img.webp" alt="" />
                          </div>
                          <h2 className="title-font fs-1 text-dark fw-bold mx-4">
                            All necessary integrations were available.
                          </h2>
                        </div>
                        <div className="profile-footer d-flex align-items-center">
                          <img
                            className="img-fluid avatar mr-4"
                            src="./avtar.png"
                            alt=""
                          />
                          <div className="d-flex flex-column gap-2">
                            <p className="fs-2 font-poppins fw-semibold ">
                              Apoorva
                            </p>
                            <p className="fs-4 font-poppins">Porter</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="BecomeOurPartner_section_7">
        <Title
          first_text="Frequently Asked "
          span_text="Questions"
          last_text=""
        />

        <div className="container">
          <div className="d-flex align-content-center mx-lg-0 mx-md-0 mx-4">
            <div className="inputContainer flex-grow-1 position-relative">
              <input
                type="text"
                placeholder="Describe your issue"
                className="w-100 h-100 border-none fs-24 font-inter outline-none bg-medium-gray rounded-4 px-11 fw-medium"
              />
              <img
                className="img-fluid position-absolute"
                width={38}
                src="./search.png"
                alt=""
              />
            </div>
            <button className="btn bg-dark-blue px-6 font-inter fs-24 text-white rounded-4">
              Search
            </button>
          </div>

          <div className="faqContainer position-relative row mt-5">
            <div className="col-xl-7 col-lg-6 col-md-12 col-12">
              <div className="accordion" id="accordionExample">
                {faqData.map((data, index) => {
                  return (
                    <div key={index} className="accordion-item mt-3 rounded-4">
                      <h2 class="accordion-header ">
                        <button
                          class={`accordion-button ${
                            index === 0 ? "" : "collapsed"
                          } fs-20 font-inter rounded-4 px-7 py-4`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${data.questionNum}`}
                          aria-expanded="false"
                          aria-controls={data.questionNum}
                        >
                          {data.question}
                        </button>
                      </h2>

                      <div
                        id={data.questionNum}
                        class={`accordion-collapse ${
                          index === 0 ? "collapse show" : "collapse"
                        }  answerContainer`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body fs-20 font-inter p-5">
                          <h2 className="fs-26 fw-semibold my-4">Answer</h2>
                          {data.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-12 col-12"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeOurPartner;
