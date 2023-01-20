import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import { breaktPoint_1200 } from "../../data/variables.js";
// COMPONENTS
import FooterMobile from "./FooterMobile/FooterMobile";
import FooterDesktop from "./FooterDesktop/FooterDesktop";

const Footer = () => {
  return (
    <Fragment>
      {useMediaQuery({ maxWidth: breaktPoint_1200 }) && <FooterMobile />}
      {!useMediaQuery({ maxWidth: breaktPoint_1200 }) && <FooterDesktop />}
    </Fragment>
  );
};

export default Footer;
