import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  // MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Form, Row, Col, Button } from "react-bootstrap";
import { UpdateMedecin } from "../../JS/Actions/medecin";

const MedecinCardProfil = ({ medecinRed, setActiveRdv, activeRdv }) => {
  const [medecin, setmedecin] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    speciality: "",
    address: "",
    city: "",
    password: "",
  });

  useEffect(() => {
    setmedecin(medecinRed);
  }, [medecinRed]);

  const [active, setActive] = useState(false);

  const dispatch = useDispatch();
  const HandleChange = (e) => {
    setmedecin({ ...medecin, [e.target.name]: e.target.value });
  };

  const RdvMedecin = useSelector((state) => state.RdvReducer.RdvMedecin);

  return (
    <div className="medecinprofil">
      <Form style={{ width: "800px", marginTop: "50px", marginRight: "100px" }}>
        <Button
          variant="secondary"
          size="lg"
          style={{ width: "100%" }}
          onClick={() => setActive(!active)}
        >
          Vos informations personnelles :
        </Button>
        {active ? (
          <div>
            <hr />
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridlastname">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={medecin.lastname}
                  onChange={HandleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPrenom">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={medecin.firstname}
                  onChange={HandleChange}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Addresse </Form.Label>
              <Form.Control
                name="adresse"
                value={medecin.address}
                onChange={HandleChange}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Cité</Form.Label>
                <Form.Control
                  name="city"
                  value={medecin.city}
                  onChange={HandleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridphone">
                <Form.Label>Numéro :</Form.Label>
                <Form.Control
                  name="phone"
                  value={medecin.phone}
                  onChange={HandleChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email :</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={medecin.email}
                  disabled
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Mot de passe :</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={medecin.password}
                  disabled
                />
              </Form.Group>
            </Row>
            <hr />
            <Button
              variant="outline-dark"
              onClick={() => dispatch(UpdateMedecin(medecinRed._id, medecin))}
            >
              Modifier Profil
            </Button>
          </div>
        ) : null}
        <Button
          variant="secondary"
          size="lg"
          style={{ width: "100%", marginTop: "20px" }}
          onClick={() => setActiveRdv(!activeRdv)}
        >
          Voir les rendez-vous : ({RdvMedecin.length})
        </Button>
      </Form>
      <div>
        <MDBCard style={{ maxWidth: "15rem", margin: "20px" }}>
          <MDBCardImage
            src="https://i.ibb.co/JBqhW25/jonathan-borba-Gt4-CWOn-Hd-EE-unsplash.jpg"
            position="top"
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>
              Dr : {medecinRed.lastname} {medecinRed.firstname}
            </MDBCardTitle>
            {/* <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText> */}
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

export default MedecinCardProfil;
