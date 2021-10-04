const {
  CREATE_RDV_LOAD,
  CREATE_RDV_SUCCESS,
  CREATE_RDV_FAIL,
  GET_RDV_USER_FAIL,
  GET_RDV_USER_LOAD,
  GET_RDV_USER_SUCCESS,
  GET_RDV_MEDECIN_LOAD,
  GET_RDV_MEDECIN_SUCCESS,
  GET_RDV_MEDECIN_FAIL,
  RDV_UPDATE_SUCCESS,
  RDV_UPDATE_FAIL,
} = require("../ActionType/Rdv");

const initstate = {
  load: true,
  Rdv: {},
  RdvUser: [],
  RdvMedecin: [],
  RdvUpdate: "",
  error: [],
  success: false,
};

const RdvReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case CREATE_RDV_LOAD:
      return { ...state, load: true };
    case CREATE_RDV_SUCCESS:
      return { ...state, load: false, Rdv: payload.rendezvous, success: true }; //msg,rendezvous
    case CREATE_RDV_FAIL:
      return { ...state, load: false, error: payload.errors };
    case GET_RDV_USER_LOAD:
      return { ...state, load: true };
    case GET_RDV_USER_SUCCESS:
      return { ...state, RdvUser: payload.userRdv, load: false };
    case GET_RDV_USER_FAIL:
      return { ...state, error: payload.errors, load: false };
    case GET_RDV_MEDECIN_LOAD:
      return { ...state, load: true };
    case GET_RDV_MEDECIN_SUCCESS:
      return { ...state, RdvMedecin: payload.medecinRdv, load: false };
    case GET_RDV_MEDECIN_FAIL:
      return { ...state, error: payload.errors, load: false };
    case RDV_UPDATE_SUCCESS:
      return { ...state, RdvUpdateMsg: payload.msg };
    case RDV_UPDATE_FAIL:
      return { ...state, error: payload.errors, load: false };

    default:
      return state;
  }
};
export default RdvReducer;
