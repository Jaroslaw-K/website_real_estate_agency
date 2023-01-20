import { Fragment, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { breaktPoint_1200 } from "../../data/variables";
// COMPONENTS
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showLanguagesList, setShowLanguagesList] = useState(false);

  const toggleNavHandler = () => {
    // RESPONSIBLE FOR SHOWING/HIDING MOBILE NAVIGATION
    setShowNav((previousState) => !previousState);
  };
  const toggleLanguagesList = () => {
    // REPONSIBLE FOR DISPLAYING LANGUAGES LIST
    setShowLanguagesList((previousState) => !previousState);
  };
  return (
    <Fragment>
      {useMediaQuery({ maxWidth: breaktPoint_1200 }) && <HeaderMobile onToggleLanguagesList={toggleLanguagesList} showLanguagesList={showLanguagesList} onToggleNavHandler={toggleNavHandler} showNav={showNav} />}
      {!useMediaQuery({ maxWidth: breaktPoint_1200 }) && <HeaderDesktop onToggleLanguagesList={toggleLanguagesList} showLanguagesList={showLanguagesList} />}
    </Fragment>
  );
};

export default Header;
