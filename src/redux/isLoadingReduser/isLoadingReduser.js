import { createReducer } from "@reduxjs/toolkit";
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
} from "../auth/authActions";

const isLoadingReduser = createReducer("", {
  [registerAuthRequest]: () => true,
  [registerAuthSuccess]: () => false,
  [registerAuthError]: () => false,
  [loginAuthRequest]: () => true,
  [loginAuthSuccess]: () => false,
  [loginAuthError]: () => false,
  [logoutAuthRequest]: () => true,
  [logoutAuthSuccess]: () => false,
  [logoutAuthError]: () => false,
  [refreshAuthRequest]: () => true,
  [refreshAuthSuccess]: () => false,
  [refreshAuthError]: () => false,
});

export default isLoadingReduser;
