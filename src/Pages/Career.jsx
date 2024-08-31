import React from "react";
import ProductsTitles from "../components/Titles/ProductsTitles";

const Career = () => {
  return (
    <div className="career">
      <section className="career_section1 bg-dark-blue mt-5">
        <div className="container h-100">
          <div className="row h-100 flex-column align-items-center text-center px-4">
            <h1 className="text-white mt-15 fs-55 fw-semibold title-font">
              We are a small team that{" "}
              <span className="text-warning">thinks big</span>
            </h1>

            <p className="fs-36 font-zilla text-secondary">
              Join us to build this future together
            </p>

            <button className="btn mt-5 rounded fs-20 bg-primary">
              <img src="./dropdown arrow.png" alt="" />
            </button>
          </div>
        </div>
      </section>

      <section className="career_section2">
        <div className="container p-66 rounded-4">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-12">
              <div className="card bg-dark-blue position-relative m-lg-3 m-md-5 m-6  p-5 rounded-4">
                <div className="img-container">
                  <img
                    src="./Competitive salaries and perks.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h2 className="font-inter fw-semibold mt-lg-5 mt-md-5 mt-7 fs-20 text-white">
                  Competitive salaries and perks
                </h2>
                <p className="fs-16 font-inter text-light-gray mt-4">
                  We offer fair compensation along with ESOPs and other perks
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12">
              <div className="card bg-dark-blue position-relative m-lg-3 m-md-5 m-6  p-5 rounded-4">
                <div className="img-container">
                  <img
                    src="./Work friendly environment.png"
                    alt=""
                    className="img-fluid ps-lg-0 ps-md-3 ps-3"
                  />
                </div>
                <h2 className="font-inter fw-semibold mt-lg-5 mt-md-5 mt-7 fs-20 text-white">
                  Work friendly environment
                </h2>
                <p className="fs-16 font-inter text-light-gray mt-4">
                  With the relaxed and friendly atmosphere at our workplace,
                  productivity shoots up to the next level.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12">
              <div className="card bg-dark-blue position-relative m-lg-3 m-md-5 m-6  p-5 rounded-4">
                <div className="img-container">
                  <img
                    src="./Learning exposure.png"
                    alt=""
                    className="img-fluid ps-lg-0 ps-md-3 ps-3"
                  />
                </div>
                <h2 className="font-inter fw-semibold mt-lg-5 mt-md-5 mt-7 fs-20 text-white">
                  Learning exposure
                </h2>
                <p className="fs-16 font-inter text-light-gray mt-4">
                  Excited to learn more?We encourage the team to learn new
                  skills everyday.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12">
              <div className="card bg-dark-blue position-relative m-lg-3 m-md-5 m-6  p-5 rounded-4">
                <div className="img-container">
                  <img
                    src="./Work with founders.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h2 className="font-inter fw-semibold mt-lg-5 mt-md-5 mt-7 fs-20 text-white">
                  Work with founders
                </h2>
                <p className="fs-16 font-inter text-light-gray mt-4">
                  Work directly with our co-founders and get mentored by our
                  pool of industry experts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career_section3 mt-15">
        <div className="container">
          <h1 className="font-inter fw-bold fs-32 text-dark">OPENINGS</h1>
        </div>
      </section>
    </div>
  );
};

export default Career;
