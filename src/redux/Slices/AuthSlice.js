import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  logInUser,
  logOutUser,
  singUpUser,
} from 'redux/operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [singUpUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [singUpUser.rejected](state) {
      console.log(state);
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logInUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logInUser.rejected](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});
export const AuthReducer = AuthSlice.reducer;
