import React from "react";

const Card = ({ title, description, steps, image }) => {
  return (
    <div>
      <div className="custom-card round-3">
        <div className="h-100 card-body d-flex flex-column align-items-center justify-content-between ">
          <div className="top-container text-center">
            <img src={image} className="icon img-fluid" alt="" />
            <h2 className="card-title  mb-3 font-inter fw-semibold fs-26">
              {title}
            </h2>
            <p className="card-text fs-2 ">{description}</p>
          </div>

          <div className="steps-container text-center d-flex flex-column align-items-center">
            <p className="fs-2 fw-bold font-inter">STEP</p>
            <div className="steps fw-semibold">{steps}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
