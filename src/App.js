import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Offer from "./Pages/Offer";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import SellRent from "./Pages/SellRent";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/*" element={<Navigate to="/offer" />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/sell-or-rent" element={<SellRent />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Fragment>
  );
};

export default App;
