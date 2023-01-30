import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
// COMPONENTS
import OffersWindowMobile from "./OffersWindowMobile/OffersWindowMobile";
import OffersWindowDesktop from "./OffersWindowDesktop/OffersWindowDesktop";

const OffersWindow = () => {
  return (
    <Fragment>
      {useMediaQuery({ maxWidth: 1200 }) && <OffersWindowMobile />}
      {!useMediaQuery({ maxWidth: 1200 }) && <OffersWindowDesktop />}
    </Fragment>
  );
};

export default OffersWindow;
