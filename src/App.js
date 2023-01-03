import React, { Fragment, useReducer } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PreloadMedia, MediaType } from "react-preload-media";

// COMPONENTS
import Header from "./Components/Header/Header";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Offer from "./Pages/Offer";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import SellRent from "./Pages/SellRent";
import Footer from "./Components/Footer/Footer";
import Cursor from "./Components/Cursor/Cursor";

// IMAGES FOR PRELOADMEDIA
const media = [
  { type: MediaType.Image, url: "./assets/images/34753.jpg" },
  { type: MediaType.Image, url: "./assets/images/186077.jpg" },
  { type: MediaType.Image, url: "./assets/images/259588.jpg" },
  { type: MediaType.Image, url: "./assets/images/1438834.jpg" },
  { type: MediaType.Image, url: "./assets/images/2251247.jpg" },
  { type: MediaType.Image, url: "./assets/imagesSlider/280222.jpg" },
  { type: MediaType.Image, url: "./assets/imagesSlider/5502227.jpg" },
  { type: MediaType.Image, url: "./assets/imagesSlider/5524205.jpg" },
  { type: MediaType.Image, url: "./assets/imagesSlider/7031408.jpg" },
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
  return (
    <div className="app">
      <Cursor />
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
};

export default App;
