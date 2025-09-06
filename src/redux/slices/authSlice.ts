/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  userInfo: any
};

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  userInfo: {}
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // Login: action
    login: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>,
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: () => {
      return initialState;
    },
    saveUserInfo: (state, action) =>{
      state.userInfo = action.payload;
    }
  },
});

export const { login, logout, saveUserInfo } = authSlice.actions;
export default authSlice.reducer;

