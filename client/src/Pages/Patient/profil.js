import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileRdv from "../../Components/PatientProfile/ProfileRdv";
import { GetRdvUser } from "../../JS/Actions/Rdv";
import { Switch, Route } from "react-router-dom";
import ProfilInformations from "../../Components/PatientProfile/ProfilInformations";
import "./profil.css";
import ProfilSidebar from "./profil2";

const Profil = ({ location }) => {
  ////************Set USER state */

  const [user, setuser] = useState({
    prenom: "",
    nom: "",
    numero: "",
    email: "",
    dateDeNaissance: "",
    motdepass: "",
  });

  ////************Get USER and Rdv reducers from Store */
  const userRed = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  //***************Get user Id */
  const userid = location.pathname.substring(8, 32);

  useEffect(() => {
    setuser(userRed);
    dispatch(GetRdvUser(userid));
    // eslint-disable-next-line
  }, [userRed, userid]);

  return (
    <div className="profile">
      <div className="profileSideBar">
        <ProfilSidebar user={user} />
      </div>
      <div className="profileContainer">
        <Switch>
          <Route exact path="/Profil/:id/Rdv" component={ProfileRdv} />
          <Route
            exact
            path="/Profil/:id/informations"
            render={(props) => (
              <ProfilInformations
                user={user}
                setuser={setuser}
                userid={userid}
              />
            )}
          />
        </Switch>
        {/* <ProfileRdv /> */}
      </div>
    </div>

    // <div className="profile">
    //   <div className="ProfileCard">
    //     <Card style={{ width: "18rem" }}>
    //       <Card.Img
    //         variant="top"
    //         src="https://w7.pngwing.com/pngs/791/121/png-transparent-health-care-medicine-physician-patient-contract-research-organization-infirm-text-hospital-surgery.png"
    //         alt="profil"
    //       />
    //       <Card.Body>
    //         <Card.Title>{user.nom}</Card.Title>
    //         <Card.Title>{user.prenom}</Card.Title>
    //         <ListGroup className="list-group-flush">
    //           <ListGroupItem>{user.dateDeNaissance}</ListGroupItem>
    //           <ListGroupItem>{user.email} </ListGroupItem>
    //           <ListGroupItem>Numero de téléphone : {user.numero}</ListGroupItem>
    //         </ListGroup>

    //         {/* Modal **************/}

    //         <Button variant="primary" onClick={handleShow}>
    //           Modifier Mon Profil
    //         </Button>
    //         <Modal show={show} onHide={handleClose}>
    //           <Modal.Header closeButton>
    //             <Modal.Title>Modal heading</Modal.Title>
    //           </Modal.Header>

    //           {/* ********** Form Modal ************** */}
    //           <Form style={{ width: "400px", marginLeft: "50px" }}>
    //             <Row className="mb-3">
    //               <Form.Group as={Col} controlId="formGridEmail">
    //                 <Form.Label>Nom</Form.Label>
    //                 <Form.Control
    //                   type="text"
    //                   name="nom"
    //                   value={user.nom}
    //                   onChange={HandleChange}
    //                 />
    //               </Form.Group>

    //               <Form.Group as={Col} controlId="formGridPassword">
    //                 <Form.Label>Prénom</Form.Label>
    //                 <Form.Control
    //                   type="text"
    //                   name="prenom"
    //                   value={user.prenom}
    //                   onChange={HandleChange}
    //                 />
    //               </Form.Group>
    //             </Row>

    //             <Row className="mb-3">
    //               <Form.Group as={Col} controlId="formGridCity">
    //                 <Form.Label>dateDeNaissance</Form.Label>
    //                 <Form.Control
    //                   name="dateDeNaissance"
    //                   value={user.dateDeNaissance}
    //                   onChange={HandleChange}
    //                 />
    //               </Form.Group>

    //               <Form.Group as={Col} controlId="formGridZip">
    //                 <Form.Label>Numéro :</Form.Label>
    //                 <Form.Control
    //                   name="numero"
    //                   value={user.numero}
    //                   onChange={HandleChange}
    //                 />
    //               </Form.Group>
    //             </Row>

    //             <Row className="mb-3">
    //               <Form.Group as={Col} controlId="formGridEmail">
    //                 <Form.Label>Email :</Form.Label>
    //                 <Form.Control
    //                   type="email"
    //                   name="email"
    //                   value={user.email}
    //                   disabled
    //                 />
    //               </Form.Group>

    //               <Form.Group as={Col} controlId="formGridPassword">
    //                 <Form.Label>Mot de passe :</Form.Label>
    //                 <Form.Control
    //                   type="password"
    //                   name="password"
    //                   value={user.motdepass}
    //                   disabled
    //                 />
    //               </Form.Group>
    //             </Row>
    //           </Form>

    //           <Modal.Footer>
    //             <Button
    //               variant="primary"
    //               onClick={() => {
    //                 dispatch(UpdateUser(userid, user));
    //                 handleClose();
    //               }}
    //             >
    //               Enregistrer
    //             </Button>
    //           </Modal.Footer>
    //         </Modal>
    //       </Card.Body>
    //     </Card>
    //   </div>

    // </div>
  );
};

export default Profil;
