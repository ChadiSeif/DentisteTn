import React from "react";
import SimpleMap from "../GoogleMaps/GoogleMapReactListmedecins";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { PrendreRdv } from "../../JS/Actions/user";
import { Link } from "react-router-dom";

import "./MedecinCardList.css";

const MedecinCardList = ({ medecin }) => {
  const dispatch = useDispatch();

  return (
    <div className="Cardmedecin">
      <div classname="medecinCardListimage">
        {medecin.gender === "male" ? (
          <img
            alt="imgmale"
            src="/assets/logomale.svg"
            style={{ width: "150px", margin: "auto", padding: "10px" }}
          />
        ) : (
          <img
            alt="imgfemale"
            src="/assets/logowoman.svg"
            style={{ width: "150px", margin: "auto", padding: "10px" }}
          />
        )}
        <p>
          Dr {medecin.lastname} {medecin.firstname}
        </p>
      </div>
      <div className="medecininformations"></div>
      <div className="detailmedecinlist">
        <p>Spécialité : {medecin.speciality}</p>
        <p>Addresse : {medecin.address}</p>
        <p>Ville : {medecin.city}</p>
        <p>Contact : {medecin.phone}</p>
        <Link to={`/RDV/${medecin._id}`}>
          <Button
            variant="primary"
            onClick={() => dispatch(PrendreRdv(medecin._id))}
          >
            Prendre Rendez-vous
          </Button>
        </Link>
      </div>
      <div className="maplistmedecin">
        <SimpleMap />
      </div>
    </div>
  );
};

export default MedecinCardList;
