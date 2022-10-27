import "./SliderDesktop.scss";
import { useRef, useEffect, useState, Fragment } from "react";
import { useSelector } from "react-redux";

import image1 from "../../../assets/imagesSlider/259588.jpg";
import image2 from "../../../assets/imagesSlider/280222.jpg";
import image3 from "../../../assets/imagesSlider/209296.jpg";
import image4 from "../../../assets/imagesSlider/1438834.jpg";
import image5 from "../../../assets/imagesSlider/5502227.jpg";
import image6 from "../../../assets/imagesSlider/5524205.jpg";
import image7 from "../../../assets/imagesSlider/7031408.jpg";

const SliderDesktop = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const slidesContainer = useRef();
  const containerButtonLeft = useRef();
  const containerButtonRight = useRef();
  const [currentId, setCurrentId] = useState(undefined);
  const [slides, setSlides] = useState([
    {
      id: 0,
      url: image1,
    },
    {
      id: 1,
      url: image2,
    },
    {
      id: 2,
      url: image3,
    },
    {
      id: 3,
      url: image4,
    },
    {
      id: 4,
      url: image5,
    },
    {
      id: 5,
      url: image6,
    },
    {
      id: 6,
      url: image7,
    },
  ]);

  useEffect(() => {
    slidesContainer.current.childNodes[0].classList.add("current");
    slidesContainer.current.childNodes[0].style.display = "block";
    setCurrentId(0);
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
              setCurrentId(i - 1);
            } else {
              slidesContainer.current.childNodes[slidesContainer.current.childNodes.length - 1].classList.add("current");
              slidesContainer.current.childNodes[slidesContainer.current.childNodes.length - 1].classList.remove("second");
              setCurrentId(slidesContainer.current.childNodes.length - 1);
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
              setCurrentId(i + 1);
            } else {
              slidesContainer.current.childNodes[0].classList.add("current");
              slidesContainer.current.childNodes[0].classList.remove("second");
              setCurrentId(0);
            }
          }
        }, 1);
      }
    }
  };

  const toggleSmallLeftImgHandler = () => {
    console.log('moveLeft');
  }

  const toggleSmallRightImgHandler = () => {
    console.log('moveRight');
  }
 
  let slidesMain = slides.map((slide) => <div key={slide.id} className="slidesContainer__slide" style={{ backgroundImage: `url(${slide.url})` }}></div>);
  let slidesSmall = <Fragment>
       {slides.map((slide) => { if (slide.id === currentId && slide.id === 0) {
        return <div className="slidesContainer__slide" style={{ backgroundImage: `url(${slides[slides.length - 2].url})` }}></div>
        } else if (slide.id === currentId && slide.id === 1) {
          return <div className="slidesContainer__slide" style={{ backgroundImage: `url(${slides[slides.length - 1].url})` }}></div>
        }  else if (slide.id === currentId && slide.id >= 2) {
          return <div className="slidesContainer__slide" style={{ backgroundImage: `url(${slides[slide.id - 2].url})` }}></div>
        }
        })}
        
      {slides.map((slide) => { if (slide.id === currentId) {return <div className="slidesContainer__slide" style={{ backgroundImage: `url(${slides[slide.id <= 0? slides.length - 1:slide.id - 1].url})` }}></div>}})}
      {slides.map((slide) => { if (slide.id === currentId) {return <div className="slidesContainer__slide currentSmall" style={{ backgroundImage: `url(${slides[slide.id].url})` }}></div>}})}
      {slides.map((slide) => { if (slide.id === currentId) {return <div className="slidesContainer__slide" style={{ backgroundImage: `url(${slides[slide.id >= slides.length - 1? 0:slide.id + 1].url})` }}></div>}})}
      
      {slides.map((slide) => { if (slide.id === currentId && slide.id === slides.length - 2) {
        return <div className="slidesContainer__slide" style={{ backgroundImage: `url(${slides[0].url})` }}></div>
        } else if (slide.id === currentId && slide.id === slides.length - 1) {
          return <div className="slidesContainer__slide" style={{ backgroundImage: `url(${slides[1].url})` }}></div>
        }  else if (slide.id === currentId && slide.id >= 0) {
          return <div className="slidesContainer__slide" style={{ backgroundImage: `url(${slides[slide.id + 2].url})` }}></div>
        }
        })}
   </Fragment>

  return (
    <div className={darkMode ? "sliderDesktop sliderDesktop--dark" : "sliderDesktop sliderDesktop--bright"}>
      <div ref={containerButtonLeft} className="sliderDesktop__containerButton sliderDesktop__containerButton--left" onClick={toggleLeftImgHandler}></div>
      <div ref={containerButtonRight} className="sliderDesktop__containerButton sliderDesktop__containerButton--right" onClick={toggleRightImgHandler}></div>
      <div ref={slidesContainer} className="sliderDesktop__slidesContainer">
        {slidesMain}
      </div>
      <div className="sliderDesktop__smallSlidesContainer">
        <i className="bi bi-caret-left-fill smallSlidesContainer__arrow smallSlidesContainer__arrow--left" onClick={toggleSmallLeftImgHandler}></i>
        <i className="bi bi-caret-right-fill smallSlidesContainer__arrow smallSlidesContainer__arrow--right" onClick={toggleSmallRightImgHandler}></i>
        <div className="smallSlidesContainer__slidesContainer">
        {slidesSmall}
          </div>
      </div>
    </div>
  );
};

export default SliderDesktop;
