import React, { useState } from "react";
import { Card, Nav, Button } from "react-bootstrap";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { UpdateUser } from "../../JS/Actions/user";
import "./ProfilInformations.css";

const ProfilInformations = ({ user, setuser, userid }) => {
  const HandleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  /**Modal */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="ProfilInformations">
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first"></Nav>
        </Card.Header>
        <div className="bodyInformations">
          <div>
            <h5>
              Email : <span> {user.email}</span>{" "}
            </h5>
          </div>
          <div>
            <h5>
              Nom : <span> {user.nom} </span>
            </h5>
          </div>
          <div>
            <h5>
              Prenom : <span> {user.email}</span>
            </h5>
          </div>
          <div>
            <h5>
              Numéro de téléphone : <span> {user.numero}</span>
            </h5>
          </div>
          <div>
            <h5>
              Date de naissance : <span>{user.dateDeNaissance}</span>
            </h5>
          </div>
          <div>
            <Button variant="primary" onClick={handleShow}>
              Modifier Mon Profil
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>

              {/* ********** Form Modal ************** */}
              <Form style={{ width: "400px", marginLeft: "50px" }}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                      type="text"
                      name="nom"
                      value={user.nom}
                      onChange={HandleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control
                      type="text"
                      name="prenom"
                      value={user.prenom}
                      onChange={HandleChange}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>dateDeNaissance</Form.Label>
                    <Form.Control
                      name="dateDeNaissance"
                      value={user.dateDeNaissance}
                      onChange={HandleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Numéro :</Form.Label>
                    <Form.Control
                      name="numero"
                      value={user.numero}
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
                      value={user.email}
                      disabled
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Mot de passe :</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={user.motdepass}
                      disabled
                    />
                  </Form.Group>
                </Row>
              </Form>

              <Modal.Footer>
                <Button
                  variant="primary"
                  style={{ margin: "auto", marginTop: "20px" }}
                  onClick={() => {
                    dispatch(UpdateUser(userid, user));
                    handleClose();
                  }}
                >
                  Modifier mes informations
                </Button>
                {/* <Button
                  variant="primary"
                  onClick={() => {
                    dispatch(UpdateUser(userid, user));
                    handleClose();
                  }}
                >
                  Enregistrer
                </Button> */}
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfilInformations;
