import "./FooterMobile.scss";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
// ASSETS
import Logo from "../../../assets/logo.svg";
import mapEN from "../../../assets/images/map/mapEN.jpg";
import mapPL from "../../../assets/images/map/mapPL.jpg";

const FooterMobile = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const languagePrimary = useSelector((state) => state.languagePrimary);
  const [showMapMobile, setShowMapMobile] = useState(false);
  const mapLeftContainer = useRef();
  const mapRightContainer = useRef();

  const showMapMobileHandler = () => {
    // RESPONSIBLE FOR SHOWING MAP
    setShowMapMobile((prevousState) => !prevousState);
  };

  useEffect(() => {
    // RESPONSIBLE FOR ANIMATIONS SHOWING MAP
    if (showMapMobile === true) {
      mapLeftContainer.current.classList.add("topContainer__leftContainer--show"); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
      mapRightContainer.current.classList.add("topContainer__rightContainer--show"); // RESPONSIBLE FOR WEBSITE LANGUAGE - ENGLISH OR POLISH
    }
  }, [showMapMobile]);

  return (
    <footer className={darkMode ? "footerMobile footerMobile--styling footerMobile--dark" : "footerMobile footerMobile--styling footerMobile--bright"}>
      <div className="footerMobile__topContainer">
        <iframe className="topContainer__map" src="" allowFullScreen="" loading="lazy" title="map" style={{ backgroundImage: languagePrimary ? `url(${mapPL})` : `url(${mapEN})` }} /> {/* IN SRC PLACE FOR ADDRESS*/}
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
