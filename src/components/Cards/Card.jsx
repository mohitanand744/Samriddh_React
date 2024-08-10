import React from "react";

const Card = ({ title, description, steps, image }) => {
  return (
    <div>
      <div className="custom-card round-3">
        <div className="card-body text-center d-flex flex-column align-items-center justify-content-center">
          <img src={image} className="img-fluid icon" alt="" />
          <h2 className="card-title mt-4 mb-3 font-inter fw-semibold fs-26">
            {title}
          </h2>
          <p className="card-text fs-2 mb-4 mt-4">{description}</p>

          <p className="mb-5 fs-2 fw-bold font-inter">STEP</p>
          <div className="steps">{steps}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
