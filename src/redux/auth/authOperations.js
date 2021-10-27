import {
  registerAuthRequest,
  registerAuthSuccess,
  registerAuthError,
  loginAuthRequest,
  loginAuthSuccess,
  loginAuthError,
  logoutAuthRequest,
  logoutAuthSuccess,
  logoutAuthError,
  refreshAuthRequest,
  refreshAuthSuccess,
  refreshAuthError,
  getUserSuccess,
} from "./authActions";
import { apiBaseURL, register, login, logout, refresh } from "../../db.json";
import axios from "axios";

axios.defaults.baseURL = apiBaseURL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common["Authorization"] = "";
  },
};

export const authRegistration = (userData) => (dispatch) => {
  dispatch(registerAuthRequest());

  axios
    .post(register, userData)
    .then(({ data }) => dispatch(registerAuthSuccess(data)))
    .catch((error) => dispatch(registerAuthError(error.response.data.message)));
};

export const authLogin = (userData) => (dispatch) => {
  dispatch(loginAuthRequest());
  const { email, password } = userData;
  axios
    .post(login, {
      email,
      password,
    })
    .then(({ data }) => {
      dispatch(loginAuthSuccess(data));
      token.set(data.accessToken);
    })
    .catch((error) => dispatch(loginAuthError(error.response.data.message)));
};

export const authLogout = () => (dispatch) => {
  dispatch(logoutAuthRequest());

  axios
    .post(logout)
    .then(() => {
      token.unset();
      return dispatch(logoutAuthSuccess());
    })
    .catch((error) => dispatch(logoutAuthError(error.response.data.message)));
};

export const authRefresh = (refreshToken, sid) => (dispatch) => {
  dispatch(refreshAuthRequest());
  token.set(refreshToken);
  axios
    .post(refresh, { sid })
    .then(({ data }) => {
      const {
        newAccessToken: accessToken,
        newRefreshToken: refreshToken,
        sid,
      } = data;
      token.set(accessToken);
      dispatch(
        refreshAuthSuccess({
          accessToken,
          refreshToken,
          sid,
        })
      );
      axios("/user").then(({ data }) => dispatch(getUserSuccess(data)));
    })
    .catch((error) => dispatch(refreshAuthError(error.response.data.message)));
};
