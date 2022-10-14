import "./LanguagesList.scss";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const LanguagesList = (props) => {
  const darkMode = useSelector((state) => state.darkMode);
  const languagePrimary = useSelector((state) => state.languagePrimary);
  const dispatch = useDispatch();
  
  const languagesList = useRef();
  const firstLanguageLi = useRef();
  const secondLanguageLi = useRef();
  const [initialRender, setInitialRender] = useState(true);

  const toggleLanguage1 = () => {
    dispatch({ type: "switchLanguage", languagePrimary: true });
    props.onToggleLanguagesList();
  };
  const toggleLanguage2 = () => {
    dispatch({ type: "switchLanguage", languagePrimary: false });
    props.onToggleLanguagesList();
  };

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }
    if (props.showLanguagesList === true) {
      languagesList.current.classList.remove("languagesList--hide")
      firstLanguageLi.current.classList.remove("languagesList__country--hide");
      secondLanguageLi.current.classList.remove("languagesList__country--hide");
      languagesList.current.classList.add("languagesList--show")
      firstLanguageLi.current.classList.add("languagesList__country--show");
      secondLanguageLi.current.classList.add("languagesList__country--show");
    }
    if (props.showLanguagesList === false) {
      languagesList.current.classList.remove("languagesList--show")
      firstLanguageLi.current.classList.remove("languagesList__country--show");
      secondLanguageLi.current.classList.remove("languagesList__country--show");
      languagesList.current.classList.add("languagesList--hide")
      firstLanguageLi.current.classList.add("languagesList__country--hide");
      secondLanguageLi.current.classList.add("languagesList__country--hide");
    }
  }, [props.showLanguagesList]);

  
  return (
    <ul ref={languagesList} className={darkMode? "languagesList languagesList--dark":"languagesList languagesList--bright"}>
      <li ref={firstLanguageLi} className="languagesList__country" onClick={toggleLanguage1}>
        <span className="fi fi-pl country__flag"></span>
        <span className={languagePrimary ? "activeLanguage" : ""}>&nbsp;{languagePrimary ? "POLSKI" : "POLISH"}</span>
      </li>
      <li ref={secondLanguageLi} className="languagesList__country" onClick={toggleLanguage2}>
        <span className="fi fi-gb country__flag"></span>
        <span className={languagePrimary ? "" : "activeLanguage"}>&nbsp;{languagePrimary ? "ANGIELSKI" : "ENGLISH"}</span>
      </li>
    </ul>
  );
};

export default LanguagesList;
