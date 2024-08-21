import React from "react";
import ProductsTitles from "../components/Titles/ProductsTitles";
import LoanAmountCalculator from "../components/Cards/LoanAmountCalculator";

const ProductDetailedPage = () => {
  return (
    <div className="product_detailed_page">
      <section className="container-fluid resources-container mt-7">
        <div className="text">
          <h1 className="fs-55 text-white">
            Our Resources <br /> & tools
          </h1>
        </div>
      </section>

      <section className="productDetailedSection_2 mt-11">
        <div className="container">
          <ProductsTitles text={"EMI calculator"} />
          <p className="mt-11 fs-20 font-inter">
            Samriddh’s EMI calculator is easy, intuitive, and instantaneous.
            Calculate the EMI for your Home loan, business loan, personal loan,
            loan against property (LAP) or any other fully amortising loan using
            or EMI Calculator.
          </p>
        </div>
      </section>

      <section className="productDetailedSection_3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="fs-20 font-inter fw-bold">How To Use</h2>
              <ul className="fs-20 font-inter fw-medium mt-5">
                <li>Enter the loan amount you wish to avail (In rupees)</li>
                <li>Enter the term of your loan (In months or years)</li>
                <li>Enter the rate of interest (In percentage)</li>
              </ul>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-md-5 mt-5">
              <h2 className="fs-20 font-inter fw-bold">
                How To Use EMI Calculator Video
              </h2>

              <div className="video-container mt-5">
                <iframe
                  className="img-fluid"
                  src="https://www.youtube.com/embed/HiFzEFQOUfM?si=gn4MGjwY8RzGeNP0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="productDetailedSection_4 mt-11">
        <div className="container emiCalculator rounded-4">
          <h2 className="fw-semibold font-inter fs-25 text-white">
            Calculate EMI, Interest amount
          </h2>

          <div className="row mt-5">
            <div className="col-lg-7">
              <LoanAmountCalculator
                text={"Loan Amount"}
                value1={"1L"}
                value2={"25L"}
                value3={"50L"}
                value4={"75L"}
                value5={"1cr"}
                min={100000}
                max={10000000}
                unit={"₹"}
              />
              <LoanAmountCalculator
                text={"Interest Rate"}
                value1={"4%"}
                value2={"8%"}
                value3={"12%"}
                value4={"16%"}
                value5={"20%"}
                min={4}
                max={20}
                unit={"%"}
              />
              <LoanAmountCalculator
                text={"Loan Tenure"}
                value1={"5Y"}
                value2={"10Y"}
                value3={"15Y"}
                value4={"20Y"}
                value5={"25Y"}
                min={5}
                max={25}
                unit={"Yrs"}
              />
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailedPage;
