import "./SingleOfferSmall.scss";
import { useSelector } from "react-redux";

const SingleOfferSmall = () => {
  const darkMode = useSelector((state) => state.darkMode); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
  const languagePrimary = useSelector((state) => state.languagePrimary); // RESPONSIBLE FOR WEBSITE LANGUAGE - ENGLISH OR POLISH
  return (
    <div className={darkMode ? "singleOfferSmall singleOfferSmall--dark" : "singleOfferSmall singleOfferSmall--bright"}>
      <div className="singleOfferSmall__containerTop">
        <div className="containerTop__containerLeft">
          <span className="containerLeft__text">Place</span>
        </div>
        <div className="containerTop__containerRight">
          <span className="containerRight__text">propertyType - transactionType</span>
        </div>
      </div>
      <div className="singleOfferSmall__containerMiddle"></div>
      <div className="singleOfferSmall__containerBottom">
        <div className="containerBottom__containerLeft">
          <p className="containerLeft__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec sollicitudin eros. Quisque vitae tincidunt nisi. Proin rhoncus nec sapien a imperdiet. Ut molestie tortor eu tellus gravida tincidunt. Vivamus ac commodo nunc, et semper dui. Praesent eleifend lacus at justo mattis vehicula. Curabitur tincidunt quis ligula vitae gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lacinia iaculis nulla et congue. Quisque tortor
            purus, vulputate a suscipit at, varius nec sem. Proin pulvinar consectetur viverra. Aliquam auctor dui quis justo pretium congue. Vestibulum maximus velit nec nunc tincidunt venenatis. Suspendisse hendrerit sem vitae tellus fringilla porttitor. Sed nibh lacus, fringilla nec orci sit amet, efficitur fermentum leo.
          </p>
        </div>
        <div className="containerBottom__containerRight">
          <p className="containerRight__text">livingArea</p>
          <p className="containerRight__text">Price </p>
          <p className="containerRight__text">Offer Number</p>
        </div>
      </div>
    </div>
  );
};

export default SingleOfferSmall;
