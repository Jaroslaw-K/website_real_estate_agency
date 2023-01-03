import "./Offer.scss";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
// DATA FOR SLIDER
import { autoMoveSliderData } from "../data/data";
// COMPONENTS
import Slider from "../Components/Slider/Slider";
import SearchEngine from "../Components/SearchEngine/SearchEngine";

const Offer = () => {
  const darkMode = useSelector((state) => state.darkMode); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
  const languagePrimary = useSelector((state) => state.languagePrimary);  // RESPONSIBLE FOR WEBSITE LANGUAGE - ENGLISH OR POLISH
  const moveSlider = (moveSlider) => {
    moveSlider(); // FUNCTION RESPONSIBLE FOR AUTO-MOVE SLIDER
  };
  return (
    <main className={darkMode ? "offer offer--dark" : "offer offer--bright"}>
      <Slider moveSlider={moveSlider} slidesArray={autoMoveSliderData} />
      <div className="offer__searchBackground">
        <div className="searchBackground__background">
          <SearchEngine />
          {useMediaQuery({ maxWidth: 1200 }) && <div className="background__info">{languagePrimary ? "CO ROBIMY?" : "WHAT WE DO?"}</div>}
        </div>
      </div>
    </main>
  );
};

export default Offer;
