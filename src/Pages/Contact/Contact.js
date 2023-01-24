import "./Contact.scss";
import { useMediaQuery } from "react-responsive";
import { breaktPoint_1200 } from "../../data/variables";
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
      {useMediaQuery({ maxWidth: breaktPoint_1200 }) && <ContactMobile />}
      {!useMediaQuery({ maxWidth: breaktPoint_1200 }) && <ContactDesktop />}
    </main>
  );
};

export default Contact;
