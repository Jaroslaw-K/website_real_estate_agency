import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

import FooterMobile from "./FooterMobile/FooterMobile";
import FooterDesktop from "./FooterDesktop/FooterDesktop";

const Footer = () => {
  return (
    <Fragment>
      {useMediaQuery({ maxWidth: 1000 }) && <FooterMobile />}
      {!useMediaQuery({ maxWidth: 1000 }) && <FooterDesktop />}
    </Fragment>
  );
};

export default Footer;
