import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./SliderMobile.scss";

const SliderMobile = (props) => {
  const darkMode = useSelector((state) => state.darkMode);
  const languagePrimary = useSelector((state) => state.languagePrimary);
  const sliderMobile = useRef();
  const [startingPoint, setStartingPoint] = useState();
  const [shift, setShift] = useState(0);

  useEffect(() => {
    sliderMobile.current.childNodes[0].classList.add("current");
    sliderMobile.current.childNodes[0].style.display = "block";
    props.moveSlider(autoMoveSliderMobile);
  }, []);

  const autoMoveSliderMobile = () => {
    sliderMobile.current.style.pointerEvents = "none";
    setInterval(() => {
      for (let i = 0; i < sliderMobile.current.childNodes.length; i++) {
        if (sliderMobile.current.childNodes[i].classList.contains("current")) {
          if (sliderMobile.current.childNodes[i + 1] !== undefined) {
            sliderMobile.current.childNodes[i + 1].style.display = "block";
            sliderMobile.current.childNodes[i + 1].style.left = `100%`;
          } else {
            sliderMobile.current.childNodes[0].style.display = "block";
            sliderMobile.current.childNodes[0].style.left = `100%`;
          }
          let counterCurrent = 0;
          let counterNext = 100;
          let moveNextSlide = setInterval(() => {
            counterCurrent += 1;
            counterNext -= 1;
            sliderMobile.current.childNodes[i].style.left = `-${counterCurrent}%`;
            if (sliderMobile.current.childNodes[i + 1] !== undefined) {
              sliderMobile.current.childNodes[i + 1].style.left = `${counterNext}%`;
            } else {
              sliderMobile.current.childNodes[0].style.left = `${counterNext}%`;
            }

            if (counterCurrent === 100) {
              clearInterval(moveNextSlide);
              sliderMobile.current.childNodes[i].classList.remove("current");
              sliderMobile.current.childNodes[i].style.display = "none";
              if (sliderMobile.current.childNodes[i + 1] !== undefined) {
                sliderMobile.current.childNodes[i + 1].classList.add("current");
                sliderMobile.current.childNodes[i + 1].style.display = "block";
              } else {
                sliderMobile.current.childNodes[0].classList.add("current");
                sliderMobile.current.childNodes[0].style.display = "block";
              }
            }
          }, 1);
        }
      }
    }, 20000);
  };

  const touchStartHandler = (event) => {
    setStartingPoint(event.touches[0].clientX);
    for (let i = 0; i < sliderMobile.current.childNodes.length; i++) {
      if (sliderMobile.current.childNodes[i].classList.contains("current")) {
        if (sliderMobile.current.childNodes[i + 1] !== undefined) {
          sliderMobile.current.childNodes[i + 1].style.display = "block";
          sliderMobile.current.childNodes[i + 1].style.left = "100%";
        } else {
          sliderMobile.current.childNodes[0].style.display = "block";
          sliderMobile.current.childNodes[0].style.left = "100%";
        }
        if (sliderMobile.current.childNodes[i - 1] !== undefined) {
          sliderMobile.current.childNodes[i - 1].style.display = "block";
          sliderMobile.current.childNodes[i - 1].style.right = "-100%";
        } else {
          sliderMobile.current.childNodes[sliderMobile.current.childNodes.length - 1].style.display = "block";
          sliderMobile.current.childNodes[sliderMobile.current.childNodes.length - 1].style.left = "-100%";
        }
      }
    }
  };

  const touchMoveHandler = (event) => {
    sliderMobile.current.style.pointerEvents = "none";
    setShift(startingPoint - event.touches[0].clientX);
    if (shift > 0) {
      // move to next slide
      for (let i = 0; i < sliderMobile.current.childNodes.length; i++) {
        if (sliderMobile.current.childNodes[i].classList.contains("current")) {
          sliderMobile.current.childNodes[i].style.display = "block";
          sliderMobile.current.childNodes[i].style.left = `-${shift}px`;
          sliderMobile.current.childNodes[i].style.right = ``;
          if (sliderMobile.current.childNodes[i + 1] !== undefined) {
            sliderMobile.current.childNodes[i + 1].style.left = `${sliderMobile.current.clientWidth - shift}px`;
            sliderMobile.current.childNodes[i + 1].style.right = ``;
          } else {
            sliderMobile.current.childNodes[0].style.left = `${sliderMobile.current.clientWidth - shift}px`;
            sliderMobile.current.childNodes[0].style.right = ``;
          }
        }
      }
    }
    if (shift < 0) {
      // move to previous slide
      for (let i = 0; i < sliderMobile.current.childNodes.length; i++) {
        if (sliderMobile.current.childNodes[i].classList.contains("current")) {
          if (sliderMobile.current.childNodes[i].classList.contains("current")) {
            sliderMobile.current.childNodes[i].style.display = "block";
            sliderMobile.current.childNodes[i].style.right = `${shift}px`;
            sliderMobile.current.childNodes[i].style.left = ``;
            if (sliderMobile.current.childNodes[i - 1] !== undefined) {
              sliderMobile.current.childNodes[i - 1].style.right = `${sliderMobile.current.clientWidth + shift}px`;
              sliderMobile.current.childNodes[i - 1].style.left = ``;
            } else {
              sliderMobile.current.childNodes[sliderMobile.current.childNodes.length - 1].style.right = `${sliderMobile.current.clientWidth + shift}px`;
              sliderMobile.current.childNodes[sliderMobile.current.childNodes.length - 1].style.left = ``;
            }
          }
        }
      }
    }
  };
  const touchEndHandler = (event) => {
    if (shift > 0) {
      // end finger and be visible next slide
      if (shift > sliderMobile.current.clientWidth / 4) {
        // enough to jump to next slide
        for (let i = 0; i < sliderMobile.current.childNodes.length; i++) {
          if (sliderMobile.current.childNodes[i].classList.contains("current")) {
            let currentPosition = parseFloat(sliderMobile.current.childNodes[i].style.left);
            let nextPosition;
            if (sliderMobile.current.childNodes[i + 1] !== undefined) {
              nextPosition = parseFloat(sliderMobile.current.childNodes[i + 1].style.left);
            } else {
              nextPosition = parseFloat(sliderMobile.current.childNodes[0].style.left);
            }
            let counter = 0;
            let moveNextSlide = setInterval(() => {
              counter -= 3;
              let positionCurrent = currentPosition + counter;
              let positionNext = nextPosition + counter;
              sliderMobile.current.childNodes[i].style.left = `${positionCurrent}px`;
              if (sliderMobile.current.childNodes[i + 1] !== undefined) {
                sliderMobile.current.childNodes[i + 1].style.left = `${positionNext}px`;
              } else {
                sliderMobile.current.childNodes[0].style.left = `${positionNext}px`;
              }
              if (positionCurrent <= -sliderMobile.current.clientWidth) {
                clearInterval(moveNextSlide);
                for (let j = 0; j < sliderMobile.current.childNodes.length; j++) {
                  sliderMobile.current.childNodes[j].style.left = "";
                  sliderMobile.current.childNodes[j].style.right = "";
                  sliderMobile.current.childNodes[j].style.display = "none";
                }
                sliderMobile.current.childNodes[i].classList.remove("current");
                if (sliderMobile.current.childNodes[i + 1] !== undefined) {
                  sliderMobile.current.childNodes[i + 1].style.display = `block`;
                  sliderMobile.current.childNodes[i + 1].classList.add("current");
                } else {
                  sliderMobile.current.childNodes[0].style.display = `block`;
                  sliderMobile.current.childNodes[0].classList.add("current");
                }
                setShift(0);
                sliderMobile.current.style.pointerEvents = "auto";
              }
            }, 1);
          }
        }
      } else {
        // not enough to jump to next slide
        for (let i = 0; i < sliderMobile.current.childNodes.length; i++) {
          if (sliderMobile.current.childNodes[i].classList.contains("current")) {
            let currentPosition = parseFloat(sliderMobile.current.childNodes[i].style.left);
            let nextPosition;
            if (sliderMobile.current.childNodes[i + 1] !== undefined) {
              nextPosition = parseFloat(sliderMobile.current.childNodes[i + 1].style.left);
            } else {
              nextPosition = parseFloat(sliderMobile.current.childNodes[0].style.left);
            }
            let counter = 0;
            let moveBackSlide = setInterval(() => {
              counter += 3;
              let positionCurrent = currentPosition + counter;
              let positionNext = nextPosition + counter;
              sliderMobile.current.childNodes[i].style.left = `${positionCurrent}px`;
              if (sliderMobile.current.childNodes[i + 1] !== undefined) {
                sliderMobile.current.childNodes[i + 1].style.left = `${positionNext}px`;
              } else {
                sliderMobile.current.childNodes[0].style.left = `${positionNext}px`;
              }

              if (positionCurrent >= 0) {
                clearInterval(moveBackSlide);
                for (let j = 0; j < sliderMobile.current.childNodes.length; j++) {
                  sliderMobile.current.childNodes[j].style.left = "";
                  sliderMobile.current.childNodes[j].style.right = "";
                  sliderMobile.current.childNodes[j].style.display = "none";
                }
                sliderMobile.current.childNodes[i].style.display = `block`;
                setShift(0);
                sliderMobile.current.style.pointerEvents = "auto";
              }
            }, 1);
          }
        }
      }
    }
    if (shift < 0) {
      // end finger and be visible previous slide
      if (shift < -Math.abs(sliderMobile.current.clientWidth / 4)) {
        // enough to jump to previous slide
        for (let i = 0; i < sliderMobile.current.childNodes.length; i++) {
          if (sliderMobile.current.childNodes[i].classList.contains("current")) {
            let currentPosition = parseFloat(sliderMobile.current.childNodes[i].style.right);
            let previousPosition;
            if (sliderMobile.current.childNodes[i - 1] !== undefined) {
              previousPosition = parseFloat(sliderMobile.current.childNodes[i - 1].style.right);
            } else {
              previousPosition = parseFloat(sliderMobile.current.childNodes[sliderMobile.current.childNodes.length - 1].style.right);
            }
            let counter = 0;
            let moveNextSlide = setInterval(() => {
              counter -= 3;
              let positionCurrent = currentPosition + counter;
              let positionPrevious = previousPosition + counter;
              sliderMobile.current.childNodes[i].style.right = `${positionCurrent}px`;
              if (sliderMobile.current.childNodes[i - 1] !== undefined) {
                sliderMobile.current.childNodes[i - 1].style.right = `${positionPrevious}px`;
              } else {
                sliderMobile.current.childNodes[sliderMobile.current.childNodes.length - 1].style.right = `${positionPrevious}px`;
              }
              if (Math.abs(positionCurrent) >= sliderMobile.current.clientWidth) {
                clearInterval(moveNextSlide);
                for (let j = 0; j < sliderMobile.current.childNodes.length; j++) {
                  sliderMobile.current.childNodes[j].style.left = "";
                  sliderMobile.current.childNodes[j].style.right = "";
                  sliderMobile.current.childNodes[j].style.display = "none";
                }
                sliderMobile.current.childNodes[i].classList.remove("current");
                if (sliderMobile.current.childNodes[i - 1] !== undefined) {
                  sliderMobile.current.childNodes[i - 1].style.display = `block`;
                  sliderMobile.current.childNodes[i - 1].classList.add("current");
                } else {
                  sliderMobile.current.childNodes[sliderMobile.current.childNodes.length - 1].style.display = `block`;
                  sliderMobile.current.childNodes[sliderMobile.current.childNodes.length - 1].classList.add("current");
                }
                setShift(0);
                sliderMobile.current.style.pointerEvents = "auto";
              }
            }, 1);
          }
        }
      } else {
        // not enough to jump to previous slide
        for (let i = 0; i < sliderMobile.current.childNodes.length; i++) {
          if (sliderMobile.current.childNodes[i].classList.contains("current")) {
            let currentPosition = parseFloat(sliderMobile.current.childNodes[i].style.right);
            let previousPosition;
            if (sliderMobile.current.childNodes[i - 1] !== undefined) {
              previousPosition = parseFloat(sliderMobile.current.childNodes[i - 1].style.right);
            } else {
              previousPosition = parseFloat(sliderMobile.current.childNodes[sliderMobile.current.childNodes.length - 1].style.right);
            }
            let counter = 0;
            let moveBackSlide = setInterval(() => {
              counter += 3;
              let positionCurrent = currentPosition + counter;
              let positionPrevious = previousPosition + counter;
              sliderMobile.current.childNodes[i].style.right = `${positionCurrent}px`;
              if (sliderMobile.current.childNodes[i - 1] !== undefined) {
                sliderMobile.current.childNodes[i - 1].style.right = `${positionPrevious}px`;
              } else {
                sliderMobile.current.childNodes[sliderMobile.current.childNodes.length - 1].style.right = `${positionPrevious}px`;
              }
              if (positionCurrent >= 0) {
                clearInterval(moveBackSlide);
                for (let j = 0; j < sliderMobile.current.childNodes.length; j++) {
                  sliderMobile.current.childNodes[j].style.left = "";
                  sliderMobile.current.childNodes[j].style.right = "";
                  sliderMobile.current.childNodes[j].style.display = "none";
                }
                sliderMobile.current.childNodes[i].style.display = "block";
                setShift(0);
                sliderMobile.current.style.pointerEvents = "auto";
              }
            }, 1);
          }
        }
      }
    }
  };

  let slidesMobile = props.slidesArray.map((slide) => (
    <div key={slide.id} className="sliderMobile__slide" style={{ backgroundImage: `url(${slide.url})` }}>
      <div className="slide__text slide__text--left">{languagePrimary ? `${slide.text1_PL}` : `${slide.text1_EN}`}</div>
      <div className="slide__text slide__text--right">{languagePrimary ? `${slide.text2_PL}` : `${slide.text2_EN}`}</div>
    </div>
  ));
  return (
    <div ref={sliderMobile} onTouchStart={touchStartHandler} onTouchMove={touchMoveHandler} onTouchEnd={touchEndHandler} className={darkMode ? "sliderMobile sliderMobile--dark" : "sliderMobile sliderMobile--bright"}>
      {slidesMobile}
    </div>
  );
};

export default SliderMobile;
