import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    message: ''
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.message = 'Đăng nhập thành công!';
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.message = 'Đã đăng xuất.';
    },
    setUserInfo: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    clearMessage: (state) => {
      state.message = '';
    }
  }
});

export const { login, logout, setUserInfo, clearMessage } = authSlice.actions;
export default authSlice.reducer;
