import { createReducer, combineReducers } from "@reduxjs/toolkit";

import { setLanguages } from "./languagesActions.js";

const languages = createReducer('ru', {
  [setLanguages]: (_, {payload}) => payload,
});

const languagesReducer = combineReducers({
    languages,
});

export default languagesReducer;
