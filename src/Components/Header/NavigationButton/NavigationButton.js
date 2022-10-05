import "./NavigationButton.scss";
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const NavigationButton = (props) => {
  const [initialRender, setInitialRender] = useState(true);
  const buttonLineTop = useRef();
  const buttonLineMiddle = useRef();
  const buttonLineBottom = useRef();

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }
    if (props.showNav === true) {
      buttonLineTop.current.classList.remove("button__line--topTransformClose");
      buttonLineMiddle.current.classList.remove("button__line--middleTransformClose");
      buttonLineBottom.current.classList.remove("button__line--bottomTransformClose");
      buttonLineTop.current.classList.add("button__line--topTransformOpen");
      buttonLineMiddle.current.classList.add("button__line--middleTransformOpen");
      buttonLineBottom.current.classList.add("button__line--bottomTransformOpen");
    }
    if (props.showNav === false) {
      buttonLineTop.current.classList.remove("button__line--topTransformOpen");
      buttonLineMiddle.current.classList.remove("button__line--middleTransformOpen");
      buttonLineBottom.current.classList.remove("button__line--bottomTransformOpen");
      buttonLineTop.current.classList.add("button__line--topTransformClose");
      buttonLineMiddle.current.classList.add("button__line--middleTransformClose");
      buttonLineBottom.current.classList.add("button__line--bottomTransformClose");
    }
  }, [props.showNav]);

  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className="navContainer__button" onClick={props.onToggleNavHandler}>
      <div ref={buttonLineTop} className={darkMode ? "button__line button__line--dark button__line--top" : "button__line button__line--bright button__line--top"}></div>
      <div ref={buttonLineMiddle} className={darkMode ? "button__line button__line--dark button__line--middle" : "button__line button__line--bright button__line--middle"}></div>
      <div ref={buttonLineBottom} className={darkMode ? "button__line button__line--dark button__line--bottom" : "button__line button__line--bright button__line--bottom"}></div>
    </div>
  );
};

export default NavigationButton;
