import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

/* Importing Bootstrap */

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

/* Using React Router Dom */

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

/*! Importing All Pages */

import Layout from "./Layout.jsx";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Products from "./Pages/Products";
import ContactUs from "./Pages/ContactUs";
import BecomeOurPartner from "./Pages/BecomeOurPartner";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="products" element={<Products />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="become_our_partner" element={<BecomeOurPartner />} />
      <Route
        path="*"
        element={
          <center className="mt-9">
            <h1>Page Not Found!!</h1>
          </center>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
