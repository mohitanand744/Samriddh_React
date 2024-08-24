import React from "react";
import Button from "../components/Buttons/Button";
import Title from "../components/Titles/Title";

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
            <div className="agent-card d-flex justify-content-center align-items-center flex-column bg-light-gray text-center">
              <img src="Loan Agents.png" alt="" />
              <p className="font-inter fs-24 fw-semibold mt-4">Loan Agents</p>
            </div>
            <div className="agent-card d-flex justify-content-center align-items-center flex-column bg-light-gray text-center">
              <img src="Former bank employees.png" alt="" />
              <p className="font-inter fs-24 fw-semibold mt-4">
                Former bank employees
              </p>
            </div>
            <div className="agent-card d-flex justify-content-center align-items-center flex-column bg-light-gray text-center">
              <img src="Insurance agents.png" alt="" />
              <p className="font-inter fs-24 fw-semibold mt-4">
                Insurance agents
              </p>
            </div>

            <div className="agent-card d-flex justify-content-center align-items-center flex-column bg-light-gray text-center">
              <img src="Wealth Advisors.png" alt="" />
              <p className="font-inter fs-24 fw-semibold mt-4">
                Wealth Advisors
              </p>
            </div>
            <div className="agent-card d-flex justify-content-center align-items-center flex-column bg-light-gray text-center">
              <img src="BFSI Professionals.png" alt="" />
              <p className="font-inter fs-24 fw-semibold mt-4">
                BFSI Professionals
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeOurPartner;
