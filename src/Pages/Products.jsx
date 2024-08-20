import React from "react";

const Products = () => {
  return (
    <div className="product">
      <section className="container-fluid mt-15 product_section_1">
        <div className="row justify-content-xl-around justify-content-lg-center  justify-content-md-center justify-content-center">
          <div className="col-xl-5  col-lg-6 col-md-6 col-12 text-lg-start text-center ">
            <h1 className="title-font fs-55 fw-normal text-light-blue">
              At Samriddh Kendra, we offer
              <span className="text-dark fw-medium">
                {" "}
                multiple products <br />
              </span>{" "}
              for our customer
            </h1>
            <div className="button-container w-100 d-flex flex-column  mt-7 gap-5">
              <button className="btn custom-btn fs-24 text-white ms-5 mt-4 font-inter">
                INSURANCE <img src="./BTNSTAR.png" alt="" />
              </button>
              <button className="btn custom-btn mt-5 fs-24 text-white font-inter ">
                LOANS <img src="./BTNSTAR.png" alt="" />
              </button>
            </div>
          </div>
          <div className="image_Container col-xl-7 col-lg-6 col-md-6 col-12 order-lg-last order-md-last order-first">
            <img src="./LoanImg.png" className="img-fluid" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
