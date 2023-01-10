import "./PrivacyPolicy.scss";
import { BrowserView, MobileView } from "react-device-detect";
// DATA FOR SLIDER
import { autoMoveSliderData } from "../../data/data";
// COMPONENTS
import Slider from "../../Components/Slider/Slider";
import PrivacyPolicyMobile from "./PrivacyPolicyMobile/PrivacyPolicyMobile";
import PrivacyPolicyDesktop from "./PrivacyPolicyDesktop/PrivacyPolicyDesktop";

const PrivacyPolicy = () => {
  const moveSlider = (moveSlider) => {
    moveSlider(); // FUNCTION RESPONSIBLE FOR AUTO-MOVE SLIDER
  };
  return (
    <main className="privacyPolicy">
      <Slider moveSlider={moveSlider} slidesArray={autoMoveSliderData} />
      <MobileView>
        <PrivacyPolicyMobile />
      </MobileView>
      <BrowserView>
        <PrivacyPolicyDesktop />
      </BrowserView>
    </main>
  );
};

export default PrivacyPolicy;
