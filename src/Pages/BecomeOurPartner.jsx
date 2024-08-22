import React from "react";
import Button from "../components/Buttons/Button";

const BecomeOurPartner = () => {
  return (
    <div className="BecomeOurPartner">
      <section className="container-fluid mt-15 BecomeOurPartner_section_1">
        <div className="row align-items-center justify-content-xl-around justify-content-lg-center  justify-content-md-center justify-content-center">
          <div className="col-xl-7 col-lg-6 col-md-6 col-12">
            <img src="./MERCHANTHeroImg.png" className="img-fluid" />
          </div>

          <div className="col-xl-5  col-lg-6 col-md-6 col-12 p-8 p-5-mv">
            <div className="container">
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
        </div>
      </section>
    </div>
  );
};

export default BecomeOurPartner;
