import "./Offer.scss";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
// DATA FOR SLIDER
import { autoMoveSliderData } from "../../data/data";
// COMPONENTS
import Slider from "../../Components/Slider/Slider";
import SearchEngine from "./SearchEngine/SearchEngine";

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
          {useMediaQuery({ maxWidth: 1200 }) && <div className="background__info background__info--mobile">{languagePrimary ? "CO ROBIMY?" : "WHAT WE DO?"}</div>}
          {!useMediaQuery({ maxWidth: 1200 }) && <div className="background__info background__info--desktop">
            <div className="info__txt">{languagePrimary ? "CO ROBIMY?" : "WHAT WE DO?"}</div>
            <div className="info__container">
              <div className="container__specialisation">
                <div className="specialisation__containerTop"></div>
                <div className="specialisation__containerBottom"></div>
              </div>
              <div className="container__specialisation">1</div>
              <div className="container__specialisation">1</div>
            </div>
            </div>}
        </div>
      </div>
     
    </main>
  );
};

export default Offer;
