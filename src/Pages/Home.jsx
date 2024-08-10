import React from "react";
import Title from "../components/Titles/Title";

const Home = () => {
  return (
    <div className="Home">
      <section className="container-fluid mt-15 section_1">
        <div className="container">
          <div className="row align-items-center justify-content-xl-between justify-content-lg-center justify-content-center gap-2">
            <div className="col-xl-5  col-lg-8 col-md-12 text-lg-start text-center ">
              <h1 className="title-font fs-55">
                <span className="text-body-secondary">Bridging the gap</span>{" "}
                between borrower and Lenders
              </h1>
              <p className="fs-1 mt-5 mb-5 text-light-gray">
                Our mission is to connect rural customers with reliable services
              </p>
            </div>
            <div className="image_Container col-xl-7 col-lg-6 col-md-12">
              <img src="./Home_img_1.webp" />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- */}

      <section className="section_2">
        <header className="container col-12">
          <Title
            first_text="Samriddh Kendra"
            span_text="Offerings"
            last_text=""
          />
        </header>

        <div className="container-fluid loan_container py-7">
          <div className="row justify-content-md-center justify-content-center align-items-center">
            <div className="  col-xl-7 col-lg-6 col-md-12 col-sm-12 ">
              <div className="image_container d-flex flex-column align-items-center p-5">
                <img className="loan" src="./LOAN.webp" />
                <img className="loan2" src="./Loan_img_1.webp" />
              </div>
            </div>
            <div className="  col-xl-5 col-lg-6 col-md-10 col-sm-10  ">
              <div className="text_container mx-sm-4 mx-md-0  text-white d-flex flex-column justify-content-center align-items-start round">
                <p className="fs-36">Loan</p>
                <p className="font-inter fs-24">
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <div className="btn-container mt-5">
                  <button className="btn fs-3 fw-bold cus-btn font-poppins">
                    Apply for loan{" "}
                    <span className="mx-3 ">
                      <img src="./Arrow.png" alt="" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- */}

      <section className="section_3 mt-3">
        <div className="container-fluid insaurance py-7">
          <div className="row justify-content-md-center justify-content-center align-items-center">
            <div className="  col-xl-5 col-lg-6 col-md-10 col-sm-10  order-lg-last  order-md-last order-last">
              <div className="text_container mx-sm-4 mx-md-0 text-white d-flex flex-column justify-content-center align-items-start round ">
                <p className="fs-36">Insaurance</p>
                <p className="font-inter fs-24">
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <div className="btn-container mt-5">
                  <button className="btn fs-3 fw-bold cus-btn font-poppins">
                    Click to know more{" "}
                    <span className="mx-3 ">
                      <img src="./Arrow.png" alt="" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="  col-xl-7 col-lg-6 col-md-12 col-sm-12 order-lg-last order-md-first order-first">
              <div className="image_container d-flex flex-column align-items-center p-5 ">
                <img className="loan" src="./Insaurance2.webp" />
                <img className="loan2" src="./Insaurance.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
