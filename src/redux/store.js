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
import authRedusers from "./auth/authReducers";
import errorReducer from "./errorReducer/errorReducer";
import isLoadingReduser from "./isLoadingReduser/isLoadingReduser";

const store = configureStore({
  reducer: {
    user: authRedusers,
    error: errorReducer,
    isLoading: isLoadingReduser,
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
