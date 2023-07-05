import React, { useEffect, useState } from "react";
import "./Apartmentpage.scss";
import { DescriptionPanel } from "../components/DescriptionPanel";
import { ApartmentHeader } from "../components/ApartmentHeader";
import ImageBanner from "../components/ImageBanner";
import { useNavigate, useParams } from "react-router-dom";

function ApartmentPage() {
  const id = useParams().id;

  const [flat, setFlat] = useState(null);
  const navigate = useNavigate();
  useEffect(fetchApartmentData, [id, navigate]);
  function fetchApartmentData() {
    fetch("/db.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === id);
        if (flat === undefined) {
          return navigate("/error");
        }
        setFlat(flat);
      })
      .catch(console.error);
  }
  if (flat == null) return <div>Loading...</div>;
  return (
    <div className="apartment-page">
      <ImageBanner pictures={flat.pictures} />
      <ApartmentHeader flat={flat} />
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" content={flat.description} />
        <DescriptionPanel
          title="Equipements"
          content={flat.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
