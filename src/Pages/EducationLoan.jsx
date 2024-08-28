import React, { useContext } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CreatingContext from "../context/ContexAPI";
import EducationLoanTitle from "../components/Titles/EducationLoanTitle";

const EducationLoan = () => {
  const { loanType, handleLoanChange, aspirationsSliderCarouselOptions } =
    useContext(CreatingContext);

  return (
    <div className="EducationLoan mt-7">
      <section className="EducationLoanSection_1 position-relative">
        <div className="position-absolute textContainer">
          <h1 className="fs-68 fs-sm-55 fs-xs-45 font-play-bold text-white">
            Student Education Loan
          </h1>
          <div className="loan-application mt-5 bg-white rounded-4 py-4 px-5 d-flex flex-column align-items-start">
            <div className="d-flex gap-3 mb-5 mt-3">
              <label className="loan-label fs-18 font-inter me-3 mt-3">
                I am applying for
              </label>
              <select
                value={loanType}
                onChange={handleLoanChange}
                className="loan-dropdown fs-18 fw-bold font-inter border-none "
              >
                <option value="Undergraduate Loan">Undergraduate Loan</option>
                <option value="Graduate Loan">Graduate Loan</option>
                <option value="Coaching Institute Loans">
                  Coaching Institute Loans
                </option>
                <option value="Parent Loans">Parent Loans</option>
                <option value="MBA Loans ">MBA Loans </option>
                <option value="Dental Loan">Dental Loan</option>
              </select>
            </div>
            <button className="apply-button rounded-4 fs-18 fw-semibold py-2 px-4 font-inter text-white bg-dark-blue">
              <span className="me-2">Apply Now</span> &gt;
            </button>
          </div>
        </div>
      </section>

      <section className="EducationLoanSection_2 bg-dark-blue w-100 position-relative">
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
                    src="./Students Enrolled.png"
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
                    src="./Colleges Listed.png"
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
                    src="./Education Loans Provided.png"
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

      <section className="EducationLoanSection_3">
        <EducationLoanTitle
          color="black"
          fontSize="fs-30"
          ratings={true}
          pera="Average Customer Rating"
        />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard bg-white border-none b-shadow">
                <img
                  className="img-fluid"
                  src="./Undergraduate Loans.png"
                  alt=""
                />

                <p className=" fs-20 fw-bold font-inter mt-4">
                  Undergraduate Loans
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard">
                <img className="img-fluid" src="./Graduate Loans.png" alt="" />

                <p className=" fs-20 fw-bold font-inter mt-4">Graduate Loans</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard">
                <img
                  className="img-fluid"
                  src="./Coaching Institute Loans.png"
                  alt=""
                />

                <p className=" fs-20 fw-bold font-inter mt-4">
                  Coaching Institute Loans
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard">
                <img
                  className="img-fluid"
                  src="./Undergraduate Loans.png"
                  alt=""
                />

                <p className=" fs-20 fw-bold font-inter mt-4">
                  Undergraduate Loans
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard">
                <img className="img-fluid" src="./Graduate Loans.png" alt="" />

                <p className=" fs-20 fw-bold font-inter mt-4">
                  Undergraduate Loans
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard">
                <img
                  className="img-fluid"
                  src="./Coaching Institute Loans.png"
                  alt=""
                />

                <p className=" fs-20 fw-bold font-inter mt-4">
                  Undergraduate Loans
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationLoan;
