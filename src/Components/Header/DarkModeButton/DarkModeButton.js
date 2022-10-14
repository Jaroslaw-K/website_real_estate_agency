import "./DarkModeButton.scss";
import { useSelector, useDispatch } from "react-redux";

const DarkModeButton = (props) => {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const darkModeHandler = () => {
    dispatch({ type: "switchMode" });
  };

  return (
    <button className={darkMode ? "darkModeButton darkModeButton--dark" : "darkModeButton darkModeButton--bright"} onClick={darkModeHandler}>
      <i className={darkMode ? "bi bi-brightness-high-fill darkModeButton__icon" : "bi bi-moon-stars-fill darkModeButton__icon"}></i>
    </button>
  );
};

export default DarkModeButton;
