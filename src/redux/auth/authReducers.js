import { createReducer, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import {
  registerAuthSuccess,
  loginAuthSuccess,
  logoutAuthSuccess,
  refreshAuthSuccess,
} from "./authActions";

const persistConfig = {
  key: "token",
  version: 1,
  storage,
  whitelist: "token",
};

const userData = createReducer(
  {},
  {
    [registerAuthSuccess]: (_, { payload }) => payload,
    [loginAuthSuccess]: (_, { payload }) => payload,
    [logoutAuthSuccess]: () => ({}),
    [refreshAuthSuccess]: (state, { payload }) => ({ ...payload, ...state }),
  }
);

const isLogged = createReducer(false, {
  [registerAuthSuccess]: () => true,
  [loginAuthSuccess]: () => true,
  [logoutAuthSuccess]: () => false,
  [refreshAuthSuccess]: () => true,
});

const persistedUsersData = persistReducer(persistConfig, userData);

const userRedusers = combineReducers({
  userData: persistedUsersData,
  isLogged,
});

export default userRedusers;
