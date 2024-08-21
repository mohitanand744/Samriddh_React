import React from "react";
import ProductsTitles from "../components/Titles/ProductsTitles";

const ProductDetailedPage = () => {
  return (
    <div className="product_detailed_page">
      <div className="container-fluid resources-container mt-7">
        <div className="text">
          <h1 className="fs-55 text-white">
            Our Resources <br /> & tools
          </h1>
        </div>
      </div>

      <div className="productDetailedSection_2 mt-11">
        <div className="container">
          <ProductsTitles text={"EMI calculator"} />
          <p className="mt-11 fs-20 font-inter">
            Samriddh’s EMI calculator is easy, intuitive, and instantaneous.
            Calculate the EMI for your Home loan, business loan, personal loan,
            loan against property (LAP) or any other fully amortising loan using
            or EMI Calculator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailedPage;
