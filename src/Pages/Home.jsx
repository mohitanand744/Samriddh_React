import React from "react";
import Title from "../components/Titles/Title";
import Button from "../components/Buttons/Button";
import Card from "../components/Cards/Card";

const Home = () => {
  return (
    <div className="Home">
      <section className="container-fluid mt-15 section_1">
        <div className="container">
          <div className="row align-items-center justify-content-xl-around justify-content-lg-center  justify-content-md-center justify-content-center gap-2">
            <div className="col-xl-5  col-lg-6 col-md-12 text-lg-start text-center ">
              <h1 className="title-font fw-semibold fs-55">
                <span className="text-body-secondary fw-medium">
                  Bridging the gap
                </span>{" "}
                between borrower and Lenders
              </h1>
              <p className="fs-30 mt-5 mb-5 text-light-gray">
                Our mission is to connect rural customers with reliable services
              </p>
            </div>
            <div className="image_Container col-xl-7 col-lg-6 col-md-12">
              <img src="./Home_img_1.webp" className="img-fluid" />
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
                <img className="img-fluid" src="./LOAN.webp" />
                <img className="img-fluid" src="./Loan_img_1.webp" />
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
                  <Button content={"Apply for loan"} />
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
                  <Button content={"Click to know more"} />
                </div>
              </div>
            </div>
            <div className="  col-xl-7 col-lg-6 col-md-12 col-sm-12 order-lg-last order-md-first order-first">
              <div className="image_container d-flex flex-column align-items-center p-5 ">
                <img className="img-fluid" src="./Insaurance2.webp" />
                <img className="img-fluid" src="./Insaurance.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- */}

      <section className="container-fluid section_4 my-10">
        <div className="container p-7 bg-gray">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 ">
              <div className="text_container d-flex flex-column gap-4 mb-md-5 mb-5">
                <h2 className="font-inter fw-bold fs-36">Join Family</h2>
                <p className="fs-36 mt-7 fw-medium">
                  Become a SAMRIDDH Sathi/Samriddh Sahayak and sell financial
                  products
                </p>
                <div className="btn-container mt-3">
                  <Button content={"Click to know more"} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="image_container text-xl-end text-center mt-md-5 mt-5">
                <img className="img-fluid" src="./Mobile.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- */}

      <section className="section_5">
        <header className="container col-12">
          <Title
            first_text="How does"
            span_text="Samriddh Kendra works?"
            last_text=""
          />

          <p className="fs-1 mb-5 text-light-gray px-2">
            Samriddh Kendra is pioneering an innovative approach to loan and
            insaurance distribution in rural Bharat by leveraging technology and
            establishing the Samriddh Sathi for effective implementation.
          </p>
        </header>
        <div className="container-fluid my-10">
          <div className="container">
            <div className="card-slider">
              <Card
                image={"./formicon.webp"}
                title={"Enter your basic details"}
                description={"Enter KYC & Loan requirements in the application"}
                steps={"1"}
              />
              <Card
                image={"./validation.webp"}
                title={"Validation"}
                description={
                  "Samriddh app validates your requirements with lenders and shows offer"
                }
                steps={"2"}
              />
              <Card
                image={"./offers.webp"}
                title={"Select loan offer"}
                description={
                  "Out of multiple loan offers given by samriddh, select the required loan offer"
                }
                steps={"3"}
              />
              <Card
                image={"./check.webp"}
                title={"Qulified lead passed and loan dispersed"}
                description={
                  "After you select the offer, Samriddh app passes the lead to lender, after which they disperse the loan"
                }
                steps={"4"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- */}

      <section className="section_6">
        <header className="container mb-5">
          <Title first_text="" span_text="Recognitions" last_text="" />
        </header>

        <div className="recognitions container-fluid">
          <div className="container">
            <div className="Logo-slider">
              <div className="company-Logo col-3">
                <img
                  src="./wadhwanifoundation_logo.webp"
                  alt=""
                  className="img-fluid "
                />
              </div>
              <div className="company-Logo col-3">
                <img src="./STPI Logo 1.webp" alt="" className="img-fluid " />
              </div>
              <div className="company-Logo col-3">
                <img
                  src="./Bihar Say Logo.webp"
                  alt=""
                  className="img-fluid "
                />
              </div>
              <div className="company-Logo col-3">
                <img
                  src="./Startup India Logo.webp"
                  alt=""
                  className="img-fluid "
                />
              </div>

              <div className="company-Logo col-3">
                <img
                  src="./startup Bihar Logo 1.webp"
                  alt=""
                  className="img-fluid "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- */}

      <section className="section_7">
        <header className="container mb-5">
          <Title
            first_text="Our"
            span_text="Trusted Financial Partners"
            last_text=" - We work only with best!"
          />
        </header>

        <div className="trustedFinancialPartners">
          <div className="container">
            <div className="row text-start align-items-center ">
              <div className="image-container col-lg-2  col-md-3 col-4">
                <img
                  className="img-fluid"
                  src="Mannapuram Finance Logo.webp"
                  alt=""
                />
              </div>
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="Lendingkart Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img
                  className="img-fluid"
                  src="Jana small finance Bank Logo.webp"
                  alt=""
                />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img
                  className="img-fluid"
                  src="Bank of Baroda Logo.webp"
                  alt=""
                />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img
                  className="img-fluid"
                  src="Bajaj Finserve Logo.webp"
                  alt=""
                />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img
                  className="img-fluid"
                  src="Bandhan Bank Logo.webp"
                  alt=""
                />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img
                  className="img-fluid"
                  src="Utakrsh small finance Bank Logo.webp"
                  alt=""
                />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="Union Bank Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="Yes Bank Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="SMFG India Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="Faircent Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="HDFC Bank Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img
                  className="img-fluid"
                  src="Piramal finance Logo.webp"
                  alt=""
                />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img
                  className="img-fluid"
                  src="IIFL Finance Logo.webp"
                  alt=""
                />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="Chola Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="Paysense Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="Indian Bank Logo.webp" alt="" />
              </div>{" "}
              <div className="image-container col-lg-2  col-md-3 col-4 ">
                <img className="img-fluid" src="Finnable Logo.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
