import "./Header.scss";
import { Fragment, useState } from "react";
import Logo from "../../assets/logo.svg";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import NavigationButton from "./NavigationButton/NavigationButton";
import LanguagesButton from "./LanguagesButton/LanguagesButton";
import DarkModeButton from "./DarkModeButton/DarkModeButton";
import LanguagesList from "./LanguagesList/LanguagesList";
import WindowNavigationMobile from "./WindowNavigationMobile/WindowNavigationMobile";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showLanguagesList, setShowLanguagesList] = useState(false);
  const darkMode = useSelector((state) => state.darkMode);
  const languagePrimary = useSelector((state) => state.languagePrimary);

  const toggleNavHandler = () => {
    setShowNav((previousState) => !previousState);
  };
  const toggleLanguageList = () => {
    setShowLanguagesList((previousState) => !previousState);
  };
  return (
    <Fragment>
      {useMediaQuery({ maxWidth: 1200 }) && (
        <header className="headerMobile">
          <img src={Logo} alt="logo" className="headerMobile__logo" />
          <nav className="headerMobile__navContainer">
            <div className="navContainer__optionsContainer">
              <DarkModeButton />
              <LanguagesButton onToggleLanguageList={toggleLanguageList} />
              <LanguagesList showLanguagesList={showLanguagesList} onToggleLanguageList={toggleLanguageList} />
            </div>
            <NavigationButton onToggleNavHandler={toggleNavHandler} showNav={showNav} />
          </nav>
          <WindowNavigationMobile showNav={showNav} onToggleNavHandler={toggleNavHandler} />
        </header>
      )}
      {!useMediaQuery({ maxWidth: 1200 }) && (
        <header className="headerDesktop">
          <div className="headerDesktop__containerTop">
            <div className="containerTop__left">
              <div className="left__emailContainer">
                <i className="bi bi-envelope-fill"></i>&nbsp;&nbsp;Email;&nbsp;Address
              </div>
              <div className="left__phoneContainer">
                <i className="bi bi-telephone-forward-fill"></i>&nbsp;&nbsp;Phone;&nbsp;Number
              </div>
              <div className="left__line left__line--1"></div>
              <div className="left__line left__line--2"></div>
              <div className="left__line left__line--3"></div>
            </div>
            <div className="containerTop__central">
              <div className="central__decorationContainer">
                <div className="decorationContainer__decoration--left1"></div>
                <div className="decorationContainer__decoration--left2"></div>
                <div className="decorationContainer__decoration--left3"></div>
              </div>
              <img src={Logo} alt="logo" className="central__logo" />
              <div className="decorationContainer__decoration central__decorationContainer">
                <div className="decorationContainer__decoration--right1"></div>
                <div className="decorationContainer__decoration--right2"></div>
                <div className="decorationContainer__decoration--right3"></div>
              </div>
            </div>
            <div className={darkMode ? "containerTop__right containerTop__right--dark" : "containerTop__right containerTop__right--bright"}>
              <div className="right__line right__line--1"></div>
              <div className="right__line right__line--2"></div>
              <div className="right__line right__line--3"></div>
              <div className={darkMode ? "right__backgroundBox right__backgroundBox--dark" : "right__backgroundBox right__backgroundBox--bright"}></div>
              <div className="right__optionsContainer">
                <DarkModeButton />
                <LanguagesButton onToggleLanguageList={toggleLanguageList} />
                <LanguagesList showLanguagesList={showLanguagesList} onToggleLanguageList={toggleLanguageList} />
              </div>
            </div>
          </div>
          <div className={darkMode ? "headerDesktop__containerBottom headerDesktop__containerBottom--dark" : "headerDesktop__containerBottom headerDesktop__containerBottom--bright"}>
            <NavLink to="" className={darkMode ? "containerBottom__link containerBottom__link--dark" : "containerBottom__link containerBottom__link--bright"}>
              {languagePrimary ? "OFERTA" : "OFFER"}
            </NavLink>
            <NavLink to="/sell-or-rent" className={darkMode ? "containerBottom__link containerBottom__link--dark" : "containerBottom__link containerBottom__link--bright"}>
              {languagePrimary ? "SPRZEDAŻ/WYNAJEM" : "SELL/RENT"}
            </NavLink>
            <NavLink to="/about-us" className={darkMode ? "containerBottom__link containerBottom__link--dark" : "containerBottom__link containerBottom__link--bright"}>
              {languagePrimary ? "O NAS" : "ABOUT US"}
            </NavLink>
            <NavLink to="/privacy-policy" className={darkMode ? "containerBottom__link containerBottom__link--dark" : "containerBottom__link containerBottom__link--bright"}>
              {languagePrimary ? "POLITYKA RODO" : "PRIVACY POLICY"}
            </NavLink>
            <NavLink to="/contact" className={darkMode ? "containerBottom__link containerBottom__link--dark" : "containerBottom__link containerBottom__link--bright"}>
              {languagePrimary ? "KONTAKT" : "CONTACT"}
            </NavLink>
          </div>
        </header>
      )}
    </Fragment>
  );
};

export default Header;
