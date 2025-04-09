import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice.jsx'

export default configureStore({
    reducer: {
        auth: authReducer
    },
})