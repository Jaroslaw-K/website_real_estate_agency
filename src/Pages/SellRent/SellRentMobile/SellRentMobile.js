import "./SellRentMobile.scss";
import { useSelector } from "react-redux";
// COMPONENTS
import Specialsation from "../../../Components/Specialisation/Specialisation";
import ContactForm from "../../../Components/ContactForm/ContactForm";
// IMAGES
import image1 from "../../../assets/images/specialisations/8112172.jpg";
import image2 from "../../../assets/images/specialisations/7176319.jpg";
import image3 from "../../../assets/images/specialisations/3760069.jpg";

const SellRentMobile = () => {
  const darkMode = useSelector((state) => state.darkMode); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
  const languagePrimary = useSelector((state) => state.languagePrimary); // RESPONSIBLE FOR WEBSITE LANGUAGE - ENGLISH OR POLISH
  return (
    <div className={darkMode ? "sellRentMobile sellRentMobile--dark" : "sellRentMobile sellRentMobile--bright"}>
      <ContactForm headerText={languagePrimary ? "MASZ NIERUCHOMOŚĆ NA SPRZEDAŻ LUB WYNAJEM? NAPISZ" : "HAVE PROPERTY FOR SALE OR RENT?"} placeholderMessage={languagePrimary ? "Prosimy napisz do nas odnośnie nieruchomości którą chcesz sprzedać lub wynająć..." : "Please write us about your property that you want to sell or rent..."} />
      <div className="sellRentMobile__specialisations">
        <Specialsation image={image1} title={languagePrimary ? "SPRZEDAŻ/WYNAJEM" : "SELL/RENT"} text={languagePrimary ? "SPRZEDAJEMY ORAZ WYNAJMUJEMY NIERUCHOMOŚCI" : "WE SELL AND RENT PROPERTIES"} />
        <Specialsation image={image2} title={languagePrimary ? "DORADZTWO" : "ADVISORY"} text={languagePrimary ? "DORADZAMY W SPRAWACH KREDYTÓW" : "WE ADVISE ON LOAN MATTERS"} />
        <Specialsation image={image3} title={languagePrimary ? "WSPÓŁPRACA" : "COOPERATION"} text={languagePrimary ? "WSPÓŁPRACUJEMY Z BANKAMI ORAZ INNYMI AGENCJAMI NIERUCHOMOŚCI" : "WE COOPERATE WITH BANKS AND OTHER REAL ESTATE AGENCIES"} />
      </div>
    </div>
  );
};

export default SellRentMobile;
