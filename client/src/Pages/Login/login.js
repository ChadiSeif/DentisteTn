import React, { useState } from "react";
import { useDispatch , useSelector} from "react-redux";

import { LoginUser } from "../../JS/Actions/user";
import "./login.css";

const Login = ({ history }) => {
  const [User, setUser] = useState({
    email: "",
    motdepass: "",
  });


const error = useSelector(state => state.userReducer.error)


  const HandleChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  return (
    <div>
      <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div className="container">
          <div className="card login-card">
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src="assets/loginbrush.jpg"
                  alt="login"
                  className="login-card-img"
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <div className="brand-wrapper">
                    <img src="/logo.png" alt="logo" className="logo" />
                  </div>
                  <p className="login-card-description">
                    Connectez-vous à votre compte:
                  </p>
                  {error?
                  <div style={{color:"red" , fontSize:"12px"}}>
                    <p> {error.map(error=>error.msg)}</p>
                  </div>:null}
                  <form action="#!">
                    <div className="form-group">
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={User.email}
                        onChange={HandleChange}
                        className="form-control"
                        placeholder="Adresse email"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="password" className="sr-only">
                        Mot de passe
                      </label>
                      <input
                        type="password"
                        name="motdepass"
                        id="password"
                        className="form-control"
                        value={User.motdepass}
                        onChange={HandleChange}
                        placeholder="***********"
                      />
                    </div>
                    <input
                      name="login"
                      id="login"
                      className="btn btn-block login-btn mb-4"
                      type="button"
                      defaultValue="Connexion"
                      onClick={() => dispatch(LoginUser(User, history))}
                    />
                  </form>
                  <a href="#!" className="forgot-password-link">
                    Mot de passe oublié ?
                  </a>
                  {/* <p className="login-card-footer-text">
                    Don't have an account?{" "}
                    <a href="#!" className="text-reset">
                      Register here
                    </a>
                  </p> */}
                  <hr />
                  <nav className="login-card-footer-nav">
                    <a href="#!">Terms of use.</a>
                    <br />
                    <a href="#!">Privacy policy</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
