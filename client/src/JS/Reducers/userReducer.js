import {
  USER_FAIL,
  USER_LOAD,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  CURRENT_USER,
  LOGOUT,
  PRENDRE_RDV,
  PRENDRE_RDV_FAIL,
  UPDATE_USER_FAIL,
} from "../ActionType/user";

const initstate = {
  user: {},
  load: false,
  error: [],
  UserIsAuth: false,
  medecinRDV: {},
};

const userReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case USER_LOAD:
      return { ...state, load: true, error: [] };
    case REGISTER_SUCCESS:
      return { ...state, user: payload.newuser, load: false, UserIsAuth: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.userToFind,
        load: false,
        UserIsAuth: true,
      };
    case CURRENT_USER:
      return { ...state, user: payload, load: false, UserIsAuth: true };
    case LOGOUT:
      return { ...state, user: payload, load: false, UserIsAuth: false };
    case USER_FAIL:
      return { ...state, error: payload.errors };
    case PRENDRE_RDV:
      return { ...state, medecinRDV: payload, error: payload.errors };
    case PRENDRE_RDV_FAIL:
      return { ...state, error: payload.errors };
    case UPDATE_USER_FAIL:
      return { ...state, error: payload.errors };
    default:
      return state;
  }
};

export default userReducer;
