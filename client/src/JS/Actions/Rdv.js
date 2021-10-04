import axios from "axios";
import {
  CREATE_RDV_FAIL,
  CREATE_RDV_LOAD,
  CREATE_RDV_SUCCESS,
  // GET_RDV_MEDECIN_FAIL,
  GET_RDV_MEDECIN_LOAD,
  GET_RDV_MEDECIN_SUCCESS,
  GET_RDV_USER_FAIL,
  GET_RDV_USER_LOAD,
  GET_RDV_USER_SUCCESS,
  RDV_DELETE_FAIL,
  RDV_DELETE_SUCCESS,
  RDV_UPDATE_FAIL,
  RDV_UPDATE_SUCCESS,
} from "../ActionType/Rdv";

export const addRdv = (Rdv, history) => async (dispatch) => {
  dispatch({ type: CREATE_RDV_LOAD });

  try {
    const result = await axios.post("/api/Rdv/Add", Rdv);
    dispatch({ type: CREATE_RDV_SUCCESS, payload: result.data });
    // history.push(`/Profil/${Rdv.user}`);
  } catch (error) {
    dispatch({ type: CREATE_RDV_FAIL, payload: error.response.data });
  }
};

export const GetRdvUser = (userid, history) => async (dispatch) => {
  dispatch({ type: GET_RDV_USER_LOAD });
  try {
    const result = await axios.get(`/api/Rdv/user/${userid}`);
    dispatch({ type: GET_RDV_USER_SUCCESS, payload: result.data });
    // history.push(`/Profil/${userid}`);
  } catch (error) {
    dispatch({ type: GET_RDV_USER_FAIL, payload: error.response.data });
  }
};

export const GetRdvMedecin = (medecinid) => async (dispatch) => {
  dispatch({ type: GET_RDV_MEDECIN_LOAD });
  try {
    const result = await axios.get(`/api/Rdv/medecin/${medecinid}`);
    dispatch({ type: GET_RDV_MEDECIN_SUCCESS, payload: result.data });
  } catch (error) {
    // dispatch({ type: GET_RDV_MEDECIN_FAIL, payload: error.response.data });
  }
};

export const UpdateRdv = (Rdv_id, Rdvupdated) => async (dispatch) => {
  try {
    const result = await axios.put(`/api/Rdv/updateRdv/${Rdv_id}`, Rdvupdated);
    dispatch({ type: RDV_UPDATE_SUCCESS, payload: result });
    // alert("le rendez-vous a été modifiés !");
    window.location.reload();
  } catch (error) {
    dispatch({ type: RDV_UPDATE_FAIL, payload: error.response.data });
    console.log(error);
  }
};

export const deleteRdv = (Rdv_id) => async (dispatch) => {
  try {
    await axios.delete(`/api/Rdv/deleteRdv/${Rdv_id}`);
    dispatch({ type: RDV_DELETE_SUCCESS });
    window.location.reload();
  } catch (error) {
    dispatch({ type: RDV_DELETE_FAIL, payload: error.response.data });
  }
};
