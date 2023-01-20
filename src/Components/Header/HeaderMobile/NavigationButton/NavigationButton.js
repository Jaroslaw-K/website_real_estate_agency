import "./NavigationButton.scss";
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const NavigationButton = (props) => {
  const darkMode = useSelector((state) => state.darkMode); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
  const [initialRender, setInitialRender] = useState(true);
  const buttonLineTop = useRef();
  const buttonLineMiddle = useRef();
  const buttonLineBottom = useRef();

  useEffect(() => { // RESPONSIBLE FOR MOBILE BUTTON ANIMATION 
    if (initialRender) {
      setInitialRender(false);
      return;
    }
    if (props.showNav === true) {
      buttonLineTop.current.classList.remove("navigationButton__line--topAnimationClose");
      buttonLineMiddle.current.classList.remove("navigationButton__line--middleAnimationClose");
      buttonLineBottom.current.classList.remove("navigationButton__line--bottomAnimationClose");
      buttonLineTop.current.classList.add("navigationButton__line--topAnimationOpen");
      buttonLineMiddle.current.classList.add("navigationButton__line--middleAnimationOpen");
      buttonLineBottom.current.classList.add("navigationButton__line--bottomAnimationOpen");
    }
    if (props.showNav === false) {
      buttonLineTop.current.classList.remove("navigationButton__line--topAnimationOpen");
      buttonLineMiddle.current.classList.remove("navigationButton__line--middleAnimationOpen");
      buttonLineBottom.current.classList.remove("navigationButton__line--bottomAnimationOpen");
      buttonLineTop.current.classList.add("navigationButton__line--topAnimationClose");
      buttonLineMiddle.current.classList.add("navigationButton__line--middleAnimationClose");
      buttonLineBottom.current.classList.add("navigationButton__line--bottomAnimationClose");
    }
  }, [props.showNav]);

  return (
    <div className={darkMode ? "navigationButton navigationButton--styling navigationButton--dark" : "navigationButton navigationButton--styling navigationButton--bright"} onClick={props.onToggleNavHandler}>
      <div ref={buttonLineTop} className="navigationButton__line navigationButton__line--top"></div>
      <div ref={buttonLineMiddle} className="navigationButton__line navigationButton__line--middle"></div>
      <div ref={buttonLineBottom} className="navigationButton__line navigationButton__line--bottom"></div>
    </div>
  );
};

export default NavigationButton;
