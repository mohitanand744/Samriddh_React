import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <section className="container-fluid mt-15 section_1">
        <div className="container">
          <div className="row align-items-center justify-content-xl-between justify-content-lg-center justify-content-center gap-2">
            <div className="col-xl-5  col-lg-8 col-md-12 text-lg-start text-center ">
              <h1 className="title-font fs-55">
                <span className="text-body-secondary">Bridging the gap</span>{" "}
                between borrower and Lenders
              </h1>
              <p className="fs-1 mt-5 mb-5 text-light-gray">
                Our mission is to connect rural customers with reliable services
              </p>
            </div>
            <div className="image_Container col-xl-7 col-lg-6 col-md-12">
              <img src="./Home_img_1.webp" />
            </div>
          </div>
        </div>
      </section>
      <p className="title-font mx-6 fs-36 text-secondary">
        Samriddh Kendra <span className="text-black">Offerings</span>
      </p>
    </div>
  );
};

export default Home;
