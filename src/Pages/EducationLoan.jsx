import React, { useContext } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CreatingContext from "../context/ContexAPI";
import EducationLoanTitle from "../components/Titles/EducationLoanTitle";
import ApplyBtn from "../components/Buttons/ApplyBtn";

const EducationLoan = () => {
  const {
    loanType,
    handleLoanChange,
    educationLoan,
    aspirationsSliderCarouselOptions,
  } = useContext(CreatingContext);

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
            <ApplyBtn
              textColor="text-white"
              bgColor={"bg-dark-blue"}
              text="Apply Now"
              arrow={true}
            />
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
          title={"What We Offer"}
          color="black"
          fontSize="fs-30"
          ratings={true}
          pera="Average Customer Rating"
          pera2={""}
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
                <img className="img-fluid" src="./Parent Loans.png" alt="" />

                <p className=" fs-20 fw-bold font-inter mt-4">Parent Loans</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard">
                <img className="img-fluid" src="./MBA Loans.png" alt="" />

                <p className=" fs-20 fw-bold font-inter mt-4">MBA Loans</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center gap-4 productCard">
                <img className="img-fluid" src="./Dental Loan.png" alt="" />

                <p className=" fs-20 fw-bold font-inter mt-4">Dental Loan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="EducationLoanSection_4 mt-11">
        <EducationLoanTitle
          title={"Who is this for?"}
          color="black"
          fontSize="fs-40"
          ratings={false}
          pera="Lorem ipsum is a placeholder text commonly used in the design and typesetting industry. It consists of parts of Latin words with no  specific meaning and is used as temporary filler content when the actual text is not available or finalized."
          pera2={
            "Lorem ipsum is a placeholder text commonly used in the design and typesetting industry. It consists of parts of Latin words with no  specific meaning and is used as temporary filler content when the actual text is not available or finalized. Lorem ipsum can help  designers and developers visualize the layout, typography, and overall design of a project without being distracted by the actual  content."
          }
        />
      </section>

      <section className="EducationLoanSection_5 my-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12 col-12">
              <EducationLoanTitle
                title={"We’ve got you even more exclusive benefits."}
                color="black"
                fontSize="fs-28"
                ratings={false}
                pera="We are making it fast and easy for you to pay for school with our graduate student loans. Samriddh with the unique benefits it offers:"
                pera2={""}
              />

              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="d-flex m-3 align-items-center gap-4">
                    <img src="covered.png" alt="" />
                    <div className="txt">
                      <h2 className="fw-bold fs-20 font-inter">100% covered</h2>
                      <p className="fs-16 font-inter">
                        Covers all school-certified costs. That’s right—we’re
                        got you covered.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="d-flex m-3 align-items-center gap-4">
                    <img src="Zero Fees.png" alt="" />
                    <div className="txt">
                      <h2 className="fw-bold fs-20 font-inter">Zero Fees</h2>
                      <p className="fs-16 font-inter">
                        That means no application, origination, or late fees.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="d-flex m-3 align-items-center gap-4">
                    <img src="Easy Repayment Options.png" alt="" />
                    <div className="txt">
                      <h2 className="fw-bold fs-20 font-inter">
                        Easy Repayment Options
                      </h2>
                      <p className="fs-16 font-inter">
                        Choose from in-school or deferred repayment options, and
                        there is never a penalty for prepayment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="d-flex m-3 align-items-center gap-4">
                    <img src="Cosign with confidence.png" alt="" />
                    <div className="txt">
                      <h2 className="fw-bold fs-20 font-inter">
                        Cosign with confidence
                      </h2>
                      <p className="fs-16 font-inter">
                        We pride ourselves on providing unbiased loan reviews.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div className=" mt-lg-0 mt-md-5 mt-5 p-lg-0 p-md-4 p-5">
                <img src="./guy+cat 2.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="EducationLoanSection_6 py-6 bg-dark-blue">
        <EducationLoanTitle
          title={"What Education Loans Cover?"}
          color="white"
          fontSize="fs-36"
          ratings={false}
          pera="Lorem ipsum is a placeholder text commonly used in the design and typesetting industry. It consists of parts of Latin words with no specific meaning and is used as temporary filler content when the actual text is not available or finalized."
          pera2={""}
        />

        <div className="container pb-7">
          <div className="row mb-5 ">
            <div className="col-lg-5 col-md-6 col-12">
              <div className="my-4">
                <h2 className="fw-bold fs-20 font-inter text-white">
                  1. Tuition and fees
                </h2>
                <p className="fs-16 ms-4 fw-light font-inter text-white">
                  This includes the cost of the course, exam fees, lab fees, and
                  other academic-related expenses.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div className="my-4">
                <h2 className="fw-bold fs-20 font-inter text-white">
                  2. Tuition and fees
                </h2>
                <p className="fs-16 ms-4 fw-light font-inter text-white">
                  This includes the cost of the course, exam fees, lab fees, and
                  other academic-related expenses.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div className="my-4">
                <h2 className="fw-bold fs-20 font-inter text-white">
                  3. Tuition and fees
                </h2>
                <p className="fs-16 ms-4 fw-light font-inter text-white">
                  This includes the cost of the course, exam fees, lab fees, and
                  other academic-related expenses.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div className="my-4">
                <h2 className="fw-bold fs-20 font-inter text-white">
                  4. Tuition and fees
                </h2>
                <p className="fs-16 ms-4 fw-light font-inter text-white">
                  This includes the cost of the course, exam fees, lab fees, and
                  other academic-related expenses.
                </p>
              </div>
            </div>
          </div>

          <ApplyBtn
            textColor="text-dark"
            bgColor={"bg-white"}
            text="Apply Now"
            arrow={false}
          />
        </div>
      </section>

      <section className="EducationLoanSection_7 py-6">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 col-md-6 col-12">
              <EducationLoanTitle
                title={"How to Buy?"}
                color="black"
                fontSize="fs-40"
                ratings={false}
                pera="Lorem ipsum is a placeholder text commonly used in the design and typesetting industry."
                pera2={""}
              />

              <div className="row flex-column gap-4">
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <p className="py-3 px-45 bg-dark-blue text-white fw-semibold fs-18 font-inter me-4">
                      1
                    </p>
                    <div className="txt">
                      <h2 className="fw-medium fs-20 font-inter">
                        Tell us about yourself
                      </h2>
                      <p className="fs-16 font-inter">
                        We'll need some basic information from you (and your
                        cosigner if you're applying with one) like your name,
                        address, and date of birth, along with some details
                        about your school.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <p className="py-3 px-45 bg-dark-blue text-white fw-semibold fs-18 font-inter me-4">
                      2
                    </p>
                    <div className="txt">
                      <h2 className="fw-medium fs-20 font-inter">
                        Choose your loan option(s)
                      </h2>
                      <p className="fs-16 font-inter">
                        Choose the best Plan and Add-ons for you, and confirm
                        your details.
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <p className="py-3 px-45 bg-dark-blue text-white fw-semibold fs-18 font-inter me-4">
                      3
                    </p>
                    <div className="txt">
                      <h2 className="fw-medium fs-20 font-inter">
                        Document upload & Get the policy
                      </h2>
                      <p className="fs-16 font-inter">
                        Fill in your details, add your Nominee details and
                        complete your KYC so that we can issue the policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-12">
              <div className="mt-lg-0 mt-md-0 mt-6 text-center">
                <img className="img-fluid" src="./How to Buy.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="EducationLoanSection_8 container-fluid my-10">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="right py-8">
              <div className="rightBorder text-center">
                <h1 className="fs-28 font-inter fw-bolder">
                  Apply For Educational Loan
                </h1>
                <p className="fs-18 font-inter fw-normal mb-5">
                  Lorem ipsum is a placeholder text commonly used in the design
                  and typesetting industry.{" "}
                </p>

                <ApplyBtn
                  textColor="text-white"
                  bgColor={"bg-dark-blue"}
                  text="Apply Now"
                  arrow={false}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="left py-8">
              <div className="leftBorder text-center text-white">
                <h1 className="fs-28 font-inter fw-bolder">
                  Apply For Educational Loan
                </h1>
                <p className="fs-18 font-inter fw-normal mb-5">
                  Lorem ipsum is a placeholder text commonly used in the design
                  and typesetting industry.{" "}
                </p>

                <ApplyBtn
                  textColor="text-dark"
                  bgColor={"bg-white"}
                  text="Apply Now"
                  arrow={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="EducationLoanSection_9">
        <EducationLoanTitle
          title={"Frequently Asked Questions"}
          color="black"
          fontSize="fs-32"
          ratings={false}
          pera=""
          pera2={""}
        />

        <div className="container">
          <div className="faqContainer row ">
            <div className=" col-lg-9 col-md-12 col-12">
              <div className="accordion" id="accordionExample">
                {educationLoan.map((data, index) => {
                  return (
                    <div key={index} className="accordion-item mt-3 rounded-4">
                      <h2 className="accordion-header ">
                        <button
                          className={`accordion-button
                            collapsed
                           fs-20 font-inter rounded-4`}
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
                        className={`accordion-collapse collapse answerContainer my-lg-3 my-md-2 my-2`}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationLoan;
