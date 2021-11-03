import { createReducer, combineReducers } from "@reduxjs/toolkit";

import { logoutAuthSuccess } from "../auth/authActions.js";
import { setModalValue } from "./modalAction.js";

const isOpenModal = createReducer(false, {
  [setModalValue]: (state) => !state,
  [logoutAuthSuccess]: () => false,
});

const modalReducer = combineReducers({
  isOpenModal,
});

export default modalReducer;
