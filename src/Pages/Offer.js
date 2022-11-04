import "./Offer.scss";
import Slider from "../Components/Slider/Slider";

import image1 from "../assets/imagesSlider/7031408.jpg";
import image2 from "../assets/imagesSlider/5502227.jpg";
import image3 from "../assets/imagesSlider/5524205.jpg";
import image4 from "../assets/imagesSlider/280222.jpg";

const Offer = (props) => {
  const slidesArray = [
    {
      id: 0,
      url: image1,
      text1_EN: "PLACE FOR TEXT",
      text2_EN: "PLACE FOR TEXT",
      text1_PL: "MIEJSCE NA TEKST",
      text2_PL: "MIEJSCE NA TEKST",
    },
    {
      id: 1,
      url: image2,
      text1_EN: "PLACE FOR TEXT",
      text2_EN: "PLACE FOR TEXT",
      text1_PL: "MIEJSCE NA TEKST",
      text2_PL: "MIEJSCE NA TEKST",
    },
    {
      id: 2,
      url: image3,
      text1_EN: "PLACE FOR TEXT",
      text2_EN: "PLACE FOR TEXT",
      text1_PL: "MIEJSCE NA TEKST",
      text2_PL: "MIEJSCE NA TEKST",
    },
    {
      id: 3,
      url: image4,
      text1_EN: "PLACE FOR TEXT",
      text2_EN: "PLACE FOR TEXT",
      text1_PL: "MIEJSCE NA TEKST",
      text2_PL: "MIEJSCE NA TEKST",
    },
  ];
  const moveSlider = (moveSlider) => {
    moveSlider();
  };
  return (
    <main className="offer">
      <Slider moveSlider={moveSlider} slidesArray={slidesArray} />
    </main>
  );
};

export default Offer;
