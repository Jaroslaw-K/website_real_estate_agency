import "./FooterMobile.scss";
import { useState, useEffect, useRef, Fragment } from "react";
import { useSelector } from "react-redux";

import Logo from "../../../assets/logo.svg";

const FooterMobile = (props) => {
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
    <footer className="footerMobile">
      <div className="footerMobile__map">
        <iframe
          // ref={desktopMap}
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
  );
};

export default FooterMobile;
