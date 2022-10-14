import "./FooterMobile.scss";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import Logo from "../../../assets/logo.svg";

const FooterMobile = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const languagePrimary = useSelector((state) => state.languagePrimary);
  const [showMapMobile, setShowMapMobile] = useState(false);
  const mapLeftContainer = useRef();
  const mapRightContainer = useRef();

  useEffect(() => {
    if (showMapMobile === true) {
      mapLeftContainer.current.classList.add("map__leftContainer--show");
      mapRightContainer.current.classList.add("map__rightContainer--show");
    }
  }, [showMapMobile]);

  const showMapMobileHandler = () => {
    setShowMapMobile((prevousState) => !prevousState);
  };

  return (
    <footer className={darkMode ? "footerMobile footerMobile--dark" : "footerMobile footerMobile--bright"}>
      <div className="footerMobile__topContainer">
        <iframe
          className="topContainer__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5035856.899819962!2d19.134378599999998!3d51.953750549999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47009964a4640bbb%3A0x97573ca49cc55ea!2sPolska!5e0!3m2!1spl!2spl!4v1660920589679!5m2!1spl!2spl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        />

        <div ref={mapLeftContainer} className="topContainer__leftContainer">
          <div className="leftContainer__containerBackground">
            <div className="containerBackground__text">
              {languagePrimary ? "JAK NAS" : "HOW TO FIND"}
              <br />
              {languagePrimary ? "ZNALEŹĆ?" : "US?"}&nbsp;<i className={darkMode ? "bi bi-arrow-right-square-fill text__icon" : "bi bi-arrow-right-square-fill text__icon"}></i>
            </div>
          </div>
        </div>
        <div ref={mapRightContainer} className="topContainer__rightContainer">
          <div className="rightContainer__text" onClick={showMapMobileHandler}>
            {languagePrimary ? "POKAŻ" : "SHOW"}
            <br />
            {languagePrimary ? "MAPĘ" : "MAP"}
          </div>
        </div>
      </div>

      <div className="footerMobile__middleContainer">
        <div className="middleContainer__leftContainer">
          <div className="leftContainer__containerBackground">
            <img className="containerBackground__logo" src={Logo} alt="logo" />
            <div className="containerBackground__companyData">
              <p className="companyData__information">
                {languagePrimary ? "AGENCJA NIERUCHOMOŚCI" : "REAL ESTATE AGENCY"}
                <br />
                {languagePrimary ? `"NAZWA AGENCJI"` : `"AGENCY NAME"`}
              </p>
              <p className="companyData__information">{languagePrimary ? "PIERWSZA LINIJKA ADRESU" : "FIRST LINE OF ADDRESS"}</p>
              <p className="companyData__information">{languagePrimary ? "DRUGA LINIJKA ADRESU" : "SECOND LINE OF ADDRESS"}</p>

              <p className="companyData__information">{languagePrimary ? "8.00 - 16.00" : "8 A.M - 4 P.M."}</p>
              <p className="companyData__information">+00 000 000 000</p>
              <p className="companyData__information">+00 000 000 000</p>
              <p className="companyData__information">{languagePrimary ? "ADRES EMAIL" : "EMAIL ADDRESS"}</p>
              <p className="companyData__information">{languagePrimary ? "NUMER" : "NUMBER"}</p>
            </div>
          </div>
        </div>
        <div className="middleContainer__rightContainer">
          <p className="rightContainer__dataInformation">
            <i className="bi bi-house-fill"></i>&nbsp;{languagePrimary ? "ADRES" : "ADDRESS"}
          </p>
          <p className="rightContainer__dataInformation">
            <i className="bi bi-clock-fill"></i>&nbsp;{languagePrimary ? "OTWARTE" : "OPENING HOURS"}
          </p>
          <p className="rightContainer__dataInformation">
            <i className="bi bi-telephone-fill"></i>&nbsp;{languagePrimary ? "TELEFON 1" : "PHONE 1"}
          </p>
          <p className="rightContainer__dataInformation">
            <i className="bi bi-phone-fill"></i>&nbsp;{languagePrimary ? "TELEFON 2" : "PHONE 2"}
          </p>
          <p className="rightContainer__dataInformation">
            <i className="bi bi-envelope-fill"></i>&nbsp;{languagePrimary ? "ADRES EMAIL" : "EMAIL ADDRESS"}
          </p>
          <p className="rightContainer__dataInformation">
            <i className="bi bi-person-lines-fill"></i>&nbsp;{languagePrimary ? "NUMER LICENCJI" : "LICENSE NUMBER"}
          </p>
        </div>
      </div>
      <div className="footerMobile__bottomContainer">
        <div className="bottomContainer__text">&#169;&nbsp;{languagePrimary ? "WSZYSTKIE PRAWA ZASTRZEŻONE" : "ALL RIGHTS RESERVED"}</div>
        <div className="bottomContainer__leftBackgroundContainer"></div>
        <div className="bottomContainer__rightBackgroundContainer"></div>
      </div>
    </footer>
  );
};

export default FooterMobile;
