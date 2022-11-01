import "./HeaderDesktop.scss";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../../../assets/logo.svg";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import LanguagesButton from "../LanguagesButton/LanguagesButton";
import LanguagesList from "../LanguagesList/LanguagesList";

const HeaderDesktop = (props) => {
  const darkMode = useSelector((state) => state.darkMode);
  const languagePrimary = useSelector((state) => state.languagePrimary);
  const headerDesktopTop = useRef();

  return (
    <header className={darkMode ? "headerDesktop headerDesktop--dark" : "headerDesktop headerDesktop--bright"}>
      <div ref={headerDesktopTop} className="headerDesktop__containerTop">
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
            <div className="decorationContainer__decoration decorationContainer__decoration--left1"></div>
            <div className="decorationContainer__decoration decorationContainer__decoration--left2"></div>
            <div className="decorationContainer__decoration decorationContainer__decoration--left3"></div>
          </div>
          <img src={Logo} alt="logo" className="central__logo" />
          <div className="central__decorationContainer">
            <div className="decorationContainer__decoration decorationContainer__decoration--right1"></div>
            <div className="decorationContainer__decoration decorationContainer__decoration--right2"></div>
            <div className="decorationContainer__decoration decorationContainer__decoration--right3"></div>
          </div>
        </div>
        <div className="containerTop__right">
          <div className="right__line right__line--1"></div>
          <div className="right__line right__line--2"></div>
          <div className="right__line right__line--3"></div>
          <div className="right__backgroundBox"></div>
          <div className="right__optionsContainer">
            <DarkModeButton />
            <LanguagesButton onToggleLanguagesList={props.onToggleLanguagesList} />
            <LanguagesList showLanguagesList={props.showLanguagesList} onToggleLanguagesList={props.onToggleLanguagesList} />
          </div>
        </div>
      </div>
      <div className="headerDesktop__containerBottom">
        <NavLink to="" className="containerBottom__link">
          {languagePrimary ? "OFERTA" : "OFFER"}
        </NavLink>
        <NavLink to="/sell-or-rent" className="containerBottom__link">
          {languagePrimary ? "SPRZEDAŻ/WYNAJEM" : "SELL/RENT"}
        </NavLink>
        <NavLink to="/about-us" className="containerBottom__link">
          {languagePrimary ? "O NAS" : "ABOUT US"}
        </NavLink>
        <NavLink to="/privacy-policy" className="containerBottom__link">
          {languagePrimary ? "POLITYKA RODO" : "PRIVACY POLICY"}
        </NavLink>
        <NavLink to="/contact" className="containerBottom__link">
          {languagePrimary ? "KONTAKT" : "CONTACT"}
        </NavLink>
      </div>
    </header>
  );
};

export default HeaderDesktop;
