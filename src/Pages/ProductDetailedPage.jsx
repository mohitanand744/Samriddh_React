import React, { useState } from "react";
import ProductsTitles from "../components/Titles/ProductsTitles";

const ProductDetailedPage = () => {
  const [loanAmountRange, setLoanAmountRange] = useState(100000);

  const selectRange = (e) => {
    const value = e.target.value;
    setLoanAmountRange(value);
  };

  const calculateGradientPercentage = () => {
    const min = 100000;
    const max = 10000000;
    const percentage = ((loanAmountRange - min) / (max - min)) * 100;
    return percentage;
  };

  const gradientStyle = {
    background: `linear-gradient(90deg, #3d4cd8 ${calculateGradientPercentage()}%, transparent ${calculateGradientPercentage()}%)`,
  };

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

          <div className="row mt-7">
            <div className="col-lg-7">
              <div className="loanCalculator rounded-4">
                <div className="top-container d-flex justify-content-between">
                  <p className="fs-20 fw-semibold text-light-gray font-inter">
                    Loan Amount
                  </p>
                  <input
                    type="text"
                    value={loanAmountRange}
                    placeholder="₹ 100000"
                    onChange={(e) => selectRange(e)}
                    className="inputAmount font-inter fs-20 fw-medium rounded-4"
                  />
                </div>
                <div className="bottom-container mt-5 px-4">
                  <input
                    type="range"
                    className="w-100 rangeInput"
                    onChange={(e) => selectRange(e)}
                    value={loanAmountRange}
                    min="100000"
                    max="10000000"
                    style={gradientStyle}
                  />
                  <div className="d-flex justify-content-between font-inter fs-16 fw-medium px-2 mt-2 text-light-gray">
                    <p>1L</p>
                    <p>25L</p>
                    <p>50L</p>
                    <p>75L</p>
                    <p>1cr</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailedPage;
