import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_medecin } from "../../JS/Actions/medecin";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MedecinCard from "./MedecinCard";

import "./Medecin.css";

const Medecin = ({ name, city }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_medecin());
    // eslint-disable-next-line
  }, []);

  const listmedecin = useSelector((state) => state.medecinReducer.listmedecin);
  const load = useSelector((state) => state.medecinReducer.load);

  return load ? (
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
      <Link to="/Medecins">
        <Button variant="outline-dark">Afficher plus</Button>
      </Link>
      <div className="medecin">
        {/* {listmedecin.map((medecin,i) => 
           <MedecinCard medecin={medecin} key={i}  />)} */}

        {city && name
          ? listmedecin
              .filter(
                (medecin, i) =>
                  medecin.city.toLowerCase().includes(city.toLowerCase()) &&
                  medecin.lastname.toLowerCase().includes(name.toLowerCase()) &&
                  medecin.firstname.toLowerCase().includes(name.toLowerCase())
              )
              .map((medecin, i) => <MedecinCard medecin={medecin} key={i} />)
          : city
          ? listmedecin
              .filter((medecin, i) => {
                return medecin.city.toLowerCase().includes(city.toLowerCase());
              })
              .map((medecin, i) => <MedecinCard medecin={medecin} key={i} />)
          : name
          ? listmedecin
              .filter((medecin, i) => {
                return (
                  medecin.lastname.toLowerCase().includes(name.toLowerCase()) ||
                  medecin.firstname.toLowerCase().includes(name.toLowerCase())
                );
              })
              .map((medecin, i) => <MedecinCard medecin={medecin} key={i} />)
          : listmedecin.map((medecin, i) => (
              <MedecinCard medecin={medecin} key={i} />
            ))}
      </div>
    </div>
  );
};

export default Medecin;
