import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../../auth/store/index.js";

export default configureStore({
    reducer: {
        auth: authReducer
    }
})
