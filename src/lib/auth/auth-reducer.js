import { createReducer } from '@reduxjs/toolkit';
import { loginAction, loginErrorAction, loginResetAction, userDetailsAction } from "./auth-action";

export const loginReducer = createReducer({}, (builder) => {
  builder
    .addCase(loginAction, (state, action) => {
      state.loginStatus = true;
      state.loginResponse = action.payload;
    })
    .addCase(loginErrorAction, (state, action) => {
      state.loginStatus = false;
      state.loginResponse = action.payload;
    })
    .addCase(userDetailsAction, (state, action) => {
      state.userStatus = true;
      state.user = action.payload;
    })
    .addCase(loginResetAction, (state) => {
      state.loginStatus   = undefined;
      state.loginResponse = undefined;
    })
    .addDefaultCase((state) => state);
});