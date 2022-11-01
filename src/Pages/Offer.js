import "./Offer.scss";
import Slider from "../Components/Slider/Slider";

const Offer = (props) => {
  const moveSlider = (moveSlider) => {
    moveSlider();
  }
  return (
    <main className="offer">
      <Slider moveSlider={moveSlider}/>
    </main>
  );
};

export default Offer;
