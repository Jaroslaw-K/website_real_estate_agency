import "./OffersWindowDesktop.scss";
import { useSelector } from "react-redux";
// COMPONENTS
import SingleOfferSmall from "../SingleOfferSmall/SingleOfferSmall";
import SingleOfferBig from "../SingleOfferBig/SingleOfferBig";

const OffersWindowDesktop = () => {
  const darkMode = useSelector((state) => state.darkMode); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
  const languagePrimary = useSelector((state) => state.languagePrimary); // RESPONSIBLE FOR WEBSITE LANGUAGE - ENGLISH OR POLISH
  return (
    <section className={darkMode ? "offersWindowDesktop offersWindowDesktop--dark" : "offersWindowDesktop offersWindowDesktop--bright"}>
      <div className="offersWindowDesktop__container">
        <div className="container__top">
          <div className="top__left">
            <span className="left__text">{languagePrimary ? "Sortowanie" : "Sort"}</span>
            <ul className="left__list">
              <span className="list__text">{languagePrimary ? "Sortowanie" : "Sort"}</span>
              <i class="list__icon bi bi-arrow-down-square-fill"></i>
            </ul>
          </div>
          <div className="top__right">
            <i class=" right__icon right__icon--1 bi bi-list"></i>
            <i class="right__icon right__icon--2 bi bi-grid-3x3-gap-fill"></i>
          </div>
        </div>
        <div className="container__bottom">
          <SingleOfferSmall />
          <SingleOfferSmall />
          <SingleOfferSmall />
          <SingleOfferSmall />
          <SingleOfferBig />
          <SingleOfferBig />
        </div>
      </div>
    </section>
  );
};

export default OffersWindowDesktop;
