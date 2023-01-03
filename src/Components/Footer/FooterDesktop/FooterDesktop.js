import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./FooterDesktop.scss";
import Logo from "../../../assets/logo.svg";

const FooterDesktop = () => {
  const darkMode = useSelector((state) => state.darkMode); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
  const languagePrimary = useSelector((state) => state.languagePrimary); // RESPONSIBLE FOR WEBSITE LANGUAGE - ENGLISH OR POLISH
  const [showMapDekstop, setShowMapDesktop] = useState(false);
  const desktopMap = useRef();
  const footerDesktopBottom = useRef();

  const showMapDesktopHandler = () => { // RESPONSIBLE FOR SHOWING MAP
    setShowMapDesktop((prevousState) => !prevousState);

    setTimeout(() => { // RESPONSIBLE FOR ANIMATIONS SHOWING MAP
      footerDesktopBottom.current.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  useEffect(() => { // RESPONSIBLE FOR ANIMATIONS SHOWING MAP
    if (showMapDekstop === true) {
      desktopMap.current.classList.remove("footerDesktop__topContainer--hide");
      desktopMap.current.classList.add("footerDesktop__topContainer--show");
    }
    if (showMapDekstop === false) {
      desktopMap.current.classList.remove("footerDesktop__topContainer--show");
      desktopMap.current.classList.add("footerDesktop__topContainer--hide");
    }
  }, [showMapDekstop]);

  let mapDesktopText = "";
  if (showMapDekstop === false && languagePrimary === false) {
    mapDesktopText = "SHOW";
  }
  if (showMapDekstop === false && languagePrimary === true) {
    mapDesktopText = "POKAŻ";
  }
  if (showMapDekstop === true && languagePrimary === false) {
    mapDesktopText = "HIDE";
  }
  if (showMapDekstop === true && languagePrimary === true) {
    mapDesktopText = "UKRYJ";
  }

  return (
    <footer className={darkMode ? "footerDesktop footerDesktop--dark" : "footerDesktop footerDesktop--bright"}>
      <iframe
        ref={desktopMap}
        className="footerDesktop__topContainer"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5035856.899819962!2d19.134378599999998!3d51.953750549999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47009964a4640bbb%3A0x97573ca49cc55ea!2sPolska!5e0!3m2!1spl!2spl!4v1660920589679!5m2!1spl!2spl"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      />
      <div className="footerDesktop__middleContainer">
        <div className="middleContainer__leftContainer">
          <div className="leftContainer__logoContainer">
            <img className="logoContainer__logo" src={Logo} alt="logo" />
          </div>
          <div className="leftContainer__dataContainer">
            <div className="dataContainer__left"></div>
            <div className="dataContainer__right">
              <div className="right__addressContainer">
                <i className="bi bi-house-fill addressContainer__element"></i>
                <p className="addressContainer__element">
                  {languagePrimary ? "AGENCJA NIERUCHOMOŚCI" : "REAL ESTATE AGENCY"}
                  <br />
                  {languagePrimary ? `"NAZWA AGENCJI"` : `"AGENCY NAME"`}
                </p>
                <p className="addressContainer__element">{languagePrimary ? "PIERWSZA LINIJKA ADRESU" : "FIRST LINE OF ADDRESS"}</p>
                <p className="addressContainer__element">{languagePrimary ? "DRUGA LINIJKA ADRESU" : "SECOND LINE OF ADDRESS"}</p>
              </div>
              <div className="right__infoContainer">
                <p className="infoContainer__element">
                  <i className="bi bi-clock-fill"></i>&nbsp;{languagePrimary ? "OTWARTE" : "OPENING HOURS"}
                </p>
                <p className="infoContainer__element">
                  <i className="bi bi-telephone-fill"></i>&nbsp;{languagePrimary ? "TELEFON 1" : "PHONE 1"}
                </p>
                <p className="infoContainer__element">
                  <i className="bi bi-phone-fill"></i>&nbsp;{languagePrimary ? "TELEFON 2" : "PHONE 2"}
                </p>
                <p className="infoContainer__element">
                  <i className="bi bi-envelope-fill"></i>&nbsp;{languagePrimary ? "ADRES EMAIL" : "EMAIL ADDRESS"}
                </p>
                <p className="infoContainer__element">
                  <i className="bi bi-person-lines-fill"></i>&nbsp;{languagePrimary ? "NUMER LICENCJI" : "LICENSE NUMBER"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="middleContainer__rightContainer">
          <div className="rightContainer__leftContainer">
            <div className="leftContainer__backgroundContainer">
              <div className="backgroundContainer__textContainer">
                {languagePrimary ? "JAK NAS" : "HOW TO FIND"}
                <br />
                {languagePrimary ? "ZNALEŹĆ?" : "US?"}&nbsp;<i className="bi bi-arrow-right-square-fill textContainer__icon"></i>
              </div>
            </div>
          </div>
          <div className="rightContainer__rightContainer">
            <div className="rightContainer__backgroundContainer">
              <div className="backgroundContainer__textContainer" onClick={showMapDesktopHandler}>
                {mapDesktopText}
                <br />
                {languagePrimary ? "MAPĘ" : "MAP"}&nbsp;<i className={showMapDekstop ? "bi bi-arrow-up-circle-fill textContainer__icon" : "bi bi-arrow-up-circle-fill textContainer__icon"}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={footerDesktopBottom} className="footerDesktop__bottomContainer">
        <div className="bottomContainer__text">&#169;&nbsp;{languagePrimary ? "WSZYSTKIE PRAWA ZASTRZEŻONE" : "ALL RIGHTS RESERVED"}</div>
        <div className="bottomContainer__leftContainer"></div>
        <div className="bottomContainer__rightContainer"></div>
      </div>
    </footer>
  );
};

export default FooterDesktop;
