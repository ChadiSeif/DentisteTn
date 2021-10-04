import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./MedecinCard.css";
import { PrendreRdv } from "../../JS/Actions/user";

const MedecinCard = ({ medecin, history }) => {
  const dispatch = useDispatch();

  return (
    <div className="medecinCard">
      <Card
        style={{
          width: "17rem",
          boxShadow: "0 10px 30px 0 rgba(172, 168, 168, 0.43)",
        }}
      >
        {medecin.gender === "male" ? (
          <Card.Img
            variant="top"
            src="/assets/logomale.svg"
            style={{ maxWidth: "50%", margin: "auto", padding: "10px" }}
          />
        ) : (
          <Card.Img
            variant="top"
            src="/assets/logowoman.svg"
            style={{ maxWidth: "50%", margin: "auto", padding: "10px" }}
          />
        )}

        <Card.Body>
          <Card.Title>Dr {medecin.lastname}</Card.Title>
          <Card.Title>{medecin.firstname}</Card.Title>
          <Card.Text>
            <hr />
            Spécialité : {medecin.speciality}
            <hr />
            {medecin.city}
          </Card.Text>

          <Card.Text>
            {medecin.address}
            <hr />
            {medecin.phone}
          </Card.Text>
          <Link to={`/RDV/${medecin._id}`}>
            <Button
              variant="primary"
              onClick={() => dispatch(PrendreRdv(medecin._id))}
            >
              Prendre Rendez-vous
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MedecinCard;
