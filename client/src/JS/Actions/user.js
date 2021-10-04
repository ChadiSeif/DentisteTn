import axios from "axios";
import {
  USER_LOAD,
  REGISTER_SUCCESS,
  USER_FAIL,
  LOGIN_SUCCESS,
  CURRENT_USER,
  LOGOUT,
  PRENDRE_RDV,
  PRENDRE_RDV_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
} from "../ActionType/user";

export const RegisterUser = (newUser, history) => async (dispatch) => {
  dispatch({ type: USER_LOAD });
  try {
    const result = await axios.post("/api/user/Register", newUser);
    dispatch({ type: REGISTER_SUCCESS, payload: result.data }); //msg.newuser.token
    // const profile_id = result.data.newuser._id;
    localStorage.setItem("token", result.data.token);
    history.back();
  } catch (error) {
    dispatch({ type: USER_FAIL, payload: error.response.data });
  }
};

export const LoginUser = (User, history) => async (dispatch) => {
  dispatch({ type: USER_LOAD });
  try {
    const result = await axios.post("/api/user/Login", User);
    dispatch({ type: LOGIN_SUCCESS, payload: result.data });
    const profile_id = result.data.userToFind._id;

    localStorage.setItem("token", result.data.token);
    // localStorage.setItem("role", result.data.userToFind.role);
    console.log(result.data.userToFind.role);
    history.push(`/Profil/${profile_id}`);
  } catch (error) {
    dispatch({ type: USER_FAIL, payload: error.response.data });
  }
};

export const Current = () => async (dispatch) => {
  dispatch({ type: USER_LOAD });
  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    const result = await axios.get("/api/user/Current", config);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    // dispatch({ type: USER_FAIL, payload: error.response.data });
  }
};

export const Logout = () => {
  localStorage.removeItem("token");
  return {
    type: LOGOUT,
    payload: "",
  };
};

export const PrendreRdv = (medecinid) => async (dispatch) => {
  try {
    const result = await axios.get(`/api/medecin/onedoctor/${medecinid}`);
    dispatch({ type: PRENDRE_RDV, payload: result.data.doctorfound });
  } catch (error) {
    dispatch({ type: PRENDRE_RDV_FAIL, payload: error.response.data });
  }
};

export const UpdateUser = (userid, userupdated) => async (dispatch) => {
  try {
    await axios.put(`/api/user/updateuser/${userid}`, userupdated);
    console.log(userupdated);
    dispatch({ type: UPDATE_USER_SUCCESS });
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAIL, payload: error.response.data });
  }
};
