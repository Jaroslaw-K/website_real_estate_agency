import image1 from "../assets/imagesSlider/7031408.jpg";
import image2 from "../assets/imagesSlider/5502227.jpg";
import image3 from "../assets/imagesSlider/5524205.jpg";
import image4 from "../assets/imagesSlider/280222.jpg";

// ARRAY OF OFFERS
const offers = [
  {
    id: 0,
    offerNumber: "",
    propertyTypePL: "",
    propertyTypeEN: "",
    transactionTypePL: "",
    transactionTypeEN: "",
    marketTypePL: "",
    marketTypeEN: "",
    provincePL: "",
    provinceEN: "",
    place: "",
    district: "",
    price: "",
    roomsNumber: "",
    floorNumber: "",
    numberOfFloors: "",
    livingArea: "",
    buildYear: "",
    descriptionPL1: "",
    descriptionEN1: "",

    agentName: "",
    agentSurname: "",
    agentPhoneNumber: "",
    agentEmailAddress: "",
  },
];

// ARRAYS OF OFFERS IMAGES
const offersImages = [
  {
    id: 0,
    url: image1,
  },
];

// ARRAY OF DATA FOR MAIN SLIDER - IMAGES WITH TEXTS
const autoMoveSliderData = [
  {
    id: 0,
    url: image1,
    textLeft_EN: "PLACE FOR TEXT",
    textRight_EN: "PLACE FOR TEXT",
    textLeft_PL: "MIEJSCE NA TEKST",
    textRight_PL: "MIEJSCE NA TEKST",
  },
  {
    id: 1,
    url: image2,
    textLeft_EN: "PLACE FOR TEXT",
    textRight_EN: "PLACE FOR TEXT",
    textLeft_PL: "MIEJSCE NA TEKST",
    textRight_PL: "MIEJSCE NA TEKST",
  },
  {
    id: 2,
    url: image3,
    textLeft_EN: "PLACE FOR TEXT",
    textRight_EN: "PLACE FOR TEXT",
    textLeft_PL: "MIEJSCE NA TEKST",
    textRight_PL: "MIEJSCE NA TEKST",
  },
  {
    id: 3,
    url: image4,
    textLeft_EN: "PLACE FOR TEXT",
    textRight_EN: "PLACE FOR TEXT",
    textLeft_PL: "MIEJSCE NA TEKST",
    textRight_PL: "MIEJSCE NA TEKST",
  },
];

export { offers, offersImages, autoMoveSliderData };
