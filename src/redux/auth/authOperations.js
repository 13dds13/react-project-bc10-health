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
} from "./authActions";
import axios from "axios";

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
    .post("https://slimmom-backend.herokuapp.com/auth/register", userData)
    .then(({ data }) => {
      dispatch(registerAuthSuccess(data));
      // token.set(data.token);
    })
    .catch((error) => dispatch(registerAuthError(error.response.data.message)));
};

// export const usersLogin = (userData) => (dispatch) => {
//   dispatch(loginUsersRequest());
//   axios
//     .post(baseURL + users.login, userData)
//     .then(({ data }) => {
//       const {
//         user: { name, email },
//         token,
//       } = data;
//       dispatch(loginUsersSuccess({ name, email, token }));
//       axios.defaults.headers.common["Authorization"] = token;
//     })
//     .catch((error) => error && dispatch(loginUsersError(errorMsg.badLogin)));
// };

// export const usersRefresh = (token) => (dispatch) => {
//   dispatch(refreshUsersRequest());
//   axios.defaults.headers.common["Authorization"] = token;
//   axios(baseURL + users.refresh)
//     .then(({ data }) => {
//       return dispatch(refreshUsersSuccess(data));
//     })
//     .catch(
//       (error) => error && dispatch(refreshUsersError(errorMsg.fatalError))
//     );
// };

// export const usersLogout = () => (dispatch) => {
//   dispatch(logoutUsersRequest());

//   axios
//     .post(baseURL + users.logout)
//     .then(() => {
//       axios.defaults.headers.common["Authorization"] = "";
//       return dispatch(logoutUsersSuccess());
//     })
//     .catch((error) => error && dispatch(logoutUsersError(errorMsg.fatalError)));
// };
