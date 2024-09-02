import React, { useContext } from "react";
import ApplyBtn from "../../components/Buttons/ApplyBtn";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CreatingContext from "../../context/ContexAPI";

const LifeInsurance = () => {
  const { aspirationsSliderCarouselOptions } = useContext(CreatingContext);

  return (
    <div className="liftInsurance">
      <section className="liftInsuranceSection_1 position-relative">
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

      <section className="liftInsuranceSection_2 px-lg-0 px-md-0 px-4 bg-dark-blue w-100 position-relative">
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
    </div>
  );
};

export default LifeInsurance;
