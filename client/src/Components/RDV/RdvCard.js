import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { deleteRdv, UpdateRdv } from "../../JS/Actions/Rdv";
import { DatePicker, Space } from "antd";
import { TimePicker } from "antd";
import moment from "moment";

const RdvCard = ({ Rdv }) => {
  const [newRdv, setNewRdv] = useState({
    RdvUpdate: false,
    RdvUpdateHour: "",
    RdvUpdateDate: "",
  });

  // console.log(newRdv);
  const updated = Rdv.RdvUpdate;
  const updateconfirmed = Rdv.RdvUpdateConfirm;

  ///** Modifier le Rendez vous **************/

  const [changement, setChangement] = useState(false);
  const format = "HH:mm";

  function onChangetime(time, timeString) {
    setNewRdv({ ...newRdv, RdvUpdateHour: timeString });
  }
  function onChange(date0, dateString) {
    setNewRdv({ ...newRdv, RdvUpdateDate: dateString });
  }

  const dispatch = useDispatch();

  return (
    <div>
      {updated ? (
        <div>
          {!updateconfirmed ? (
            <div>
              <Card className="text-center">
                <Card.Header as="h5">A noter que :</Card.Header>
                <Card.Body>
                  <Card.Title>
                    Votre demande est en cours d'instruction , veuillez attendre
                    la confirmation de votre médecin dentiste
                  </Card.Title>
                  <br />
                  <footer className="blockquote-footer">
                    Votre nouvelle date le : {Rdv.RdvUpdateDate} à :{" "}
                    {Rdv.RdvUpdateHour}
                  </footer>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(deleteRdv(Rdv._id))}
                  >
                    Annuler le Rendez-vous
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ) : (
            <div>
              <Card className="text-center">
                <Card.Header as="h5">A noter que :</Card.Header>
                <Card.Body>
                  <Card.Title>
                    Votre demande de changement de la date et l'heure est
                    confirmée ! Merci de choisir dentiste.tn
                  </Card.Title>
                  <br />
                  <footer className="blockquote-footer">
                    Votre nouvelle date est le : {Rdv.RdvUpdateDate} à :{" "}
                    {Rdv.RdvUpdateHour}
                  </footer>
                  {/* <Button
                    variant="danger"
                    onClick={() => dispatch(deleteRdv(Rdv._id))}
                  >
                    Annuler le Rendez-vous
                  </Button> */}
                </Card.Body>
              </Card>
            </div>
          )}

          {/* <div>
            {Rdv.confirmed ? (
              <h3>
                {" "}
                Votre rendez-vous est confirmé ! prière de ne plus le modifier{" "}
              </h3>
            ) : null}
          </div> */}
        </div>
      ) : (
        <div style={{ margin: "20px" }}>
          <Card className="text-center">
            <Card.Header>Prochain Rendez-vous :</Card.Header>
            <Card.Body>
              <Card.Title>{Rdv.date}</Card.Title>
              <Card.Title>{Rdv.hour}</Card.Title>
              <Card.Text>Vous consulter pour : {Rdv.consulting}</Card.Text>

              <div style={{ margin: "20px" }}>
                {Rdv.confirmed ? (
                  <h3>
                    {" "}
                    Votre rendez-vous est confirmé ! Merci de choisir
                    dentiste.Tn{" "}
                  </h3>
                ) : (
                  <div>
                    <Button
                      variant="primary"
                      onClick={() => {
                        setChangement(!changement);
                        setNewRdv({ ...newRdv, RdvUpdate: true });
                      }}
                    >
                      Changer Date
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => dispatch(deleteRdv(Rdv._id))}
                    >
                      Annuler le Rdv
                    </Button>
                    <h4 style={{ margin: "20px" }}>
                      Veuillez attendre la confirmation de votre médecin
                      dentiste
                    </h4>
                  </div>
                )}
              </div>
              {changement ? (
                <>
                  <div style={{ margin: "20px" }}>
                    <Space direction="vertical" size="large">
                      <DatePicker
                        placeholder={"Choisir la date de RDV"}
                        onChange={onChange}
                        style={{ width: "15vw", height: "8vh" }}
                      />
                    </Space>
                    <TimePicker
                      defaultValue={moment("12:00", format)}
                      onChange={onChangetime}
                      format={format}
                      style={{ width: "15vw", height: "8vh" }}
                    />
                  </div>
                  <div>
                    <Button
                      variant="warning"
                      onClick={() => dispatch(UpdateRdv(Rdv._id, newRdv))}
                    >
                      Confirmer Changement
                    </Button>
                  </div>
                </>
              ) : null}
            </Card.Body>
            <Card.Footer className="text-muted">
              Avec Dr : {Rdv.medecin.firstname} {Rdv.medecin.lastname}
            </Card.Footer>
          </Card>
        </div>
      )}
    </div>
  );
};

export default RdvCard;
