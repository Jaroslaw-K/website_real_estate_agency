import "./HeaderDesktop.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../../../assets/logo.svg";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import LanguagesButton from "../LanguagesButton/LanguagesButton";
import LanguagesList from "../LanguagesList/LanguagesList";

const HeaderDesktop = (props) => {
  const darkMode = useSelector((state) => state.darkMode);
  const languagePrimary = useSelector((state) => state.languagePrimary);
  return (
    <header className="headerDesktop">
      <div className="headerDesktop__containerTop">
        <div className="containerTop__left">
          <div className="left__emailContainer">
            <i className="bi bi-envelope-fill"></i>&nbsp;&nbsp;Email&nbsp;Address
          </div>
          <div className="left__phoneContainer">
            <i className="bi bi-telephone-forward-fill"></i>&nbsp;&nbsp;Phone&nbsp;Number
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
            <LanguagesButton onToggleLanguagesList={props.onToggleLanguagesList} />
            <LanguagesList showLanguagesList={props.showLanguagesList} onToggleLanguagesList={props.onToggleLanguagesList} />
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
  );
};

export default HeaderDesktop;
