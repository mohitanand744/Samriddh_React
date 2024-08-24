import React from "react";
import Nav from "./components/NavBar/Nav";
import "./css/fonts.css";
import "./css/index.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footers/Footer";
import { ContextProvider } from "./context/ContexAPI";

const Layout = () => {
  return (
    <>
      <ContextProvider>
        <Nav />
        <Outlet />
        <Footer />
      </ContextProvider>
    </>
  );
};

export default Layout;
