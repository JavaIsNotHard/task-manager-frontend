import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem('token');
const userID = localStorage.getItem('userId');

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: token || null,
        isAuthenticated: !!token,
        userID: userID || null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            const {access_token, user} = action.payload;
            state.token = access_token;
            state.userID = user.userId;
            state.isAuthenticated = true;
            localStorage.setItem('token', access_token);
            localStorage.setItem('userId', user.userId)
        },
    }
})

export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;