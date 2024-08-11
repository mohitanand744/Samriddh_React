import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-5 font-inter">
      <div className="container">
        <div className="row flex-lg-wrap">
          <div className="col-lg-4 col-md-6">
            <div className="row flex-column gap-8">
              <div className="pera fs-18  text-light-gray order-md-last order-last">
                <span className="fw-bold text-white">SAMRIDDH KENDRA</span> is
                an early stage Fi Tech player working in the field of Finance
                and technology to bridge the gap between rural customers and
                Finance Institutions
              </div>
              <div className="social-media-icons d-flex align-items-center my-5  gap-5">
                <img src="./instagram.webp" className="img-fluid" alt="" />
                <img src="./linkedin.webp" className="img-fluid" alt="" />
                <img src="./telephone.webp" className="img-fluid" alt="" />
                <img src="./mail.webp" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 d-flex justify-content-lg-around  flex-sm-wrap flex-wrap justify-content-sm-center justify-content-center gap-5 order-md-first order-first">
            <div className="col-md-2 col-sm-6">
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
            <div className="col-md-2 col-sm-6">
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
            <div className="col-md-2 col-sm-6">
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

            <div className="col-md-2 col-sm-6">
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
