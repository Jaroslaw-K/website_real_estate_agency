import { useMediaQuery } from "react-responsive";
import { breaktPoint_1200 } from "../../data/variables";
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
      {useMediaQuery({ maxWidth: breaktPoint_1200 }) && <SellRentMobile />}
      {!useMediaQuery({ maxWidth: breaktPoint_1200 }) && <SellRentDesktop />}
    </main>
  );
};

export default Contact;
