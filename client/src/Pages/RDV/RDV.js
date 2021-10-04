import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { Current, PrendreRdv } from "../../JS/Actions/user";
import { DatePicker, Space } from "antd";
import { TimePicker } from "antd";
import { Button } from "react-bootstrap";
import { addRdv } from "../../JS/Actions/Rdv";
import { ConfigProvider } from "antd";
import frFR from "antd/lib/locale/fr_FR";
import SimpleMap from "../../Components/GoogleMaps/GoogleMapReact";
import moment from "moment";
import "moment/locale/fr";

import "./RDV.css";

const RDV = ({ location, history }) => {
  ///***Get mededcin ID from Link */
  const medecinid = location.pathname.substring(5);

  //** Get medecin information from Store */

  const medecinRDV = useSelector((state) => state.userReducer.medecinRDV);
  let token = localStorage.getItem("token");

  //**Get userId */
  const userId = useSelector((state) => state.userReducer.user._id);
  console.log(userId);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PrendreRdv(medecinid));
    dispatch(Current());
    setRdv({ ...Rdv, user: userId });
    // eslint-disable-next-line
  }, [dispatch, userId]);

  // RDV
  const [Rdv, setRdv] = useState({
    date: "",
    hour: "",
    consulting: "",
    user: userId,
    medecin: medecinid,
    image: "",
  });

  //Function upload image
  const onChangeFile = (e) => {
    setRdv({ ...Rdv, image: e.target.files[0] });
  };

  const formData = new FormData();
  formData.append("date", Rdv.date);
  formData.append("hour", Rdv.hour);
  formData.append("consulting", Rdv.consulting);
  formData.append("user", Rdv.user);
  formData.append("medecin", Rdv.medecin);
  formData.append("image", Rdv.image);

  console.log(Date.now());

  //Date and time picker
  const format = "HH:mm";
  function onChangetime(time, timeString) {
    setRdv({ ...Rdv, hour: timeString });
  }

  function onChange(date0, dateString) {
    setRdv({ ...Rdv, date: dateString });
  }

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }

  const error = useSelector((state) => state.RdvReducer.error);
  const success = useSelector((state) => state.RdvReducer.success);

  // **Redirect after Confirming */
  const redirectfunction = () => {
    setTimeout(
      //   function () {
      //   window.location.href = "https://www.google.com/";
      // }
      history.push(`/Profil/${Rdv.user}`),
      5000
    );
  };

  return (
    <div className="RDVmedecincontainer">
      {token === null ? (
        <Redirect to="/CheckRdv" />
      ) : (
        <div className="RDVmedecin">
          <div className="RDVprofile">
            <img
              src="https://www.urpsml-hdf.fr/wp-content/uploads/2016/07/profil-homme-bleu.jpg"
              alt="logogmedecin"
              style={{
                width: 150,
                height: 150,
                borderRadius: 150 / 2,
                overflow: "hidden",
                borderWidth: 3,
                borderColor: "red",
              }}
            />

            <ul className="listinformation">
              <li>
                <div className="icontitle">
                  <div id="title">Dr: </div>
                  <div id="medecinInformation">
                    {medecinRDV.firstname} {medecinRDV.lastname}
                  </div>
                </div>
              </li>
              <li>
                <div className="icontitle">
                  <div id="title">Specialité: </div>
                  <div id="medecinInformation">{medecinRDV.speciality}</div>
                </div>
              </li>
              <li>
                <div className="icontitle">
                  <div id="title">Addresse: </div>
                  <div id="medecinInformation">
                    {medecinRDV.address},{medecinRDV.city}
                  </div>
                </div>
                <li>
                  <div className="icontitle">
                    <div id="title">Contact: </div>
                    <div id="medecinInformation">{medecinRDV.phone}</div>
                  </div>
                </li>
              </li>
            </ul>
          </div>
          {/* 
          <div className="Profilmap" style={{ margin: "20px" }}>
            <SimpleMap />
          </div> */}
          {/* *************************Date and Hour********************* */}
          <div className="RDVDate">
            <h4 style={{ marginBottom: "20px" }}>
              {" "}
              Veuillez choisir la date et l'heure de votre rendez-vous
            </h4>
            <ConfigProvider locale={frFR}>
              <Space direction="vertical" size="large">
                <DatePicker
                  disabledDate={disabledDate}
                  placeholder={"Choisir la date de RDV"}
                  onChange={onChange}
                  style={{ width: "300px", height: "50px" }}
                />
              </Space>
              <TimePicker
                defaultValue={moment("12:00", format)}
                onChange={onChangetime}
                format={format}
                style={{ width: "150px", height: "50px" }}
              />
            </ConfigProvider>
            <div>
              <select
                style={{
                  width: "300px",
                  height: "50px",
                  margin: "20px",
                  border: "1px solid rgba(172, 168, 168, 0.43)",
                }}
                onChange={(e) => setRdv({ ...Rdv, consulting: e.target.value })}
              >
                <option>Pourquoi vous consultez ??</option>
                <option value="1ére consultation">1ére consultation</option>
                <option value="Contrôle">Contrôle</option>
                <option value="détartrage">détartrage</option>
                <option value="Suite de traitement">Suite de traitement</option>
                <option value="Autre...">Autre...</option>
              </select>
            </div>

            <hr />
            <h6>
              {" "}
              Si vous possédez une radiographie panoramique merci de l'ajouter{" "}
            </h6>
            {/* ************************fileupload !!! */}
            <div>
              <form
                action="/profile"
                method="post"
                enctype="multipart/form-data"
              >
                <input type="file" name="image" onChange={onChangeFile} />
              </form>
            </div>
            {/* ****************************/}
            <hr />
            <Button
              style={{ margin: "10px", borderColor: "lightgrey" }}
              variant="info"
              onClick={() => {
                dispatch(addRdv(formData, history));
                redirectfunction();
              }}
            >
              Confirmer
            </Button>
            <hr />

            <div className="Profilmap" style={{ margin: "20px" }}>
              <SimpleMap />
            </div>

            {error && !success ? (
              <form style={{ color: "red", fontSize: "12px" }}>
                <p>
                  {error.map((error) => (
                    <p>{error.msg}</p>
                  ))}
                </p>
                <hr />
              </form>
            ) : null}
            {success ? (
              <div>
                <h2> Merci d'avoir choisi Dr {medecinRDV.lastname}</h2>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default RDV;
