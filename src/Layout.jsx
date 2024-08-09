import React from "react";
import Nav from "./components/NavBar/Nav";
import Footer from "./components/Footers/Footer";
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
