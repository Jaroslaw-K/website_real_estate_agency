import "./HeaderMobile.scss";
import Logo from "../../../assets/logo.svg";
// COMPONENTS
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import LanguagesButton from "../LanguagesButton/LanguagesButton";
import LanguagesList from "../LanguagesList/LanguagesList";
import NavigationButton from "./NavigationButton/NavigationButton";
import WindowNavigationMobile from "./WindowNavigationMobile/WindowNavigationMobile";

const HeaderMobile = (props) => {
  return (
    <header className="headerMobile">
      <img src={Logo} alt="logo" className="headerMobile__logo" />
      <nav className="headerMobile__navContainer">
        <div className="navContainer__optionsContainer">
          <DarkModeButton />
          <LanguagesButton onToggleLanguagesList={props.onToggleLanguagesList} />
          <LanguagesList showLanguagesList={props.showLanguagesList} onToggleLanguagesList={props.onToggleLanguagesList} />
        </div>
        <NavigationButton onToggleNavHandler={props.onToggleNavHandler} showNav={props.showNav} />
      </nav>
      <WindowNavigationMobile showNav={props.showNav} onToggleNavHandler={props.onToggleNavHandler} />
    </header>
  );
};

export default HeaderMobile;
