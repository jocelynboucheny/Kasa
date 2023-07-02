import React from 'react'
import "./Homepage.scss";
import Banner from '../layout/Banner.jsx';
import ApartmentGrid from '../components/ApartmentGrid.jsx';


function Homepage() {
  return (
    <>
        <Banner/>
        <ApartmentGrid/>
    </>
  )
}

export default Homepage