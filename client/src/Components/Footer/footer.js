import React from "react";
// import { Link } from "react-router-dom";
import "./footer.css";

const footer = () => {
  return (
    <div className="footer">
      <div>
        <img src="/logo.png" alt="logo" style={{ width: "25px" }} />
        <p> Copyright © 2021 .Chadi Tous droits réservés.</p>
      </div>
      <div>
        <ul style={{ listStyleType: "none" }}>
          Legal
          <li>Confidentialité et Sécurité</li>
          <li>Conditions générales d'utilisation</li>
          <li>politique de protection des données personnelles </li>
        </ul>
      </div>
      <ul style={{ listStyleType: "none" }}>
        Dentiste.tn
        {/* <Link to={"/About-Us"}> */}
        <li>
          <a style={{ color: "inherit" }} href="/About-Us">
            Qui somme nous ?
          </a>
        </li>
        {/* </Link> */}
        <li>Nous contacter</li>
      </ul>
    </div>
  );
};

export default footer;
