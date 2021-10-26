import { createReducer } from "@reduxjs/toolkit";
import {
  registerAuthRequest,
  registerAuthError,
  loginAuthRequest,
  loginAuthError,
  logoutAuthRequest,
  logoutAuthError,
  refreshAuthRequest,
  refreshAuthError,
} from "../auth/authActions";

const errorReducer = createReducer("", {
  [registerAuthError]: (_, { payload }) => payload,
  [loginAuthError]: (_, { payload }) => payload,
  [logoutAuthError]: (_, { payload }) => payload,
  [refreshAuthError]: (_, { payload }) => payload,
  [registerAuthRequest]: () => "",
  [loginAuthRequest]: () => "",
  [logoutAuthRequest]: () => "",
  [refreshAuthRequest]: () => "",
});

export default errorReducer;
