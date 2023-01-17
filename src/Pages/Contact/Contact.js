import "./Contact.scss";
import { BrowserView, MobileView } from "react-device-detect";
// COMPONENTS
import Slider from "../../Components/Slider/Slider";
import ContactMobile from "./ContactMobile/ContactMobile";
import ContactDesktop from "./ContactDesktop/ContactDesktop";
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
        <ContactMobile />
      </MobileView>
      <BrowserView>
        <ContactDesktop />
      </BrowserView>
    </main>
  );
};

export default Contact;
