import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

/*! Importing All Pages */

import Layout from "../Layout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Products from "../Pages/Products";
import ContactUs from "../Pages/ContactUs";
import BecomeOurPartner from "../Pages/BecomeOurPartner";

export const router = createBrowserRouter(
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
