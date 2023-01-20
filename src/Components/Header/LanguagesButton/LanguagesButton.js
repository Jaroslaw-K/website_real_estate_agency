import "./LanguagesButton.scss";
import { useSelector } from "react-redux";

const LanguagesButton = (props) => {
  const darkMode = useSelector((state) => state.darkMode); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
  const languagePrimary = useSelector((state) => state.languagePrimary); // RESPONSIBLE FOR WEBSITE LANGUAGE - ENGLISH OR POLISH
  return (
    <button className={darkMode ? "languageButton languageButton--styling languageButton--dark" : "languageButton languageButton--styling languageButton--bright"} onClick={props.onToggleLanguagesList}>
      <span className={darkMode ? "languageButton__countryText" : "languageButton__countryText"}>{languagePrimary ? "PL" : "EN"}</span>
    </button>
  );
};

export default LanguagesButton;
