import "./OffersWindowMobile.scss";
import { useSelector } from "react-redux";

const OffersWindowMobile = () => {
  const darkMode = useSelector((state) => state.darkMode); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
  const languagePrimary = useSelector((state) => state.languagePrimary); // RESPONSIBLE FOR WEBSITE LANGUAGE - ENGLISH OR POLISH
  return <div>Window</div>;
};

export default OffersWindowMobile;
