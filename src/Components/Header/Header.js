import "./Header.scss";
import { useState } from "react";
import Logo from "../../assets/logo.svg";

import NavigationButton from "./NavigationButton/NavigationButton";
import LanguagesButton from "./LanguagesButton/LanguagesButton";
import DarkModeButton from "./DarkModeButton/DarkModeButton";
import LanguagesList from "./LanguagesList/LanguagesList";
import WindowNavigationMobile from "./WindowNavigationMobile/WindowNavigationMobile";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showLanguagesList, setShowLanguagesList] = useState(false);

  const toggleNavHandler = () => {
    setShowNav((previousState) => !previousState);
  };
  const toggleLanguageList = () => {
    setShowLanguagesList((previousState) => !previousState);
  }
  return (
    <header className="headerMobile">
      <img src={Logo} alt="logo" className="headerMobile__logo" />
      <nav className="headerMobile__navContainer">
        <div className="navContainer__optionsContainer">
         <DarkModeButton/>
         <LanguagesButton onToggleLanguageList={toggleLanguageList}/>
         <LanguagesList showLanguagesList={showLanguagesList} onToggleLanguageList={toggleLanguageList}/>
        </div>
        <NavigationButton onToggleNavHandler={toggleNavHandler} showNav={showNav}/>
      </nav>
    <WindowNavigationMobile showNav={showNav}/>
    </header>
  );
};

export default Header;
