import "./PrivacyPolicy.scss";
import { useMediaQuery } from "react-responsive";
// DATA FOR SLIDER
import { autoMoveSliderData } from "../../data/data";
import { breaktPoint_900 } from "../../data/variables";
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
      {useMediaQuery({ maxWidth: breaktPoint_900 }) && <PrivacyPolicyMobile />}
      {!useMediaQuery({ maxWidth: breaktPoint_900 }) && <PrivacyPolicyDesktop />}
    </main>
  );
};

export default PrivacyPolicy;
