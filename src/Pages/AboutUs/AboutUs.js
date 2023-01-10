import "./AboutUs.scss";
import { BrowserView, MobileView } from "react-device-detect";
import { useSelector } from "react-redux";
// DATA FOR SLIDER
import { aboutUsSliderDataDesktop, aboutUsSliderDataMobile } from "../../data/data";
// COMPONENTS
import Slider from "../../Components/Slider/Slider";
import AboutUsMobile from "./AboutUsMobile/AboutUsMobile";
import AboutUsDesktop from "./AboutUsDesktop/AboutUsDesktop";

const AboutUs = () => {
  const darkMode = useSelector((state) => state.darkMode); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
  const moveSlider = (moveSlider) => {
    // FUNCTION RESPONSIBLE FOR AUTO-MOVE SLIDER, IT IS NOT CALLED
  };
  return (
    <div className={darkMode ? "aboutUs aboutUs--dark" : "aboutUs aboutUs--bright"}>
      <MobileView>
        <Slider moveSlider={moveSlider} slidesArray={aboutUsSliderDataMobile} />
      </MobileView>
      <BrowserView>
        <Slider moveSlider={moveSlider} slidesArray={aboutUsSliderDataDesktop} />
      </BrowserView>
      <MobileView>
        <AboutUsMobile />
      </MobileView>
      <BrowserView>
        <AboutUsDesktop />
      </BrowserView>
    </div>
  );
};

export default AboutUs;
