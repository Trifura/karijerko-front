import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../../auth/store/index.js";
import profileReducer from "../../profile/store/index.js"

export default configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
    }
})
