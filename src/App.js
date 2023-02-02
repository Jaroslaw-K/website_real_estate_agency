import React, { Fragment, useReducer, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PreloadMedia, MediaType } from "react-preload-media";
import "./App.scss";

// COMPONENTS
import Header from "./Components/Header/Header";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import Offer from "./Pages/Offer/Offer";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import SellRent from "./Pages/SellRent/SellRent";
import Footer from "./Components/Footer/Footer";
import Statement from "./Components/Statement/Statement";

// IMAGES FOR PRELOADMEDIA
const media = [
  { type: MediaType.Image, url: "./assets/images/7009484.jpg" },
  { type: MediaType.Image, url: "./assets/images/186077.jpg" },
  { type: MediaType.Image, url: "./assets/images/1438832.jpg" },
  { type: MediaType.Image, url: "./assets/images/1438834.jpg" },
  { type: MediaType.Image, url: "./assets/images/2251247.jpg" },
  { type: MediaType.Image, url: "./assets/imagesSlider/1438832.jpg" },
  { type: MediaType.Image, url: "./assets/imagesSlider/5502227.jpg" },
  { type: MediaType.Image, url: "./assets/imagesSlider/5524205.jpg" },
  { type: MediaType.Image, url: "./assets/imagesSlider/7031408.jpg" },
  { type: MediaType.Image, url: "./assets/aboutUs/934591.jpg" },
  { type: MediaType.Image, url: "./assets/aboutUs/1928739.jpg" },
  { type: MediaType.Image, url: "./assets/aboutUs/4065191.jpg" },
  { type: MediaType.Image, url: "./assets/aboutUs/5823879.jpg" },
  { type: MediaType.Image, url: "./assets/aboutUs/6794920.jpg" },
  { type: MediaType.Image, url: "./assets/aboutUs/6899397.jpg" },
  { type: MediaType.Image, url: "./assets/specialisations/3760069.jpg" },
  { type: MediaType.Image, url: "./assets/specialisations/7176319.jpg" },
  { type: MediaType.Image, url: "./assets/specialisations/8112172.jpg" },
  { type: MediaType.Image, url: "./assets/logo.svg" },
];

// APP COMPONENT RENDER APPLOADED COMPONENT WHEN ALL MEDIA ARE LOAD
export const App = () => {
  const [isLoaded, setIsloaded] = useReducer(() => true, false);
  return (
    <div>
      <PreloadMedia media={media} onFinished={() => setIsloaded()}></PreloadMedia>
      {isLoaded ? <AppLoaded /> : <Fragment></Fragment>}
    </div>
  );
};

const AppLoaded = () => {
  const [statementAccepted, setStatementAccepted] = useState(false);
  const statementAcceptedHandler = () => {
    setStatementAccepted((previousState) => !previousState);
  };
  let content;
  if (statementAccepted === false) {
    content = (
      <div className="app--statement">
        <Statement statementAcceptedHandler={statementAcceptedHandler} />;
      </div>
    );
  } else if (statementAccepted === true) {
    content = (
      <div className="app">
        <Header />
        <Routes>
          <Route path="/*" element={<Navigate to="/offer" />} /> {/* IF ADDRESS IS INCORRECT PAGE WILL BE REDIRECT IT INTO OFFER PAGE */}
          <Route path="/offer" element={<Offer />} />
          <Route path="/sell-or-rent" element={<SellRent />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    );
  }
  return <>{content}</>;
};

export default App;
