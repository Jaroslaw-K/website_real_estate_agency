import "./Offer.scss";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
// DATA FOR SLIDER
import { autoMoveSliderData } from "../../data/data";
// COMPONENTS
import Slider from "../../Components/Slider/Slider";
import SearchEngine from "./SearchEngine/SearchEngine";
import Specialsation from "./Specialisation/Specialisation";
// IMAGES
import image1 from "../../assets/images/specialisations/8112172.jpg";
import image2 from "../../assets/images/specialisations/7176319.jpg";
import image3 from "../../assets/images/specialisations/261621.jpg";

const Offer = () => {
  const darkMode = useSelector((state) => state.darkMode); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
  const languagePrimary = useSelector((state) => state.languagePrimary); // RESPONSIBLE FOR WEBSITE LANGUAGE - ENGLISH OR POLISH
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
          {!useMediaQuery({ maxWidth: 1200 }) && (
            <div className="background__info background__info--desktop">
              <div className="info__txt">{languagePrimary ? "CO ROBIMY?" : "WHAT WE DO?"}</div>
              <div className="info__container">
                <Specialsation image={image1} title={languagePrimary ? "SPRZEDAŻ/WYNAJEM" : "SELL/RENT"} text={languagePrimary ? "SPRZEDAJEMY ORAZ WYNAJMUJEMY NIERUCHOMOŚCI" : "WE SELL AND RENT PROPERTIES"} />
                <Specialsation image={image2} title={languagePrimary ? "DORADZTWO" : "ADVISORY"} text={languagePrimary ? "DORADZAMY W SPRAWACH KREDYTÓW" : "WE ADVISE ON LOAN MATTERS"} />
                <Specialsation image={image3} title={languagePrimary ? "WSPÓŁPRACA" : "COOPERATION"} text={languagePrimary ? "WSPÓŁPRACUJEMY Z BANKAMI ORAZ INNYMI AGENCJAMI NIERUCHOMOŚCI" : "WE COOPERATE WITH BANKS AND OTHER REAL ESTATE AGENCIES"} />
              </div>
            </div>
          )}
        </div>
      </div>
      {useMediaQuery({ maxWidth: 1200 }) && (
        <div className="offer__specialisations">
          <Specialsation image={image1} title={languagePrimary ? "SPRZEDAŻ/WYNAJEM" : "SELL/RENT"} text={languagePrimary ? "SPRZEDAJEMY ORAZ WYNAJMUJEMY NIERUCHOMOŚCI" : "WE SELL AND RENT PROPERTIES"} />
          <Specialsation image={image2} title={languagePrimary ? "DORADZTWO" : "ADVISORY"} text={languagePrimary ? "DORADZAMY W SPRAWACH KREDYTÓW" : "WE ADVISE ON LOAN MATTERS"} />
          <Specialsation image={image3} title={languagePrimary ? "WSPÓŁPRACA" : "COOPERATION"} text={languagePrimary ? "WSPÓŁPRACUJEMY Z BANKAMI ORAZ INNYMI AGENCJAMI NIERUCHOMOŚCI" : "WE COOPERATE WITH BANKS AND OTHER REAL ESTATE AGENCIES"} />
        </div>
      )}
    </main>
  );
};

export default Offer;
