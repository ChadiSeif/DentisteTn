import React from "react";
import { Button } from "react-bootstrap";
import { GrValidate } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./RdvCheck.css";

const RdvCheck = () => {
  return (
    <div className="RdvCheck">
      <div className="informationToRegister">
        <h4>Vous n'avez pas encore de compte ?</h4>
        <h5>
          Afin que nous puissions enregistrer votre demande de rendez-vous, il
          vous faut vous créer un compte, celui-ci permet de :
        </h5>
        <ul>
          <li>
            {" "}
            <GrValidate /> Prendre rendez-vous avec le dentiste de votre choix
          </li>
          <li>
            <GrValidate /> Recevoir des confirmations et des rappels de
            rendez-vous
          </li>
          <li>
            <GrValidate /> Consulter l'historique de vos rendez-vous pris via la
            plateforme
          </li>
        </ul>
        <Link to="/Register">
          <Button variant="info">Créer un compte</Button>
        </Link>
      </div>
      <div className="loginRdv">
        <h4>Vous avez déjà un compte ?</h4>
        <Link to="/Login">
          <Button style={{ marginTop: "30px" }} variant="info">
            Connectez-vous
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RdvCheck;
