import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header/Header";

import Offer from "./Pages/Offer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/*" element={<Navigate to="/offer" />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>
    </Fragment>
  );
};

export default App;
