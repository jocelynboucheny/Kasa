import React, { useEffect, useState } from 'react';
import "./Apartmentpage.scss";
import {  DescriptionPanel } from '../components/DescriptionPanel';
import {ApartmentHeader} from '../components/ApartmentHeader';
import ImageBanner from '../components/ImageBanner';
import { useNavigate, useParams } from "react-router-dom";
import data from "../assets/db.json";


function ApartmentPage() {
    const id = useParams().id;
    
    const[flat, setFlat] = useState (null);
    console.log('flat:' , flat)
    const navigate = useNavigate();
  console.log(id);
    useEffect(fetchApartmentData,[id, navigate]);
    function fetchApartmentData(){
        fetch("/db.json")
      .then((res) => res.json())
      .then((flats)=> {
       const flat = flats.find((flat) => flat.id === id);
       if (flat === undefined){
        return navigate("/ddd");
       }
       console.log("selectedFlat:", flat);
       setFlat(flat);
    })
    .catch(console.error);
    }
    if(flat == null) return <div>Loading...</div>;
  return (
    <div className="apartment-page">
        <ImageBanner pictures={flat.pictures}/>
        <ApartmentHeader flat={flat}/>
        <div className='apartment__description__area'>
            <DescriptionPanel title="Description" content={flat.description}/>
            <DescriptionPanel title="Equipements" content={flat.equipments.map((eq,i) =><li key={i}>{eq}</li>)}/>
        </div>
        


    </div>
  );
}

export default ApartmentPage;

// import React, { useEffect, useState } from 'react';
// import "./Apartmentpage.scss";
// import {  DescriptionPanel } from '../components/DescriptionPanel';
// import {ApartmentHeader} from '../components/ApartmentHeader';
// import ImageBanner from '../components/ImageBanner';
// import { useLocation, useNavigate } from "react-router-dom";


// function ApartmentPage() {
//     const location = useLocation();
//     console.log("location:", location);
//     console.log("our apartment id is:",location.state.apartmentId);
//     const[flat, setFlat] = useState (null);
//     console.log('flat:' , flat)
//     const navigate = useNavigate();

//     useEffect(fetchApartmentData,[]);
//     function fetchApartmentData(){
//         fetch("db.json")
//     .then((res)=> res.json())
//     .then((flats)=> {
//        const flat = flats.find((flat) => flat.id ===location.state.apartmentId);
//        if (flat === undefined){
//         return navigate("/ddd");
//        }
//        console.log("selectedFlat:", flat);
//        setFlat(flat);
//     })
//     .catch(console.error);
//     }
//     if(flat == null) return <div>Loading...</div>;
//   return (
//     <div className="apartment-page">
//         <ImageBanner pictures={flat.pictures}/>
//         <ApartmentHeader flat={flat}/>
//         <div className='apartment__description__area'>
//             <DescriptionPanel title="Description" content={flat.description}/>
//             <DescriptionPanel title="Equipements" content={flat.equipments.map((eq,i) =><li key={i}>{eq}</li>)}/>
//         </div>
        


//     </div>
//   );
// }

// export default ApartmentPage;