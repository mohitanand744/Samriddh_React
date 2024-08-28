import React from "react";

const EducationLoanTitle = ({ color, fontSize, ratings, pera }) => {
  return (
    <div className="container my-7">
      <h1
        className={`${fontSize} fw-bolder font-inter ${
          color === "black" ? "text-dark" : "text-white"
        }`}
      >
        What We Offer
      </h1>
      <div className="d-flex align-items-center gap-4 mt-3">
        <p className="fs-16 font-inter fw-medium mt-3">{pera}</p>{" "}
        {ratings ? (
          <span className="fs-18 fw-bold text-dark font-inter">
            <img src="./Rating 1.png" alt="" /> 4.7 (3246)
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default EducationLoanTitle;
