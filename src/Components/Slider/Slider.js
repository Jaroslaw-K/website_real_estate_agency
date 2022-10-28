import { Fragment } from "react";
import SliderDesktop from "./SliderDesktop/SliderDesktop";
import SliderMobile from "./SliderMobile/SliderMobile";
import { BrowserView, MobileView } from "react-device-detect";

const Slider = () => {
  return (
    <Fragment>
      <BrowserView>
        <SliderDesktop />
      </BrowserView>
      <MobileView>
        <SliderMobile />
      </MobileView>
    </Fragment>
  );
};

export default Slider;
