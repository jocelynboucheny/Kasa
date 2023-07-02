import React,{useEffect,useState} from 'react';
import "./ApartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.jsx";
import data from "../assets/db.json";


function ApartmentGrid() {
    const [apartments,setApartments] = useState([]);
    console.log(data)
    useEffect(fetchApartments, []);
    // useEffect avec une array vide == exécute cette fonction  au chargement du composant

    function fetchApartments(){
        
    fetch("/db.json")
    .then((res)=> res.json())
    .then((res)=> setApartments(res))
    .catch(console.error);
    }
    
    return (
    <div className="grid">
        {/* <ApartmentCard/>
        <ApartmentCard/>
        <ApartmentCard/>
        <ApartmentCard/> */}
        {apartments.map((apartment) =>(
            <ApartmentCard  key={apartment.id} title={apartment.title} imageUrl={apartment.cover} id={apartment.id}/>
        ))}
    </div>
  )
}

export default ApartmentGrid