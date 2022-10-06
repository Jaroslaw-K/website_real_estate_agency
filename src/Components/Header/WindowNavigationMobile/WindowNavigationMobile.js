
import "./WindowNavigationMobile.scss";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const WindowNavigationMobile = (props) => {
  const [initialRender, setInitialRender] = useState(true);
  const darkMode = useSelector((state) => state.darkMode);
  const languagePrimary = useSelector((state) => state.languagePrimary);
  const windowNavigationMobile = useRef();
  const windowNavigationMobileLeftContainer = useRef();
  const windowNavigationMobileRightContainer = useRef();

  useEffect(() => {
    if (initialRender === true) {
      setInitialRender(false);
      return;
    }

    if (props.showNav === true) {
      windowNavigationMobile.current.classList.remove("windowNavigationMobile--hide");
      windowNavigationMobileLeftContainer.current.classList.remove("windowNavigationMobile__leftContainer--hide");
      windowNavigationMobileRightContainer.current.classList.remove("windowNavigationMobile__rightContainer--hide");
      windowNavigationMobile.current.classList.add("windowNavigationMobile--show");
      windowNavigationMobileLeftContainer.current.classList.add("windowNavigationMobile__leftContainer--show");
      windowNavigationMobileRightContainer.current.classList.add("windowNavigationMobile__rightContainer--show");
    }
    if (props.showNav === false) {
      windowNavigationMobile.current.classList.remove("windowNavigationMobile--show");
      windowNavigationMobileLeftContainer.current.classList.remove("windowNavigationMobile__leftContainer--show");
      windowNavigationMobileRightContainer.current.classList.remove("windowNavigationMobile__rightContainer--show");
      windowNavigationMobile.current.classList.add("windowNavigationMobile--hide");
      windowNavigationMobileLeftContainer.current.classList.add("windowNavigationMobile__leftContainer--hide");
      windowNavigationMobileRightContainer.current.classList.add("windowNavigationMobile__rightContainer--hide");
    }
  }, [props.showNav]);

  return (
    <nav ref={windowNavigationMobile} className="windowNavigationMobile">
      <div ref={windowNavigationMobileLeftContainer} className="windowNavigationMobile__leftContainer">
        <div className={darkMode ? "leftContainer__container leftContainer__container--dark" : "leftContainer__container leftContainer__container--bright"}>
          <div className="container__navLinksContainer">
            <NavLink onClick={props.onToggleNavHandler} to="" className={darkMode ? "navLinksContainer__link navLinksContainer__link--dark" : "navLinksContainer__link navLinksContainer__link--bright"}>
              {languagePrimary ? "OFERTA" : "OFFER"}
            </NavLink>
            <NavLink onClick={props.onToggleNavHandler} to="/sell-or-rent" className={darkMode ? "navLinksContainer__link navLinksContainer__link--dark" : "navLinksContainer__link navLinksContainer__link--bright"}>
              {languagePrimary ? "SPRZEDAŻ/WYNAJEM" : "SELL/RENT"}
            </NavLink>
            <NavLink onClick={props.onToggleNavHandler} to="/about-us" className={darkMode ? "navLinksContainer__link navLinksContainer__link--dark" : "navLinksContainer__link navLinksContainer__link--bright"}>
              {languagePrimary ? "O NAS" : "ABOUT US"}
            </NavLink>
            <NavLink onClick={props.onToggleNavHandler} to="/privacy-policy" className={darkMode ? "navLinksContainer__link navLinksContainer__link--dark" : "navLinksContainer__link navLinksContainer__link--bright"}>
              {languagePrimary ? "POLITYKA RODO" : "PRIVACY POLICY"}
            </NavLink>
            <NavLink onClick={props.onToggleNavHandler} to="/contact" className={darkMode ? "navLinksContainer__link navLinksContainer__link--dark" : "navLinksContainer__link navLinksContainer__link--bright"}>
              {languagePrimary ? "KONTAKT" : "CONTACT"}
            </NavLink>
          </div>
        </div>
      </div>
      <div ref={windowNavigationMobileRightContainer} className={darkMode ? "windowNavigationMobile__rightContainer windowNavigationMobile__rightContainer--dark" : "windowNavigationMobile__rightContainer windowNavigationMobile__rightContainer--bright"}>
        <div className="rightContainer__decorationContainer">
          <hr className="decorationContainer__line" />
          <hr className="decorationContainer__line" />
          <hr className="decorationContainer__line" />
          <hr className="decorationContainer__line" />
          <hr className="decorationContainer__line" />
        </div>
      </div>
    </nav>
  );
};

export default WindowNavigationMobile;
