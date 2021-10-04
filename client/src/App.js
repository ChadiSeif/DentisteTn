import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Current } from "./JS/Actions/user";
import { currentMedecin } from "./JS/Actions/medecin";
import "./App.css";
import index from "./Pages/Landpage/index";
import profil from "./Pages/Patient/profil";
import login from "./Pages/Login/login";
import register from "./Pages/RegisterRDV/register";
import error from "./Pages/Errors/error";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import PrivateRoute from "./Routes/PrivateRoute";
// import Medecin from "./Pages/Medecin/Medecin";
import RDV from "./Pages/RDV/RDV";
import Medecin from "./Pages/Medecin/Medecin";
import LoginMedecin from "./Pages/Medecin/LoginMedecin";
import ListMedecin from "./Pages/ListMedecin/ListMedecin";
import aboutUs from "./Pages/AboutUs/aboutUs";
import RdvCheck from "./Pages/RdvCheck/RdvCheck";
import profil2 from "./Pages/Patient/profil2";

function App() {
  const [Doctorlogged, setDoctorlogged] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    Doctorlogged ? dispatch(currentMedecin()) : dispatch(Current());
  }, [Doctorlogged, dispatch]);

  return (
    <div className="App">
      <header className="App-header">{<Navbar />}</header>
      <Switch>
        <Route exact path="/" component={index} />
        <PrivateRoute path="/Profil/:_id" component={profil} />
        <Route path="/Login" component={login} />
        <Route path="/RDV" component={RDV} />
        <Route path="/Register" component={register} />
        <Route path="/Dr/:_id" component={Medecin} />
        <Route path="/Medecins" component={ListMedecin} />
        <Route path="/About-Us" component={aboutUs} />
        <Route path="/Test" component={profil2} />
        <Route
          path="/LoginMedecin/"
          render={(props) => (
            <LoginMedecin {...props} setDoctorlogged={setDoctorlogged} />
          )}
        />
        <Route path="/CheckRdv" component={RdvCheck} />
        <Route path="/*" component={error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
