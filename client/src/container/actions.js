import * as actionType from "./types";
import * as AuthService from "../components/services/auth.service";

// register action

export const registerAction = (payload) => (dispatch) => {
  return AuthService.register(payload)
    .then((response) => {
      dispatch({
        type: actionType.REGISTER_SUCCESS,
        payload: response.data,
      });
      return Promise.resolve(response.data);
    })
    .catch((err) => {
      dispatch({
        type: actionType.REGISTER_FAIL,
        payload: { err: err.message || "Register Fail" },
      });
      return Promise.reject(err);
    });
};

//Login action
export const loginAction = (userCredential) => (dispatch) => {
  return AuthService.login(userCredential)
    .then((data) => {
      dispatch({
        type: actionType.LOGIN_SUCCESS,
        payload: data,
      });
      return Promise.resolve(data);
    })
    .catch((err) => {
      dispatch({
        type: actionType.LOGIN_FAIL,
        payload: { err: err.message || "Login Fail" },
      });
      return Promise.reject(err);
    });
};
export const getuserAction = (userCredential) => (dispatch) => {
  return AuthService.getuser(userCredential)
    .then((data) => {
      dispatch({
        type: actionType.LOGIN_SUCCESS,
        payload: data,
      });
      return Promise.resolve(data);
    })
    .catch((err) => {
      dispatch({
        type: actionType.LOGIN_FAIL,
        payload: { err: err.message || "Login Fail" },
      });
      return Promise.reject(err);
    });
};


// logout action

export const logoutAction = () => (dispatch) => {
    const msg = AuthService.logout()

    dispatch({
        type : actionType.LOGOUT,
        payload : {msg}

    })
    return Promise.resolve(msg)
}

//createPost

export const createpostAction = (payload) => (dispatch) => {
  return AuthService.createpost(payload)
    .then((response) => {
      dispatch({
        type: actionType.LOGIN_SUCCESS,
        payload: response.data,
      });
      return Promise.resolve(response.data);
    })
    .catch((err) => {
      dispatch({
        type: actionType.LOGIN_FAIL,
        payload: { err: err.message || "LOGIN FAIL" },
      });
      return Promise.reject(err);
    });
};

export const updatepostAction = (payload) => (dispatch) => {
  return AuthService.updatepost(payload)
    .then((response) => {
      dispatch({
        type: actionType.LOGIN_SUCCESS,
        payload: response.data,
      });
      return Promise.resolve(response.data);
    })
    .catch((err) => {
      dispatch({
        type: actionType.REGISTER_FAIL,
        payload: { err: err.message || "Login Fail" },
      });
      return Promise.reject(err);
    });
};
