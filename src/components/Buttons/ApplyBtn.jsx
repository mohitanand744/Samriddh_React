import React from "react";

const ApplyBtn = ({ textColor, bgColor, text, arrow }) => {
  return (
    <button
      className={`apply-button rounded-4 fs-18 fw-semibold py-2 px-4 font-inter ${textColor} ${bgColor}`}
    >
      <span className="me-3">{text}</span>
      {arrow ? <img src="./rightArrow.png" alt="" /> : ""}
    </button>
  );
};

export default ApplyBtn;
