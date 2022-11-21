import "./Offer.scss";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Slider from "../Components/Slider/Slider";
import { autoMoveSliderData } from "../data/data";
import SearchEngine from "../Components/SearchEngine/SearchEngine";

const Offer = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const languagePrimary = useSelector((state) => state.languagePrimary);
  const moveSlider = (moveSlider) => {
    moveSlider();
  };
  return (
    <main className={darkMode ? "offer offer--dark" : "offer offer--bright"}>
      <Slider moveSlider={moveSlider} slidesArray={autoMoveSliderData} />
      <div className="offer__searchBackground">
        <div className="searchBackground__background">
          <SearchEngine />
          {useMediaQuery({ maxWidth: 1200 }) && <div className="background__info">{languagePrimary? "CO ROBIMY?":"WHAT WE DO?"}</div>}
        </div>
      </div>
    </main>
  );
};

export default Offer;
