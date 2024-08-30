import React from "react";

const ApplyBtn = ({ textColor, bgColor, text, arrow, arrowDark }) => {
  return (
    <button
      className={`btn apply-button rounded-4 fs-18 fw-semibold py-2 px-4 font-inter  border-none ${textColor} ${bgColor} d-flex align-items-center`}
    >
      <span className="me-3">{text}</span>
      {arrow ? (
        <img
          className="img-fluid"
          src={`${arrowDark ? "./arrowDark.png" : "./rightArrow.png"}`}
          alt=""
        />
      ) : (
        ""
      )}
    </button>
  );
};

export default ApplyBtn;
