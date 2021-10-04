import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../../JS/Actions/user";
import { Logoutmedecin } from "../../JS/Actions/medecin";

const NavBar = () => {
  const UserIsAuth = useSelector((state) => state.userReducer.UserIsAuth);
  const medecinIsAuth = useSelector(
    (state) => state.medecinReducer.medecinIsAuth
  );

  const user = useSelector((state) => state.userReducer.user);
  const medecin = useSelector((state) => state.medecinReducer.medecin);
  // const medecin = useSelector((state) => state.medecinReducer.medecin);
  const dispatch = useDispatch();

  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Link exact to="/">
          <Navbar.Brand
            href="#home"
            style={{
              fontFamily: "Lobster",
              fontSize: "xxx-large",
            }}
          >
            Dentiste.tn
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav>
              <Link exact to="/">
                <Nav.Link href="/">Accueil</Nav.Link>
              </Link>
              <Nav.Link href="About-Us">Qui somme-nous ?</Nav.Link>
              <NavDropdown
                className="drop"
                title="Spécialité"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1" classname="action">
                  Prothèse conjointe
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Prothèse partielle amovible
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Prothèse totale adjointe
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Parodontologie
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Orthopédie donto-faciale{" "}
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Odontologie conservatrice et endodontie{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Odontologie pédiatrique et prévention{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Médecine et chirurgie buccales{" "}
                </NavDropdown.Item>
              </NavDropdown>

              {UserIsAuth ? (
                <>
                  <Link to={`/Profil/${user._id}`}>
                    <Nav.Link href="#home">Bienvenue {user.nom} </Nav.Link>
                  </Link>
                  <Link to={"/"}>
                    <Button
                      variant="outline-light"
                      onClick={() => dispatch(Logout())}
                    >
                      Logout
                    </Button>
                  </Link>
                </>
              ) : medecinIsAuth ? (
                <div>
                  <Link to={`/Dr/${medecin._id}`}>
                    <Nav.Link href="#home">
                      Bienvenue Dr {medecin.lastname}{" "}
                    </Nav.Link>
                  </Link>
                  <Link to={"/"}>
                    <Button
                      variant="outline-light"
                      onClick={() => dispatch(Logoutmedecin())}
                    >
                      Logout
                    </Button>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to="/Login">
                    <Button
                      variant="outline-light"
                      style={{ marginRight: "10px", marginLeft: "10px" }}
                    >
                      Connexion
                    </Button>
                  </Link>
                  <Link to="/LoginMedecin">
                    <Button variant="outline-light">vous êtes médecin ?</Button>
                  </Link>
                </div>
              )}
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
