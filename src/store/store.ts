import { configureStore } from "@reduxjs/toolkit";
import { authReducer, AuthState } from "../features/auth/store/auth.slice";

export type prelodedState = {
  auth: AuthState;
};

export function createStore(preloadedState: prelodedState) {
  const store = configureStore({
    reducer: {
      auth: authReducer,
    },
    preloadedState,
  });

  return store;
}
export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<AppStore["getState"]>;
