import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteRdv } from "../../JS/Actions/Rdv";
import { UpdateRdv } from "../../JS/Actions/Rdv";
import { IoMdDoneAll } from "react-icons/io";
import ImageUploaded from "../FileUpload/ImageUploaded";

const MedecinPatients = ({ Rdv, activeRdv }) => {
  // const [confirmed, setconfirmed] = useState(false);
  // const [RdvUpdateConfirm, setRdvUpdateConfirm] = useState(true);
  // console.log(Rdv.RdvUpdate);
  // const state = useSelector((state) => state.state);
  const dispatch = useDispatch();

  const [DatePassed, setDatePassed] = useState(false);
  const dateRDV = new Date(Rdv.date);
  const dateNOW = new Date();

  useEffect(() => {
    return () => {
      dateRDV > dateNOW ? setDatePassed(true) : console.log(false);
    };
  }, [dateRDV]);

  console.log(DatePassed);
  return (
    <div style={{ margin: "20px" }}>
      {activeRdv ? (
        <Card>
          <Card.Header>
            {" "}
            {DatePassed ? (
              "Prochains rendez-vous"
            ) : (
              <h7>
                {" "}
                Rendez-vous passé <IoMdDoneAll />
              </h7>
            )}
          </Card.Header>
          <Card.Body>
            {Rdv.image ? (
              <h5 style={{ cursor: "pointer" }}>
                <ImageUploaded Rdv={Rdv} />
              </h5>
            ) : null}
            <Card.Title>
              {Rdv.hour} / {Rdv.date}
            </Card.Title>
            <Card.Text>
              Patient : {Rdv.user.nom} {Rdv.user.prenom}
            </Card.Text>
            <Card.Text> Consulte pour : {Rdv.consulting}</Card.Text>

            <div>
              {Rdv.RdvUpdate ? (
                <div style={{ color: "red" }}>
                  <p>
                    {" "}
                    Votre patient demande un changement de rendez vous pour le{" "}
                    {Rdv.RdvUpdateDate} à {Rdv.RdvUpdateHour}
                  </p>
                  <Button
                    variant="warning"
                    onClick={() =>
                      dispatch(UpdateRdv(Rdv._id, { RdvUpdateConfirm: true }))
                    }
                  >
                    {!Rdv.RdvUpdateConfirm
                      ? "Confirmer le changement"
                      : "Confirmé!"}
                  </Button>
                </div>
              ) : Rdv.confirmed ? (
                <div>
                  <Button variant="success"> Rdv confirmé !</Button>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(deleteRdv(Rdv._id))}
                  >
                    Annuler Rdv
                  </Button>
                </div>
              ) : (
                <div>
                  <Button
                    variant="primary"
                    onClick={() =>
                      dispatch(UpdateRdv(Rdv._id, { confirmed: true }))
                    }
                  >
                    Confirmer le rendez-vous
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(deleteRdv(Rdv._id))}
                  >
                    Annuler le Rdv
                  </Button>
                </div>
              )}
            </div>
          </Card.Body>
        </Card>
      ) : null}
    </div>
  );
};

export default MedecinPatients;
