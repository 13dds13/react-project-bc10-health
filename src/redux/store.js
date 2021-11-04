import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import authReducers from "./auth/authReducers";
import languagesReducer from "./languages/languagesReducer";
import modalReducer from "./modal/modalReducer";
import userReducers from "./user/userReducers";

const store = configureStore({
  reducer: {
    auth: authReducers,
    user: userReducers,
    modal: modalReducer,
    language: languagesReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
