import * as actionType from "./types";

const intialState = { isLoggedIn: false, user: null };

export default function rootReducer(state = intialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionType.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actionType.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case actionType.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actionType.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
}
