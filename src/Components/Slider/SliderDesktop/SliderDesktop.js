import "./SliderDesktop.scss";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const SliderDesktop = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const slidesContainer = useRef();
  const containerButtonLeft = useRef();
  const containerButtonRight = useRef();

  useEffect(() => {
    for (let i = 0; i < slidesContainer.current.childNodes.length; i++) {
      if (slidesContainer.current.childNodes[i].classList.contains("current")) {
        slidesContainer.current.childNodes[i].style.display = "block";
      }
    }
  }, []);

  const toggleLeftImgHandler = () => {
    containerButtonLeft.current.style.pointerEvents = "none";
    containerButtonRight.current.style.pointerEvents = "none";
    for (let i = 0; i < slidesContainer.current.childNodes.length; i++) {
      if (slidesContainer.current.childNodes[i].classList.contains("current")) {
        slidesContainer.current.childNodes[i].style.left = "0";
        if (slidesContainer.current.childNodes[i - 1] !== undefined) {
          slidesContainer.current.childNodes[i - 1].style.display = "block";
          slidesContainer.current.childNodes[i - 1].style.left = "-100%";
          slidesContainer.current.childNodes[i - 1].classList.add("second");
        } else {
          slidesContainer.current.childNodes[slidesContainer.current.childNodes.length - 1].style.display = "block";
          slidesContainer.current.childNodes[slidesContainer.current.childNodes.length - 1].style.left = "-100%";
          slidesContainer.current.childNodes[slidesContainer.current.childNodes.length - 1].classList.add("second");
        }
        let counterCurrent = 0;
        let counterSecond = 100;
        const move = setInterval(() => {
          counterCurrent += 1;
          counterSecond -= 1;
          slidesContainer.current.childNodes[i].style.left = `${counterCurrent}%`;
          if (slidesContainer.current.childNodes[i - 1] !== undefined) {
            slidesContainer.current.childNodes[i - 1].style.left = `-${counterSecond}%`;
          } else {
            slidesContainer.current.childNodes[slidesContainer.current.childNodes.length - 1].style.left = `-${counterSecond}%`;
          }
          if (counterCurrent === 100 || counterSecond === 0) {
            containerButtonLeft.current.style.pointerEvents = "auto";
            containerButtonRight.current.style.pointerEvents = "auto";
            clearInterval(move);
            slidesContainer.current.childNodes[i].classList.remove("current");
            slidesContainer.current.childNodes[i].style.display = "none";
            if (slidesContainer.current.childNodes[i - 1] !== undefined) {
              slidesContainer.current.childNodes[i - 1].classList.add("current");
              slidesContainer.current.childNodes[i - 1].classList.remove("second");
            } else {
              slidesContainer.current.childNodes[slidesContainer.current.childNodes.length - 1].classList.add("current");
              slidesContainer.current.childNodes[slidesContainer.current.childNodes.length - 1].classList.remove("second");
            }
          }
        }, 1);
      }
    }
  };

  const toggleRightImgHandler = () => {
    containerButtonLeft.current.style.pointerEvents = "none";
    containerButtonRight.current.style.pointerEvents = "none";
    for (let i = 0; i < slidesContainer.current.childNodes.length; i++) {
      if (slidesContainer.current.childNodes[i].classList.contains("current")) {
        slidesContainer.current.childNodes[i].style.left = "0";
        if (slidesContainer.current.childNodes[i + 1] !== undefined) {
          slidesContainer.current.childNodes[i + 1].style.display = "block";
          slidesContainer.current.childNodes[i + 1].style.left = "100%";
          slidesContainer.current.childNodes[i + 1].classList.add("second");
        } else {
          slidesContainer.current.childNodes[0].style.display = "block";
          slidesContainer.current.childNodes[0].style.left = "100%";
          slidesContainer.current.childNodes[0].classList.add("second");
        }
        let counterCurrent = 0;
        let counterSecond = 100;
        const move = setInterval(() => {
          counterCurrent += 1;
          counterSecond -= 1;
          slidesContainer.current.childNodes[i].style.left = `-${counterCurrent}%`;
          if (slidesContainer.current.childNodes[i + 1] !== undefined) {
            slidesContainer.current.childNodes[i + 1].style.left = `${counterSecond}%`;
          } else {
            slidesContainer.current.childNodes[0].style.left = `${counterSecond}%`;
          }

          if (counterCurrent === 100 || counterSecond === 0) {
            containerButtonLeft.current.style.pointerEvents = "auto";
            containerButtonRight.current.style.pointerEvents = "auto";
            clearInterval(move);
            slidesContainer.current.childNodes[i].classList.remove("current");
            slidesContainer.current.childNodes[i].style.display = "none";
            if (slidesContainer.current.childNodes[i + 1] !== undefined) {
              slidesContainer.current.childNodes[i + 1].classList.add("current");
              slidesContainer.current.childNodes[i + 1].classList.remove("second");
            } else {
              slidesContainer.current.childNodes[0].classList.add("current");
              slidesContainer.current.childNodes[0].classList.remove("second");
            }
          }
        }, 1);
      }
    }
  };

  return (
    <div className={darkMode ? "sliderDesktop sliderDesktop--dark" : "sliderDesktop sliderDesktop--bright"}>
      <div ref={containerButtonLeft} className="sliderDesktop__containerButton sliderDesktop__containerButton--left" onClick={toggleLeftImgHandler}></div>
      <div ref={containerButtonRight} className="sliderDesktop__containerButton sliderDesktop__containerButton--right" onClick={toggleRightImgHandler}></div>
      <div ref={slidesContainer} className="sliderDesktop__slidesContainer">
        <div className="slidesContainer__slide current"></div>
        <div className="slidesContainer__slide"></div>
        <div className="slidesContainer__slide"></div>
        <div className="slidesContainer__slide"></div>
        <div className="slidesContainer__slide"></div>
      </div>
      <div className="sliderDesktop__smallSlidesContainer">
        <i class="bi bi-caret-left-fill smallSlidesContainer__arrow smallSlidesContainer__arrow--left"></i>
        <i class="bi bi-caret-right-fill smallSlidesContainer__arrow smallSlidesContainer__arrow--right"></i>
        <div className="smallSlidesContainer__slidesContainer">
            <div className="slidesContainer__slide"></div>
            <div className="slidesContainer__slide"></div>
            <div className="slidesContainer__slide"></div>
            <div className="slidesContainer__slide"></div>
            <div className="slidesContainer__slide"></div>
        </div>
      </div>
    </div>
  );
};

export default SliderDesktop;
