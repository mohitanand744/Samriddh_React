import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-5 font-inter">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className=" col-md-8 col-lg-3 col-xl-3">
            <div className="row flex-column gap-8 text-md-center order-md-first  order-sm-last order-last">
              <div className="pera fs-18  text-light-gray mt-sm-5">
                <span className="fw-bold text-white">SAMRIDDH KENDRA</span> is
                an early stage Fi Tech player working in the field of Finance
                and technology to bridge the gap between rural customers and
                Finance Institutions
              </div>
              <div className="social-media-icons d-flex align-items-center my-5  gap-5  justify-content-sm-center justify-content-center">
                <img src="./instagram.webp" className="img-fluid" alt="" />
                <img src="./linkedin.webp" className="img-fluid" alt="" />
                <img src="./telephone.webp" className="img-fluid" alt="" />
                <img src="./mail.webp" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-9  d-flex justify-content-lg-around  flex-sm-wrap flex-wrap justify-content-sm-center justify-content-center gap-5 order-md-last order-sm-first order-first">
            <div className="col-4 col-sm-6 col-lg-2">
              <h1 className="footer-heading">Platform</h1>
              <ul className="list-unstyled">
                <li className="mt-4">
                  <a href="/" className="text-white">
                    Home
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-white">
                    Get in touch
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-white">
                    How it Works
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4 col-sm-6 col-lg-2 ">
              <h1 className="footer-heading">About</h1>
              <ul className="list-unstyled">
                <li className="mt-4">
                  <a href="#" className="text-white">
                    About Us
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="#"
                    className="text-white d-flex flex-column align-items-start
                  "
                  >
                    Careers{" "}
                    <button className="highlight fs-4">Hiring now</button>
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4 col-sm-6 col-lg-2">
              <h1 className="footer-heading">Information</h1>
              <ul className="list-unstyled">
                <li className="mt-4">
                  <a href="#" className="text-white">
                    Privacy Policy
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-white">
                    Terms of Use
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-white">
                    Refund Policy
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-white">
                    Grievance officer
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-4 col-sm-6 col-lg-2">
              <h1 className="footer-heading">Tools</h1>
              <ul className="list-unstyled">
                <li className="mt-4">
                  <a href="#" className="text-white">
                    EMI Calculator
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-white">
                    Balance transfer calculator
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
