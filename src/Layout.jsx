import React from "react";
import Nav from "./components/NavBar/Nav";
import "./css/fonts.css";
import "./css/index.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      {/*  <Footer /> */}
    </>
  );
};

export default Layout;
