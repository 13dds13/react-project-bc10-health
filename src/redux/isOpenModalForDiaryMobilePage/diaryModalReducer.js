import { createReducer, combineReducers } from "@reduxjs/toolkit";

import { setDiaryValue } from "./diaryModalAction.js";

const isOpenModal = createReducer(false, {
  [setDiaryValue]: (state) => !state,
});

const diaryModalReducer = combineReducers({
  isOpenModal,
});

export default diaryModalReducer;
