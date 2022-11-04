import { Fragment } from "react";
import SliderDesktop from "./SliderDesktop/SliderDesktop";
import SliderMobile from "./SliderMobile/SliderMobile";
import { BrowserView, MobileView } from "react-device-detect";

const Slider = (props) => {
  return (
    <Fragment>
      <BrowserView>
        <SliderDesktop moveSlider={props.moveSlider}  slidesArray={props.slidesArray}/>
      </BrowserView>
      <MobileView>
        <SliderMobile moveSlider={props.moveSlider} slidesArray={props.slidesArray}/>
      </MobileView>
    </Fragment>
  );
};

export default Slider;
