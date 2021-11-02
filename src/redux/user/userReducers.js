import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { logoutAuthSuccess } from "../auth/authActions";
import {
  userDataError,
  userDataRequest,
  userDataSuccess,
  userDayInfoError,
  userDayInfoRequest,
  userDayInfoSuccess,
  userSummaryError,
  userSummaryRequest,
  userSummarySuccess,
} from "./userActions";

const userDataReducer = createReducer(
  {},
  {
    [userDataSuccess]: (state, { payload }) => ({ ...state, ...payload }),
    [logoutAuthSuccess]: () => ({}),
  }
);

const userSummaryReducer = createReducer(
  {},
  {
    [userSummarySuccess]: (state, { payload }) => ({ ...state, ...payload }),
    [logoutAuthSuccess]: () => ({}),
  }
);

const userEatenProducts = createReducer([], {
  [userDayInfoSuccess]: (_, { payload }) => payload,
  [logoutAuthSuccess]: () => [],
});
const errorUserReducer = createReducer("", {
  [userDataError]: (_, { payload }) => payload,
  [userDataRequest]: () => "",
  [userSummaryError]: (_, { payload }) => payload,
  [userSummaryRequest]: () => "",
  [userDayInfoError]: (_, { payload }) => payload,
  [userDayInfoRequest]: () => "",
});

const isLoadingUserReducer = createReducer(false, {
  [userDataRequest]: () => true,
  [userDataSuccess]: () => false,
  [userDataError]: () => false,
  [userSummaryRequest]: () => true,
  [userSummarySuccess]: () => false,
  [userSummaryError]: () => false,
  [userDayInfoRequest]: () => true,
  [userDayInfoSuccess]: () => false,
  [userDayInfoError]: () => false,
});

const userReducers = combineReducers({
  userData: userDataReducer,
  daySummary: userSummaryReducer,
  eatenProducts: userEatenProducts,
  isLoading: isLoadingUserReducer,
  error: errorUserReducer,
});

export default userReducers;
