import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import HeaderDesktop from "./Components/HeaderDesktop";
import HeaderMobile from "./Components/HeaderMobile";
import FooterDesktop from "./Components/FooterDesktop";
import FooterMobile from "./Components/FooterMobile";

const App = () => {
  return (
    <Fragment>
      <HeaderDesktop />
    </Fragment>
  );
};

export default App;
