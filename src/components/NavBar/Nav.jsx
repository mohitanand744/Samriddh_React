import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top nav b-shadow">
        <div className="container-fluid">
          <NavLink className={"navbar-brand"}>
            <img src="./Samriddh.webp" alt="" />
          </NavLink>
          <ul className="navLinks">
            <li className="nav-item">
              <NavLink
                style={{ color: "black", fontWeight: "500" }}
                className={({ isActive }) => (isActive ? "Active" : "")}
                to={"about"}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={{ color: "black", fontWeight: "500" }}
                className={({ isActive }) => (isActive ? "Active" : "")}
                to={"products"}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={{ color: "black", fontWeight: "500" }}
                className={({ isActive }) => (isActive ? "Active" : "")}
                to={"contact"}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={{ color: "black", fontWeight: "500" }}
                className={({ isActive }) => (isActive ? "Active" : "")}
                to={"become_our_partner"}
              >
                Become Our Partner
              </NavLink>
            </li>
            <button className="btn btn-outline-dark fs-3 px-4">Login</button>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fs-2"></span>
          </button>
          <div
            className="offcanvas offcanvas-end slider p-2"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header ">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src="./Samriddh.webp" alt="" />
              </h5>
              <button
                type="button"
                className="btn-close fs-3"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-center gap-3">
                <li className="nav-item sidebar-li">
                  <NavLink
                    style={{ color: "black", fontWeight: "500" }}
                    className={({ isActive }) => (isActive ? "Active" : "")}
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item sidebar-li">
                  <NavLink
                    style={{ color: "black", fontWeight: "500" }}
                    className={({ isActive }) => (isActive ? "Active" : "")}
                    to={"about"}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item sidebar-li">
                  <NavLink
                    style={{ color: "black", fontWeight: "500" }}
                    className={({ isActive }) => (isActive ? "Active" : "")}
                    to={"products"}
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item sidebar-li">
                  <NavLink
                    style={{ color: "black", fontWeight: "500" }}
                    className={({ isActive }) => (isActive ? "Active" : "")}
                    to={"contact"}
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item sidebar-li">
                  <NavLink
                    style={{ color: "black", fontWeight: "500" }}
                    className={({ isActive }) => (isActive ? "Active" : "")}
                    to={"become_our_partner"}
                  >
                    Become Our Partner
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
