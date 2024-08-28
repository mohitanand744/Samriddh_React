import React, { useContext, useState } from "react";
import CreatingContext from "../context/ContexAPI";

const EducationLoan = () => {
  const { loanType, handleLoanChange } = useContext(CreatingContext);

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
                <option value="Other Loan">Other Loan</option>
              </select>
            </div>
            <button className="apply-button rounded-4 fs-18 fw-semibold py-2 px-4 font-inter text-white bg-dark-blue">
              <span className="me-2">Apply Now</span> &gt;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationLoan;
