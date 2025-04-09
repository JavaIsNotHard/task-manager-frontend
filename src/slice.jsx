import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem('token');

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: token || null,
        isAuthenticated: !!token,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('token', action.payload);
        },
    }
})

export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;