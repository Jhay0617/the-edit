import {
  PERSIST,
  persistReducer,
  persistStore,
  REHYDRATE,
} from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import adminReducer from "./adminSlice";
import authReducer from "./authSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
};
const rootReducer = combineReducers({
  admin: adminReducer,
  auth: authReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST, REHYDRATE],
      },
    }),
});

export const persistor = persistStore(store);
