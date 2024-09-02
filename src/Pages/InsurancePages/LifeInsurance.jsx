import React, { useContext } from "react";
import ApplyBtn from "../../components/Buttons/ApplyBtn";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CreatingContext from "../../context/ContexAPI";
import EducationLoanTitle from "../../components/Titles/EducationLoanTitle";

const LifeInsurance = () => {
  const { aspirationsSliderCarouselOptions } = useContext(CreatingContext);

  return (
    <div className="liftInsurance">
      <section className=" liftInsuranceSection_1 px-lg-0 px-md-0 px-4 position-relative">
        <div
          data-aos="flip-right"
          className="position-absolute textContainer p-2"
        >
          <h1 className="fs-68 fs-sm-55 fs-xs-45 font-play-bold text-white">
            Life Insurance
          </h1>
          <p className="fs-18 font-inter text-white mt-4  w-75">
            Lorem ipsum is a placeholder text commonly used in the design and
            typesetting industry. It consists of parts of Latin words with no
            specific meaning.
          </p>

          <div className="getInsurance bg-white mt-5 rounded-4 py-5 px-4">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="termLife w-100 m-1 d-flex gap-4 align-items-center bg-dark-blue px-3 py-4 justify-content-start rounded-4">
                    <img
                      className="img-fluid"
                      width={23}
                      src="/Term Life.png"
                      alt=""
                    />
                    <h2 className="fw-semibold fs-18 text-white font-inter">
                      Term Life
                    </h2>
                  </div>
                </div>
                <div className="col-6">
                  <div className="termLife  w-100 m-1 d-flex gap-4 align-items-center bg-dark-blue px-3 py-4 justify-content-start rounded-4">
                    <img
                      width={23}
                      className="img-fluid"
                      src="/Whole Life.png"
                      alt=""
                    />
                    <h2 className="fw-semibold fs-18 text-white font-inter">
                      Whole Life
                    </h2>
                  </div>
                </div>
                <div className="col-6">
                  <div className="termLife  w-100 m-1 d-flex gap-4 align-items-center bg-dark-blue px-3 py-4 justify-content-start rounded-4">
                    <img
                      width={23}
                      className="img-fluid"
                      src="/Saving.png"
                      alt=""
                    />
                    <h2 className="fw-semibold fs-18 text-white font-inter">
                      Saving
                    </h2>
                  </div>
                </div>
                <div className="col-6">
                  <div className="termLife  w-100 m-1 d-flex gap-4 justify-content-start align-items-center bg-dark-blue px-3 py-4 rounded-4">
                    <img
                      width={23}
                      className="img-fluid"
                      src="/Pension.png"
                      alt=""
                    />
                    <h2 className="fw-semibold fs-18 text-white font-inter">
                      Pension
                    </h2>
                  </div>
                </div>
              </div>

              <input
                className="font-inter w-100 mt-4 p-3 fs-18 fw-medium rounded-4"
                type="number"
                placeholder="+91  |  Phone Number"
              />

              <div className="row mt-5">
                <div className="col-6">
                  <ApplyBtn
                    textColor={"text-dark-blue"}
                    bgColor="bg-light-blue"
                    text={"Renew"}
                    arrow={false}
                    arrowDark={false}
                    width="w-100"
                  />
                </div>
                <div className="col-6">
                  <ApplyBtn
                    textColor={"text-white"}
                    bgColor="bg-dark-blue"
                    text={"Get Plan"}
                    arrow={false}
                    arrowDark={false}
                    width="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" liftInsuranceSection_2 px-lg-0 px-md-0 px-4 bg-dark-blue w-100 position-relative">
        <div className="container py-5">
          <div className="aspirationsSlider ">
            <OwlCarousel
              className="owl-carousel owl-theme"
              {...aspirationsSliderCarouselOptions}
            >
              <div className="item">
                <div className="d-flex align-items-start gap-4 aspirationsCard">
                  <div className="d-flex flex-column gap-1 ">
                    <h2 className="text-white fs-24 fw-bold font-inter">
                      Aspirations
                    </h2>
                    <p className="color-light-blue fs-20 fw-bold font-inter">
                      Achieved
                    </p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="d-flex align-items-start gap-4 aspirationsCard">
                  <img
                    className="img-fluid"
                    src="/Students Enrolled.png"
                    alt=""
                  />
                  <div className="d-flex flex-column gap-1 ">
                    <h2 className="color-light-blue fs-18 fw-bold font-inter">
                      34,000+
                    </h2>
                    <p className="text-white fs-20 fw-medium font-inter">
                      Students Enrolled
                    </p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="d-flex align-items-start gap-4 aspirationsCard">
                  <img
                    className="img-fluid"
                    src="/Colleges Listed.png"
                    alt=""
                  />
                  <div className="d-flex flex-column gap-1 ">
                    <h2 className="color-light-blue fs-18 fw-bold font-inter">
                      22,000+
                    </h2>
                    <p className="text-white fs-20 fw-medium font-inter">
                      Colleges Listed
                    </p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="d-flex align-items-start gap-4 aspirationsCard">
                  <img
                    className="img-fluid"
                    src="/Education Loans Provided.png"
                    alt=""
                  />
                  <div className="d-flex flex-column gap-1 ">
                    <h2 className="color-light-blue fs-18 fw-bold font-inter">
                      18,000+
                    </h2>
                    <p className="text-white fs-20 fw-medium font-inter">
                      Education Loans Provided
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>

      <section className=" lifeInsuranceSection_3 px-lg-0 px-md-0 px-4 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 col-12" data-aos="flip-left">
              <EducationLoanTitle
                title={"What is Life Insurance?"}
                color="black"
                fontSize="fs-40"
                ratings={false}
                pera="Lorem ipsum is a placeholder text commonly used in the design and typesetting industry. 
It consists of parts of Latin words with no specific meaning and is used as temporary filler content when the actual text is not available or finalized."
                pera2={
                  "Lorem ipsum is a placeholder text commonly used in the design and typesetting industry. It consists of parts of Latin words with no specific meaning "
                }
              />
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div
                data-aos="flip-right"
                className="d-flex justify-content-center align-items-end"
              >
                <img src="/Life Insurance2.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" lifeInsuranceSection_4 py-1 px-lg-0 px-md-0 px-4 bg-dark-blue">
        <EducationLoanTitle
          title={"Types of Life Insurance Plans"}
          color="white"
          fontSize="fs-40"
          ratings={false}
          pera="Life insurance plans are characterized by the fact that they pay a benefit on death of the insured. The most popular plans have a fixed period of time for which the policy is in force, and death benefit will be paid."
          pera2={" "}
        />

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card rounded-5 " data-aos="flip-left">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Term Life insurance plan
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Term Insurance is the simplest form of life insurance that
                      only offers financial cover for a specific number of
                      years.
                    </p>
                  </div>
                  <a href="#" className="card-link fw-bold fs-18 font-inter">
                    Learn More &#x2B9E;
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card rounded-5 " data-aos="flip-right">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Whole Life insurance plans
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Provides coverage for the entire lifetime of the
                      policyholder.
                    </p>
                  </div>
                  <a href="#" className="card-link fw-bold fs-18 font-inter">
                    Learn More &#x2B9E;
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card rounded-5 " data-aos="flip-left">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="">
                    <h5 className="card-title fs-20 font-inter fw-semibold">
                      Pension plans
                    </h5>

                    <p className="card-text fs-18 font-inter mt-4">
                      Designed to provide financial security during retirement
                      by offering a regular income.
                    </p>
                  </div>
                  <a href="#" className="card-link fw-bold fs-18 font-inter">
                    Learn More &#x2B9E;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" lifeInsuranceSection_4 py-1 px-lg-0 px-md-0 px-4 ">
        <EducationLoanTitle
          title={"Why Do I Need Life Insurance?"}
          color="black"
          fontSize="fs-36"
          ratings={false}
          pera="Lorem ipsum is a placeholder text commonly used in the design and typesetting industry. It consists of parts of Latin words with no specific meaning and is used as temporary filler content when the actual text is not available or finalized."
          pera2={" "}
        />
      </section>
    </div>
  );
};

export default LifeInsurance;
