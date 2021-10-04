import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_onemedecin } from "../../JS/Actions/medecin";
import "./Medecin.css";
// import SideBar from "../../Components/SideBar/SideBar";
import MedecinCardProfil from "../../Components/Medecin/MedecinCardProfil";
import MedecinPatients from "../../Components/Medecin/MedecinPatients";
import { GetRdvMedecin } from "../../JS/Actions/Rdv";

const Medecin = ({ history, location }) => {
  const medecinid = location.pathname.substring(4);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_onemedecin(medecinid));
    dispatch(GetRdvMedecin(medecinid));
    // eslint-disable-next-line
  }, [dispatch, medecinid]);

  const medecin = useSelector((state) => state.medecinReducer.medecin);
  const RdvMedecin = useSelector((state) => state.RdvReducer.RdvMedecin);
  console.log(RdvMedecin.length);

  //** controler appartion des rendez vous */
  const [activeRdv, setActiveRdv] = useState(false);

  return (
    <div classname="medecinall">
      <h2 style={{ marginTop: "30px" }}>Bienvenue docteur !</h2>
      <MedecinCardProfil
        medecinRed={medecin}
        setActiveRdv={setActiveRdv}
        activeRdv={activeRdv}
      />
      <div className="medecinlistrdv">
        {RdvMedecin.map((Rdv, i) => {
          return (
            <div>
              <MedecinPatients Rdv={Rdv} key={i} activeRdv={activeRdv} />
            </div>
          );
        })}
      </div>
      {/* {/* <SideBar /> */}
    </div>
  );
};

export default Medecin;
