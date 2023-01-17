import "./Specialisation.scss";
import { useSelector } from "react-redux";

const Specialsation = (props) => {
  const darkMode = useSelector((state) => state.darkMode); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
  return (
    <div className={darkMode ? "specialisation specialisation--dark" : "specialisation specialisation--bright"}>
      <div className="specialisation__containerTop" style={{ backgroundImage: `url(${props.image})` }}>
        <div className="containerTop__background">{props.title}</div>
      </div>
      <div className="specialisation__containerBottom">
        <div className="containerBottom__text">{props.text}</div>
      </div>
    </div>
  );
};

export default Specialsation;
