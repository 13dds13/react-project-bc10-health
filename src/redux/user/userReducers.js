import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { logoutAuthSuccess } from "../auth/authActions";
import { userStatError, userStatRequest, userStatSuccess } from "./userActions";

const userDataReducer = createReducer(
  {},
  {
    [userStatSuccess]: (_, { payload }) => payload,
    [logoutAuthSuccess]: () => ({}),
  }
);

const errorUserStatReducer = createReducer("", {
  [userStatError]: (_, { payload }) => payload,
  [userStatRequest]: () => "",
});

const isLoadingUserStatReducer = createReducer(false, {
  [userStatRequest]: () => true,
  [userStatSuccess]: () => false,
  [userStatError]: () => false,
});

const userReducers = combineReducers({
  userData: userDataReducer,
  isLoading: isLoadingUserStatReducer,
  error: errorUserStatReducer,
});

export default userReducers;
