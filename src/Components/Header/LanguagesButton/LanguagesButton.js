import "./LanguagesButton.scss";
import { useSelector } from "react-redux";

const LanguagesButton = (props) => {
  const darkMode = useSelector((state) => state.darkMode);
  const languagePrimary = useSelector((state) => state.languagePrimary);
  return (
    <button className={darkMode ? "languageButton languageButton--dark" : "languageButton languageButton--bright"} onClick={props.onToggleLanguageList}>
      <span className={darkMode ? "languageButton__countryTxt languageButton__countryTxt--dark" : "languageButton__countryTxt languageButton__countryTxt--bright"}>{languagePrimary ? "PL" : "EN"}</span>
    </button>
  );
};

export default LanguagesButton;
