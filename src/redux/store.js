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
import diaryModalReducer from "./isOpenModalForDiaryMobilePage/diaryModalReducer";
import userReducers from "./user/userReducers";

const store = configureStore({
  reducer: {
    auth: authReducers,
    user: userReducers,
    diaryModal: diaryModalReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
