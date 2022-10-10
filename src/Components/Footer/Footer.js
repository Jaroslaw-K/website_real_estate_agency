import "./Footer.scss";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Logo from "../../assets/logo.svg";

const Footer = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const [showMap, setShowMap] = useState(false);
  const mapLeftContainer = useRef();
  const mapRightContainer = useRef();

  const showMapHandler = () => {
    setShowMap((prevousState) => !prevousState);
  };

  useEffect(() => {
    if (showMap === true) {
      mapLeftContainer.current.classList.add("map__leftContainer--show");
      mapRightContainer.current.classList.add("map__rightContainer--show");
    }
  }, [showMap]);

  return (
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
              HOW TO FIND
              <br />
              US?&nbsp;<i className={darkMode ? "bi bi-arrow-right-square-fill container__icon--dark" : "bi bi-arrow-right-square-fill container__icon--bright"}></i>
            </div>
          </div>
        </div>
        <div ref={mapRightContainer} className="map__rightContainer">
          <div className="rightContainer__text" onClick={showMapHandler}>
            SHOW
            <br />
            MAP
          </div>
        </div>
      </div>
      <div className="footerMobile__data">
        <div className="data__leftContainer">
          <div className={darkMode? "leftContainer__container leftContainer__container--dark":"leftContainer__container leftContainer__container--bright"}>
            <img className={darkMode? "container__logo container__logo--dark":"container__logo container__logo--bright"} src={Logo} alt="logo"/>
            <div className="container__companyData">
              <p className={darkMode? "companyData__information companyData__information--dark":"companyData__information companyData__information--bright"}>REAL ESTATE AGENCY<br/>"COMPANY NAME"</p>
              <p className={darkMode? "companyData__information companyData__information--dark":"companyData__information companyData__information--bright"}>FIRST LINE OF ADDRESS</p>
              <p className={darkMode? "companyData__information companyData__information--dark":"companyData__information companyData__information--bright"}>SECOND LINE OF ADDRESS</p>
           
              <p className={darkMode? "companyData__information companyData__information--dark":"companyData__information companyData__information--bright"}>8.A.M. - 4 P.M.</p>
              <p className={darkMode? "companyData__information companyData__information--dark":"companyData__information companyData__information--bright"}>+00 000 000 000</p>
              <p className={darkMode? "companyData__information companyData__information--dark":"companyData__information companyData__information--bright"}>+00 000 000 000</p>
              <p className={darkMode? "companyData__information companyData__information--dark":"companyData__information companyData__information--bright"}>EMAIL ADDRESS</p>
              <p className={darkMode? "companyData__information companyData__information--dark":"companyData__information companyData__information--bright"}>LICENSE NUMBER</p>
            </div>
          </div>
        </div>
        <div className="data__rightContainer">
            <p className="rightContainer__dataInfo"><i className="bi bi-house-fill"></i>&nbsp;ADDRESS</p>
            <p className="rightContainer__dataInfo"><i className="bi bi-clock-fill"></i>&nbsp;OPENING HOURS</p>
            <p className="rightContainer__dataInfo"><i className="bi bi-telephone-fill"></i>&nbsp;PHONE 1</p>
            <p className="rightContainer__dataInfo"><i className="bi bi-phone-fill"></i>&nbsp;PHONE 2</p>
            <p className="rightContainer__dataInfo"><i className="bi bi-envelope-fill"></i>&nbsp;EMAIL ADDRESS</p>
            <p className="rightContainer__dataInfo"><i className="bi bi-person-lines-fill"></i>&nbsp;LICENSE NUMBER</p>
        </div>
      </div>
      <div className="footerMobile__copyright">
        <div className="copyright__text">&#169;&nbsp;ALL RIGHTS RESERVED</div>
        <div className="copyright__leftContainer"></div>
        <div className="copyright__rightContainer"></div>
      </div>
    </footer>
  );
};

export default Footer;
