import { createReducer, combineReducers } from "@reduxjs/toolkit";

import { setModalValue } from "./modalAction.js";

const isOpenModal = createReducer(false, {
  [setModalValue]: (state) => !state,
});

const modalReducer = combineReducers({
  isOpenModal,
});

export default modalReducer;
