import "./Cursor.scss";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserView } from "react-device-detect";

const Cursor = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const cursor = useRef(null);
  const changedMouse = useSelector((state) => state.changedMouse);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { x, y } = event;
      const countX = x - cursor.current.clientWidth;
      const countY = y - cursor.current.clientHeight;
      cursor.current.style.transform = `translate3d(${countX}px, ${countY}px, 0)`;

      if (y <= 1 && x <= 0) {
        cursor.current.style.display = "none";
      } else if (y <= 1 && x > 1) {
        cursor.current.style.display = "none";
      } else if (y > 2 && x <= 0) {
        cursor.current.style.display = "none";
      } else {
        cursor.current.style.display = "block";
      }
    });
  }, []);

  let mouse;
  if (changedMouse) {
    mouse = <div className={darkMode ? "cursorChanged cursorChanged--dark" : "cursorChanged cursorChanged--bright"} ref={cursor}></div>;
  } else {
    mouse = <i className={darkMode ? "bi bi-cursor-fill cursor cursor--dark" : "bi bi-cursor-fill cursor cursor--bright"} ref={cursor}></i>;
  }
  return <BrowserView>{mouse}</BrowserView>;
};

export default Cursor;
