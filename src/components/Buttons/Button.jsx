import React from "react";

const Button = ({ content }) => {
  return (
    <button className="btn fs-3 fw-bold text-dark cus-btn font-poppins">
      {content}
      <span className="mx-3 ">
        <img
          className="move-right"
          src={`${
            content === "Download application"
              ? "./download.png"
              : "./Arrow.png"
          }`}
          alt=""
        />
      </span>
    </button>
  );
};

export default Button;
