import {
  CURRENT_DOCTOR,
  GET_ONEDOCTOR_FAIL,
  GET_ONEDOCTOR_SUCCESS,
  LIST_MEDECINS_FAIL,
  LIST_MEDECINS_LOAD,
  LIST_MEDECINS_SUCCESS,
  LOGIN_MEDECIN_FAIL,
  LOGIN_MEDECIN_SUCCESS,
  UPDATE_MEDECIN_FAIL,
  LOGOUT_MEDECIN,
  LOGIN_MEDECIN_LOAD,
} from "../ActionType/medecin";

const initstate = {
  listmedecin: [],
  load: false,
  error: [],
  medecinIsAuth: false,
  medecin: {},
};

const medecinReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case LIST_MEDECINS_LOAD:
      return { ...state, load: true };
    case LIST_MEDECINS_SUCCESS:
      return { ...state, listmedecin: payload.medecins, load: false };
    case LIST_MEDECINS_FAIL:
      return { ...state, load: false, error: payload.error };
    case GET_ONEDOCTOR_SUCCESS:
      return { ...state, medecin: payload.doctorfound, medecinIsAuth: true };
    case GET_ONEDOCTOR_FAIL:
      return { ...state, error: payload.error };
    case LOGIN_MEDECIN_LOAD:
      return { ...state, load: false };
    case LOGIN_MEDECIN_SUCCESS:
      return {
        ...state,
        medecin: payload.doctorfound,
        medecinIsAuth: true,
        load: false,
      };
    case LOGIN_MEDECIN_FAIL:
      return { ...state, error: payload.errors };
    case UPDATE_MEDECIN_FAIL:
      return { ...state, error: payload.error };
    case CURRENT_DOCTOR:
      return { ...state, medecin: payload };
    case LOGOUT_MEDECIN:
      return { ...state, medecinIsAuth: false };
    default:
      return state;
  }
};

export default medecinReducer;
