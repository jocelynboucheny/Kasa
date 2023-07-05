import React from "react";
import "./Homepage.scss";
import Banner from "../layout/Banner.jsx";
import ApartmentGrid from "../components/ApartmentGrid.jsx";

function Homepage() {
  return (
    <>
      <Banner title="Chez vous, partout et ailleurs" />
      <ApartmentGrid />
    </>
  );
}

export default Homepage;
