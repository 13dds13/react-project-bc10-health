import { createReducer, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
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
import {
  userStatError,
  userStatRequest,
  userStatSuccess,
} from "../user/userActions";

const persistConfig = {
  key: "refresh",
  version: 1,
  storage,
  whitelist: ["refreshToken", "sid"],
};

const authDataReducer = createReducer(
  {},
  {
    [loginAuthSuccess]: (_, { payload }) => payload,
    [logoutAuthSuccess]: () => ({}),
    [refreshAuthSuccess]: (state, { payload }) => ({ ...state, ...payload }),
  }
);

const isAuthReducer = createReducer(false, {
  [loginAuthSuccess]: () => true,
  [logoutAuthSuccess]: () => false,
  [refreshAuthSuccess]: () => true,
});

const errorAuthReducer = createReducer("", {
  [registerAuthError]: (_, { payload }) => payload,
  [loginAuthError]: (_, { payload }) => payload,
  [logoutAuthError]: (_, { payload }) => payload,
  [refreshAuthError]: (_, { payload }) => payload,
  [userStatError]: (_, { payload }) => payload,
  [registerAuthRequest]: () => "",
  [loginAuthRequest]: () => "",
  [logoutAuthRequest]: () => "",
  [refreshAuthRequest]: () => "",
  [userStatRequest]: () => "",
});

const isLoadingAuthReducer = createReducer("", {
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
  [userStatRequest]: () => true,
  [userStatSuccess]: () => false,
  [userStatError]: () => false,
});

const persistedAuthData = persistReducer(persistConfig, authDataReducer);

const authReducers = combineReducers({
  authData: persistedAuthData,
  isLoading: isLoadingAuthReducer,
  isAuth: isAuthReducer,
  error: errorAuthReducer,
});

export default authReducers;
