import React from "react";

const Title = ({ first_text, span_text, last_text }) => {
  return (
    <p className="title-font mt-7 py-5 fs-36 fw-medium text-secondary">
      {first_text} <span className="text-black">{span_text}</span> {last_text}
    </p>
  );
};

export default Title;
