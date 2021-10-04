import React from "react";

import "./profil2.scss";

const profil2 = ({ user, RendezVous, setRendezVous }) => {
  return (
    <div className="Sidebar">
      <header className="header" role="banner">
        <h1 className="logo">
          <a href={`/Profil/${user._id}/informations`}>
            {user.prenom} <span>{user.nom}</span>
          </a>
        </h1>
        <div className="nav-wrap">
          <nav className="main-nav" role="navigation">
            <ul className="unstyled list-hover-slide">
              <li>
                <a href={`/Profil/${user._id}/Rdv`}>Rendez-vous</a>
              </li>
              <li>
                <a href={`/Profil/${user._id}/informations`}>Profil</a>
              </li>
              <li>
                <a href="http://google.com">Dossier medical</a>
              </li>
              <li>
                <a href="http://google.com">Demandes</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default profil2;
