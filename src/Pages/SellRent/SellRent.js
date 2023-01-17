import { BrowserView, MobileView } from "react-device-detect";
// COMPONENTS
import Slider from "../../Components/Slider/Slider";
import SellRentDesktop from "./SellRentDesktop/SellRentDesktop";
import SellRentMobile from "./SellRentMobile/SellRentMobile";
// DATA FOR SLIDER
import { autoMoveSliderData } from "../../data/data";

const Contact = () => {
  const moveSlider = (moveSlider) => {
    moveSlider(); // FUNCTION RESPONSIBLE FOR AUTO-MOVE SLIDER
  };
  return (
    <main className="contact">
      <Slider moveSlider={moveSlider} slidesArray={autoMoveSliderData} />
      <MobileView>
        <SellRentMobile />
      </MobileView>
      <BrowserView>
        <SellRentDesktop />
      </BrowserView>
    </main>
  );
};

export default Contact;
