import "./Cursor.scss";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const Cursor = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const cursor = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { x, y } = event;
      const countX = x - cursor.current.clientWidth;
      const countY = y - cursor.current.clientHeight;
      cursor.current.style.transform = `translate3d(${countX}px, ${countY}px, 0)`;

      if (y <= 1) {
        cursor.current.style.display = "none";
      } else {
        cursor.current.style.display = "block";
      }
      if (x <= 0) {
        cursor.current.style.display = "none";
      } else {
        cursor.current.style.display = "block";
      }
    });
  }, []);
  return <i className={darkMode ? "bi bi-cursor-fill cursor cursor--dark" : "bi bi-cursor-fill cursor cursor--bright"} ref={cursor}></i>;
};

export default Cursor;