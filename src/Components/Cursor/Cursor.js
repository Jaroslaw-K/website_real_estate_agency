import "./Cursor.scss";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserView, isBrowser } from "react-device-detect";

const Cursor = () => {
  const darkMode = useSelector((state) => state.darkMode); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
  const cursor = useRef(null); 

  useEffect(() => {
    if (isBrowser) {
      document.addEventListener("mousemove", (event) => {
        const { x, y } = event;
        const countX = x - cursor.current.clientWidth;
        const countY = y - cursor.current.clientHeight;
        cursor.current.style.transform = `translate3d(${countX}px, ${countY}px, 0)`;

        // RESPONSIBLE FOR REMOVE CURSOR WHEN USER MOVE MOUSE OUTSIDE PAGE VIEW
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
    }
  }, []);

  return (
    <BrowserView>
      <i className={darkMode ? "bi bi-cursor-fill cursor cursor--dark" : "bi bi-cursor-fill cursor cursor--bright"} ref={cursor}></i>
    </BrowserView>
  );
};

export default Cursor;
