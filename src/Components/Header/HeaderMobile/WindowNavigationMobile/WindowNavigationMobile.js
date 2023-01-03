import "./WindowNavigationMobile.scss";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const WindowNavigationMobile = (props) => {
  const [initialRender, setInitialRender] = useState(true);
  const darkMode = useSelector((state) => state.darkMode); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
  const languagePrimary = useSelector((state) => state.languagePrimary); // RESPONSIBLE FOR WEBSITE LANGUAGE - ENGLISH OR POLISH
  const windowNavigationMobile = useRef();
  const windowNavigationMobileLeftContainer = useRef();
  const windowNavigationMobileRightContainer = useRef();

  useEffect(() => { // RESPONSIBLE FOR SHOWING/HIDING MOBILE NAVIGATION
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
    <nav ref={windowNavigationMobile} className={darkMode ? "windowNavigationMobile windowNavigationMobile--dark" : "windowNavigationMobile windowNavigationMobile--bright"}>
      <div ref={windowNavigationMobileLeftContainer} className="windowNavigationMobile__leftContainer">
        <div className="leftContainer__container">
          <div className="container__navLinksContainer">
            <NavLink onClick={props.onToggleNavHandler} to="" className="navLinksContainer__link">
              {languagePrimary ? "OFERTA" : "OFFER"}
            </NavLink>
            <NavLink onClick={props.onToggleNavHandler} to="/sell-or-rent" className="navLinksContainer__link">
              {languagePrimary ? "SPRZEDAŻ/WYNAJEM" : "SELL/RENT"}
            </NavLink>
            <NavLink onClick={props.onToggleNavHandler} to="/about-us" className="navLinksContainer__link">
              {languagePrimary ? "O NAS" : "ABOUT US"}
            </NavLink>
            <NavLink onClick={props.onToggleNavHandler} to="/privacy-policy" className="navLinksContainer__link">
              {languagePrimary ? "POLITYKA RODO" : "PRIVACY POLICY"}
            </NavLink>
            <NavLink onClick={props.onToggleNavHandler} to="/contact" className="navLinksContainer__link">
              {languagePrimary ? "KONTAKT" : "CONTACT"}
            </NavLink>
          </div>
        </div>
      </div>
      <div ref={windowNavigationMobileRightContainer} className="windowNavigationMobile__rightContainer">
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
