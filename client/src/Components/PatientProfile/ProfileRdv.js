import React from "react";
import { useSelector } from "react-redux";
import { Nav, Card, Button } from "react-bootstrap";
import RdvCard from "../RDV/RdvCard";

const ProfileRdv = () => {
  const RdvUser = useSelector((state) => state.RdvReducer.RdvUser);

  return (
    <div style={{ margin: "30px 0 100px " }}>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Prochains rendez-vous</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#second">Demandes en attente</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#third">Rendez-vous passés</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <div className="RDVcard">
            {RdvUser.map((Rdv, i) => (
              <RdvCard Rdv={Rdv} key={i} />
            ))}
          </div>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileRdv;
