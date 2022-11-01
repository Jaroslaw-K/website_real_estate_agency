import { Fragment } from "react";
import SliderDesktop from "./SliderDesktop/SliderDesktop";
import SliderMobile from "./SliderMobile/SliderMobile";
import { BrowserView, MobileView } from "react-device-detect";

const Slider = (props) => {
  return (
    <Fragment>
      <BrowserView>
        <SliderDesktop moveSlider={props.moveSlider}/>
      </BrowserView>
      <MobileView>
        <SliderMobile moveSlider={props.moveSlider}/>
      </MobileView>
    </Fragment>
  );
};

export default Slider;
