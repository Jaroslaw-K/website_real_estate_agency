import "./Slider.scss";
import { useRef } from "react";
import { useSelector } from "react-redux";

const Slider = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const slidesContainer = useRef();
  const containerButtonLeft = useRef();
  const containerButtonRight = useRef();

  const toggleLeftImgHandler = () => {
    for (let i = 0; i < slidesContainer.current.childNodes.length; i++) {
      if (slidesContainer.current.childNodes[i].classList.contains("slidesContainer__slide--current") || slidesContainer.current.childNodes[i].classList.contains("slidesContainer__slide--currentRight") || slidesContainer.current.childNodes[i].classList.contains("slidesContainer__slide--currentLeft")) {
        if (i === 0) {
          slidesContainer.current.childNodes[i].classList.remove("slidesContainer__slide--currentLeft");
          slidesContainer.current.childNodes[i].classList.remove("slidesContainer__slide--currentRight");
          slidesContainer.current.childNodes[i].classList.add("slidesContainer__slide--previousLeft");
          slidesContainer.current.childNodes[slidesContainer.current.childNodes.length - 1].classList.add("slidesContainer__slide--currentLeft");

          containerButtonRight.current.classList.add("slider__containerButton--removeClick");
          containerButtonLeft.current.classList.add("slider__containerButton--removeClick");
        } else {
          slidesContainer.current.childNodes[i].classList.remove("slidesContainer__slide--currentLeft");
          slidesContainer.current.childNodes[i].classList.remove("slidesContainer__slide--currentRight");
          slidesContainer.current.childNodes[i].classList.add("slidesContainer__slide--previousLeft");
          slidesContainer.current.childNodes[--i].classList.add("slidesContainer__slide--currentLeft");

          containerButtonRight.current.classList.add("slider__containerButton--removeClick");
          containerButtonLeft.current.classList.add("slider__containerButton--removeClick");
        }
      }
    }
    setTimeout(() => {
      for (let i = 0; i < slidesContainer.current.childNodes.length; i++) {
        slidesContainer.current.childNodes[i].classList.remove("slidesContainer__slide--previousLeft");
        slidesContainer.current.childNodes[i].classList.remove("slidesContainer__slide--current");
        containerButtonLeft.current.classList.remove("slider__containerButton--removeClick");
        containerButtonRight.current.classList.remove("slider__containerButton--removeClick");
      }
    }, 1200);
  };
  const toggleRightImgHandler = () => {
    for (let i = 0; i < slidesContainer.current.childNodes.length; i++) {
      if (slidesContainer.current.childNodes[i].classList.contains("slidesContainer__slide--current") || slidesContainer.current.childNodes[i].classList.contains("slidesContainer__slide--currentRight") || slidesContainer.current.childNodes[i].classList.contains("slidesContainer__slide--currentLeft")) {
        if (i === slidesContainer.current.childNodes.length - 1) {
          slidesContainer.current.childNodes[i].classList.remove("slidesContainer__slide--currentRight");
          slidesContainer.current.childNodes[i].classList.remove("slidesContainer__slide--currentLeft");
          slidesContainer.current.childNodes[i].classList.add("slidesContainer__slide--previousRight");
          slidesContainer.current.childNodes[0].classList.add("slidesContainer__slide--currentRight");

          containerButtonRight.current.classList.add("slider__containerButton--removeClick");
          containerButtonLeft.current.classList.add("slider__containerButton--removeClick");
        } else {
          slidesContainer.current.childNodes[i].classList.remove("slidesContainer__slide--currentRight");
          slidesContainer.current.childNodes[i].classList.remove("slidesContainer__slide--currentLeft");
          slidesContainer.current.childNodes[i].classList.add("slidesContainer__slide--previousRight");
          slidesContainer.current.childNodes[++i].classList.add("slidesContainer__slide--currentRight");

          containerButtonRight.current.classList.add("slider__containerButton--removeClick");
          containerButtonLeft.current.classList.add("slider__containerButton--removeClick");
        }
      }
    }

    setTimeout(() => {
      for (let i = 0; i < slidesContainer.current.childNodes.length; i++) {
        slidesContainer.current.childNodes[i].classList.remove("slidesContainer__slide--previousRight");
        slidesContainer.current.childNodes[i].classList.remove("slidesContainer__slide--current");
        containerButtonLeft.current.classList.remove("slider__containerButton--removeClick");
        containerButtonRight.current.classList.remove("slider__containerButton--removeClick");
      }
    }, 1200);
  };

  return (
    <div className={darkMode ? "slider slider--dark" : "slider slider--bright"}>
      <div ref={containerButtonLeft} className="slider__containerButton slider__containerButton--left" onClick={toggleLeftImgHandler}></div>
      <div ref={containerButtonRight} className="slider__containerButton slider__containerButton--right" onClick={toggleRightImgHandler}></div>
      <div ref={slidesContainer} className="slider__slidesContainer">
        <div className="slidesContainer__slide slidesContainer__slide--current"></div>
        <div className="slidesContainer__slide"></div>
        <div className="slidesContainer__slide"></div>
        <div className="slidesContainer__slide"></div>
        <div className="slidesContainer__slide"></div>
      </div>
    </div>
  );
};

export default Slider;
