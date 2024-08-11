import React from "react";
import Nav from "./components/NavBar/Nav";
import "./css/fonts.css";
import "./css/index.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footers/Footer";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
