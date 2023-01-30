import "./SingleOfferBig.scss";
import { useSelector } from "react-redux";

const SingleOfferBig = () => {
  const darkMode = useSelector((state) => state.darkMode); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
  const languagePrimary = useSelector((state) => state.languagePrimary); // RESPONSIBLE FOR WEBSITE LANGUAGE - ENGLISH OR POLISH
  return (
    <div className={darkMode ? "singleOfferBig singleOfferBig--dark" : "singleOfferBig singleOfferBig--bright"}>
      <div className="singleOfferBig__containerLeft"></div>
      <div className="singleOfferBig__containerRight">
        <div className="containerRight__containerLeft">
          <p className="containerLeft__text">
            In hac habitasse platea dictumst. Nam ac nunc quis erat sagittis porttitor. Vivamus ut sapien tincidunt, commodo tellus non, vulputate neque. Donec porta, massa in ornare varius, tellus eros pellentesque eros, vitae consequat leo nibh nec tortor. Sed volutpat blandit ligula, at commodo augue dignissim eu. Maecenas sagittis ipsum ante, nec tempor leo mattis molestie. Nunc lectus lorem, placerat sit amet enim vitae, pharetra sodales elit. Proin posuere arcu vitae leo ultricies feugiat.
            Sed tincidunt lacus eu faucibus tempor. Nullam eget tortor nunc. Morbi eget finibus elit, at porta leo. Fusce ut tellus non nibh sollicitudin tristique. Cras sit amet fringilla nulla. Ut posuere et purus tincidunt varius. Aliquam aliquam egestas purus et varius. In hac habitasse platea dictumst. Nam ac nunc quis erat sagittis porttitor. Vivamus ut sapien tincidunt, commodo tellus non, vulputate neque. Donec porta, massa in ornare varius, tellus eros pellentesque eros, vitae consequat
            leo nibh nec tortor. Sed volutpat blandit ligula, at commodo augue dignissim eu. Maecenas sagittis ipsum ante, nec tempor leo mattis molestie. Nunc lectus lorem, placerat sit amet enim vitae, pharetra sodales elit. Proin posuere arcu vitae leo ultricies feugiat. Sed tincidunt lacus eu faucibus tempor. Nullam eget tortor nunc. Morbi eget finibus elit, at porta leo. Fusce ut tellus non nibh sollicitudin tristique. Cras sit amet fringilla nulla. Ut posuere et purus tincidunt varius.
            Aliquam aliquam egestas purus et varius.
          </p>
        </div>
        <div className="containerRight__containerRight">
          <div className="containerRight__textContainer">
            <p className="textContainer__text">transactionType</p>
            <p className="textContainer__text">LivingArea: 44m2</p>
            <p className="textContainer__text">Price: 220000</p>
            <p className="textContainer__text">Province: </p>
            <p className="textContainer__text">Place</p>
            <p className="textContainer__text">RoomsNumber</p>
            <p className="textContainer__text">FloorsNumber</p>
            <p className="textContainer__text">Floor</p>
            <p className="textContainer__text">offerNumber</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOfferBig;
