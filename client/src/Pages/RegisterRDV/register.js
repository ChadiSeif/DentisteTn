import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
import { RegisterUser } from "../../JS/Actions/user";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

import "./register.css";
// import ContactUs from "../../Components/User/ContactUs";

const Register = ({ history }) => {
  //*********************************** send email */

  init("user_ru2ljoqZ7rIJ4rzxS7smy");
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jwxnxjb",
        "template_gjtye7s",
        e.target,
        "user_ru2ljoqZ7rIJ4rzxS7smy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  //********************************************* */

  const [newUser, setNewUser] = useState({
    nom: "",
    prenom: "",
    numero: "",
    dateDeNaissance: "",
    raison: "",
    email: "",
    motdepass: "",
  });

  const dispatch = useDispatch();

  const error = useSelector((state) => state.userReducer.error);

  const HandleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  ///////////////////
  //   if (error) {
  //   const result = error.find((err, i) => (i = 3));
  //   // console.log(erroremail.msg);
  //   console.log(result.msg);
  // }
  return (
    <div className="all">
      <div style={{ margin: "20px" }}>
        <h4> Créez votre compte sur Dentiste.tn </h4>
        <h5> Prenez soin de bien remplir chaque champ ci-dessous. </h5>
      </div>

      <div className="formulaire">
        <div className="msg">
          {error ? (
            <form style={{ color: "red", fontSize: "12px" }}>
              <p>
                {" "}
                {error.map((error) => (
                  <p>{error.msg}</p>
                ))}
                Veuillez remplir les champs vides
              </p>
              <hr />
            </form>
          ) : null}
          {/* <Link to="/Login">
            <Button variant="light" style={{ width: "50%" }}>
              Dejà inscrit ?
            </Button>
          </Link>
          <hr /> */}
        </div>

        <form>
          <input
            type="text"
            name="nom"
            value={newUser.nom}
            onChange={HandleChange}
            placeholder="Nom"
            style={{
              borderColor: newUser.nom === "" && error ? "red" : null,
            }}
          />
        </form>

        <form>
          <input
            type="text"
            name="prenom"
            value={newUser.prenom}
            onChange={HandleChange}
            placeholder="Prénom"
            style={{
              borderColor: newUser.prenom === "" && error ? "red" : null,
            }}
          />
        </form>
        <form>
          <input
            type="text"
            name="numero"
            value={newUser.numero}
            onChange={HandleChange}
            placeholder="Numero de téléphone"
            style={{
              borderColor: newUser.numero === "" && error ? "red" : null,
            }}
          />
        </form>
        <form>
          <input
            type="text"
            name="dateDeNaissance"
            value={newUser.dateDeNaissance}
            onChange={HandleChange}
            placeholder="Date de naissance ( jj/mm/aaaa/ )"
            style={{
              borderColor:
                newUser.dateDeNaissance === "" && error ? "red" : null,
            }}
          />
        </form>
        <div></div>
        <form>
          <input
            type="text"
            name="email"
            value={newUser.email}
            onChange={HandleChange}
            placeholder=" Email "
            style={{
              borderColor: newUser.email === "" && error ? "red" : null,
            }}
          />
        </form>

        <form>
          <input
            type="password"
            name="motdepass"
            value={newUser.motdepass}
            onChange={HandleChange}
            placeholder=" Mot de passe "
            style={{
              borderColor: newUser.motdepass === "" && error ? "red" : null,
            }}
          />

          <hr />
        </form>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <input type="hidden" name="user_name" value={newUser.nom} />
          <input type="hidden" name="user_email" value={newUser.email} />
          <input type="hidden" name="user_password" value={newUser.motdepass} />

          <button
            className="boutton"
            type="submit"
            value="Send"
            onClick={() => {
              dispatch(RegisterUser(newUser, history));
            }}
          >
            S'inscrire
          </button>
          {/* <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            {" "}
            go up
          </button> */}
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Register;
