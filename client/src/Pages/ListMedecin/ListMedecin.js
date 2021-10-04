import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MedecinCardList from "../../Components/Medecin/MedecinCardList";
import { GET_medecin } from "../../JS/Actions/medecin";

import "./listMedecin.css";

const ListMedecin = () => {
  useEffect(() => {
    dispatch(GET_medecin());
    // eslint-disable-next-line
  }, []);

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const listmedecin = useSelector((state) => state.medecinReducer.listmedecin);
  const load = useSelector((state) => state.medecinReducer.load);

  return (
    <div className="pagelistmedecin">
      <div className="formContainer">
        <div className="form">
          <input
            className="input1"
            placeholder="Nom du médecin ..."
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            className="input2"
            placeholder="Ville..."
            onChange={(e) => {
              setCity(e.target.value);
            }}
          ></input>
          <button className="Button">Rechercher</button>
        </div>
      </div>
      <div className="listmedecinscontainer">
        {load ? (
          <div className="loading">
            <svg
              version="1.2"
              height={300}
              width={600}
              xmlns="http://www.w3.org/2000/svg"
              viewport="0 0 60 60"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                id="pulsar"
                stroke="rgba(0,155,155,1)"
                fill="none"
                strokeWidth={1}
                strokeLinejoin="round"
                d="M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210"
              />
            </svg>
          </div>
        ) : (
          <div>
            <div className="listmedecin">
              {/* {listmedecin.map((medecin,i) => 
           <MedecinCard medecin={medecin} key={i}  />)} */}

              {city && name
                ? listmedecin
                    .filter(
                      (medecin, i) =>
                        medecin.city
                          .toLowerCase()
                          .includes(city.toLowerCase()) &&
                        medecin.lastname
                          .toLowerCase()
                          .includes(name.toLowerCase()) &&
                        medecin.firstname
                          .toLowerCase()
                          .includes(name.toLowerCase())
                    )
                    .map((medecin, i) => (
                      <MedecinCardList medecin={medecin} key={i} />
                    ))
                : city
                ? listmedecin
                    .filter((medecin, i) => {
                      return medecin.city
                        .toLowerCase()
                        .includes(city.toLowerCase());
                    })
                    .map((medecin, i) => (
                      <MedecinCardList medecin={medecin} key={i} />
                    ))
                : name
                ? listmedecin
                    .filter((medecin, i) => {
                      return (
                        medecin.lastname
                          .toLowerCase()
                          .includes(name.toLowerCase()) ||
                        medecin.firstname
                          .toLowerCase()
                          .includes(name.toLowerCase())
                      );
                    })
                    .map((medecin, i) => (
                      <MedecinCardList medecin={medecin} key={i} />
                    ))
                : listmedecin.map((medecin, i) => (
                    <MedecinCardList medecin={medecin} key={i} />
                  ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListMedecin;
