import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice";
import sidebarReducer from "../redux/slices/sidebarSlice";
import { rootApi } from "../services/rootApi";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { logOutMiddleware } from "./middlewares";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [rootApi.reducerPath],
};

const rootReducer = combineReducers({
  auth: authReducer, // authSlice.reducer
  sidebar: sidebarReducer,
  [rootApi.reducerPath]: rootApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logOutMiddleware, rootApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
