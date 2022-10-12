import "./Footer.scss";
import { useState, useEffect, useRef, Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import Logo from "../../assets/logo.svg";

const Footer = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const languagePrimary = useSelector((state) => state.languagePrimary);
  const [showMapMobile, setShowMapMobile] = useState(false);
  const [showMapDekstop, setShowMapDesktop] = useState(false);
  const mapLeftContainer = useRef();
  const mapRightContainer = useRef();
  const desktopMap = useRef();
  const footerDesktopBottom = useRef();

  const showMapMobileHandler = () => {
    setShowMapMobile((prevousState) => !prevousState);
  };

  const showMapDesktopHandler = () => {
    setShowMapDesktop((prevousState) => !prevousState);
    
    // setTimeout(() => {
    //   footerDesktopBottom.current.scrollIntoView({ behavior: "smooth", inline: "end" });
    // }, 100);
  };

  useEffect(() => {
    if (showMapMobile === true) {
      mapLeftContainer.current.classList.add("map__leftContainer--show");
      mapRightContainer.current.classList.add("map__rightContainer--show");
    }
  }, [showMapMobile]);

  useEffect(() => {
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
    <Fragment>
      {useMediaQuery({ maxWidth: 1000 }) && (
        <footer className="footerMobile">
          <div className="footerMobile__map">
            <iframe
              className="map__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5035856.899819962!2d19.134378599999998!3d51.953750549999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47009964a4640bbb%3A0x97573ca49cc55ea!2sPolska!5e0!3m2!1spl!2spl!4v1660920589679!5m2!1spl!2spl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            />

            <div ref={mapLeftContainer} className="map__leftContainer">
              <div className={darkMode ? "leftContainer__container leftContainer__container--dark" : "leftContainer__container leftContainer__container--bright"}>
                <div className={darkMode ? "container__text container__text--dark" : "container__text container__text--bright"}>
                  {languagePrimary ? "JAK NAS" : "HOW TO FIND"}
                  <br />
                  {languagePrimary ? "ZNALEŹĆ?" : "US?"}&nbsp;<i className={darkMode ? "bi bi-arrow-right-square-fill container__icon--dark" : "bi bi-arrow-right-square-fill container__icon--bright"}></i>
                </div>
              </div>
            </div>
            <div ref={mapRightContainer} className="map__rightContainer">
              <div className="rightContainer__text" onClick={showMapMobileHandler}>
                {languagePrimary ? "POKAŻ" : "SHOW"}
                <br />
                {languagePrimary ? "MAPĘ" : "MAP"}
              </div>
            </div>
          </div>
          <div className="footerMobile__data">
            <div className="data__leftContainer">
              <div className={darkMode ? "leftContainer__container leftContainer__container--dark" : "leftContainer__container leftContainer__container--bright"}>
                <img className={darkMode ? "container__logo container__logo--dark" : "container__logo container__logo--bright"} src={Logo} alt="logo" />
                <div className="container__companyData">
                  <p className={darkMode ? "companyData__information companyData__information--dark" : "companyData__information companyData__information--bright"}>
                    {languagePrimary ? "AGENCJA NIERUCHOMOŚCI" : "REAL ESTATE AGENCY"}
                    <br />
                    {languagePrimary ? `"NAZWA AGENCJI"` : `"AGENCY NAME"`}
                  </p>
                  <p className={darkMode ? "companyData__information companyData__information--dark" : "companyData__information companyData__information--bright"}>{languagePrimary ? "PIERWSZA LINIJKA ADRESU" : "FIRST LINE OF ADDRESS"}</p>
                  <p className={darkMode ? "companyData__information companyData__information--dark" : "companyData__information companyData__information--bright"}>{languagePrimary ? "DRUGA LINIJKA ADRESU" : "SECOND LINE OF ADDRESS"}</p>

                  <p className={darkMode ? "companyData__information companyData__information--dark" : "companyData__information companyData__information--bright"}>{languagePrimary ? "8.00 - 16.00" : "8 A.M - 4 P.M."}</p>
                  <p className={darkMode ? "companyData__information companyData__information--dark" : "companyData__information companyData__information--bright"}>+00 000 000 000</p>
                  <p className={darkMode ? "companyData__information companyData__information--dark" : "companyData__information companyData__information--bright"}>+00 000 000 000</p>
                  <p className={darkMode ? "companyData__information companyData__information--dark" : "companyData__information companyData__information--bright"}>{languagePrimary ? "ADRES EMAIL" : "EMAIL ADDRESS"}</p>
                  <p className={darkMode ? "companyData__information companyData__information--dark" : "companyData__information companyData__information--bright"}>{languagePrimary ? "NUMER" : "NUMBER"}</p>
                </div>
              </div>
            </div>
            <div className="data__rightContainer">
              <p className="rightContainer__dataInfo">
                <i className="bi bi-house-fill"></i>&nbsp;{languagePrimary ? "ADRES" : "ADDRESS"}
              </p>
              <p className="rightContainer__dataInfo">
                <i className="bi bi-clock-fill"></i>&nbsp;{languagePrimary ? "OTWARTE" : "OPENING HOURS"}
              </p>
              <p className="rightContainer__dataInfo">
                <i className="bi bi-telephone-fill"></i>&nbsp;{languagePrimary ? "TELEFON 1" : "PHONE 1"}
              </p>
              <p className="rightContainer__dataInfo">
                <i className="bi bi-phone-fill"></i>&nbsp;{languagePrimary ? "TELEFON 2" : "PHONE 2"}
              </p>
              <p className="rightContainer__dataInfo">
                <i className="bi bi-envelope-fill"></i>&nbsp;{languagePrimary ? "ADRES EMAIL" : "EMAIL ADDRESS"}
              </p>
              <p className="rightContainer__dataInfo">
                <i className="bi bi-person-lines-fill"></i>&nbsp;{languagePrimary ? "NUMER LICENCJI" : "LICENSE NUMBER"}
              </p>
            </div>
          </div>
          <div className={darkMode ? "footerMobile__copyright footerMobile__copyright--dark" : "footerMobile__copyright footerMobile__copyright--bright"}>
            <div className={darkMode ? "copyright__text copyright__text--dark" : "copyright__text copyright__text--bright"}>&#169;&nbsp;{languagePrimary ? "WSZYSTKIE PRAWA ZASTRZEŻONE" : "ALL RIGHTS RESERVED"}</div>
            <div className={darkMode ? "copyright__leftContainer copyright__leftContainer--dark" : "copyright__leftContainer copyright__leftContainer--bright"}></div>
            <div className="copyright__rightContainer"></div>
          </div>
        </footer>
      )}
      {!useMediaQuery({ maxWidth: 1000 }) && (
        <footer className="footerDesktop">
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
            <div className={darkMode ? "middleContainer__leftContainer middleContainer__leftContainer--dark" : "middleContainer__leftContainer middleContainer__leftContainer--bright"}>
              <div className="leftContainer__logoContainer">
                <img className={darkMode ? "logoContainer__logo logoContainer__logo--dark" : "logoContainer__logo logoContainer__logo--bright"} src={Logo} alt="logo" />
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
            <div className="topContainer__rightContainer">
              <div className="rightContainer__leftContainer">
                <div className={darkMode ? "leftContainer__backgroundContainer leftContainer__backgroundContainer--dark" : "leftContainer__backgroundContainer leftContainer__backgroundContainer--bright"}>
                  <div className={darkMode ? "backgroundContainer__textContainer backgroundContainer__textContainer--dark" : "backgroundContainer__textContainer backgroundContainer__textContainer--bright"}>
                    {languagePrimary ? "JAK NAS" : "HOW TO FIND"}
                    <br />
                    {languagePrimary ? "ZNALEŹĆ?" : "US?"}&nbsp;<i className={darkMode ? "bi bi-arrow-right-square-fill textContainer__icon--dark" : "bi bi-arrow-right-square-fill textContainer__icon--bright"}></i>
                  </div>
                </div>
              </div>
              <div className="rightContainer__rightContainer">
                <div className={darkMode ? "rightContainer__background rightContainer__background--dark" : "rightContainer__background rightContainer__background--bright"}>
                  <div className={darkMode ? "background__textContainer background__textContainer--dark" : "background__textContainer background__textContainer--bright"} onClick={showMapDesktopHandler}>
                    {mapDesktopText}
                    <br />
                    {languagePrimary ? "MAPĘ" : "MAP"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div ref={footerDesktopBottom} className={darkMode ? "footerDesktop__bottomContainer footerDesktop__bottomContainer--dark" : "footerDesktop__bottomContainer footerDesktop__bottomContainer--bright"}>
            <div className={darkMode ? "bottomContainer__text bottomContainer__text--dark" : "bottomContainer__text bottomContainer__text--bright"}>&#169;&nbsp;{languagePrimary ? "WSZYSTKIE PRAWA ZASTRZEŻONE" : "ALL RIGHTS RESERVED"}</div>
            <div className={darkMode ? "bottomContainer__leftContainer bottomContainer__leftContainer--dark" : "bottomContainer__leftContainer bottomContainer__leftContainer--bright"}></div>
            <div className="bottomContainer__rightContainer"></div>
          </div>
        </footer>
      )}
    </Fragment>
  );
};

export default Footer;
