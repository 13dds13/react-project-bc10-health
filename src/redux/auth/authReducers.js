import { createReducer, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import {
  registerAuthSuccess,
  loginAuthSuccess,
  logoutAuthSuccess,
  refreshAuthSuccess,
  getUserSuccess,
} from "./authActions";

const persistConfig = {
  key: "refresh",
  version: 1,
  storage,
  whitelist: ["refreshToken", "sid"],
};

const userInfo = createReducer(
  {},
  {
    [registerAuthSuccess]: (_, { payload }) => ({ user: payload }),
    [loginAuthSuccess]: (_, { payload }) => payload,
    [logoutAuthSuccess]: () => ({}),
    [refreshAuthSuccess]: (state, { payload }) => ({ ...state, ...payload }),
    [getUserSuccess]: (state, { payload }) => ({ ...state, user: payload }),
  }
);

const isAuth = createReducer(false, {
  [registerAuthSuccess]: () => true,
  [loginAuthSuccess]: () => true,
  [logoutAuthSuccess]: () => false,
  [refreshAuthSuccess]: () => true,
});

const persistedUsersData = persistReducer(persistConfig, userInfo);

const userRedusers = combineReducers({
  userInfo: persistedUsersData,
  isAuth,
});

export default userRedusers;
