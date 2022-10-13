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
      buttonLineTop.current.classList.remove("navigationButton__line--topTransformClose");
      buttonLineMiddle.current.classList.remove("navigationButton__line--middleTransformClose");
      buttonLineBottom.current.classList.remove("navigationButton__line--bottomTransformClose");
      buttonLineTop.current.classList.add("navigationButton__line--topTransformOpen");
      buttonLineMiddle.current.classList.add("navigationButton__line--middleTransformOpen");
      buttonLineBottom.current.classList.add("navigationButton__line--bottomTransformOpen");
    }
    if (props.showNav === false) {
      buttonLineTop.current.classList.remove("navigationButton__line--topTransformOpen");
      buttonLineMiddle.current.classList.remove("navigationButton__line--middleTransformOpen");
      buttonLineBottom.current.classList.remove("navigationButton__line--bottomTransformOpen");
      buttonLineTop.current.classList.add("navigationButton__line--topTransformClose");
      buttonLineMiddle.current.classList.add("navigationButton__line--middleTransformClose");
      buttonLineBottom.current.classList.add("navigationButton__line--bottomTransformClose");
    }
  }, [props.showNav]);

  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className="navigationButton" onClick={props.onToggleNavHandler}>
      <div ref={buttonLineTop} className={darkMode ? "navigationButton__line navigationButton__line--dark navigationButton__line--top" : "navigationButton__line navigationButton__line--bright navigationButton__line--top"}></div>
      <div ref={buttonLineMiddle} className={darkMode ? "navigationButton__line navigationButton__line--dark navigationButton__line--middle" : "navigationButton__line navigationButton__line--bright navigationButton__line--middle"}></div>
      <div ref={buttonLineBottom} className={darkMode ? "navigationButton__line navigationButton__line--dark navigationButton__line--bottom" : "navigationButton__line navigationButton__line--bright navigationButton__line--bottom"}></div>
    </div>
  );
};

export default NavigationButton;
