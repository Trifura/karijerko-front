import { createSlice } from '@reduxjs/toolkit';
import {create, edit, fetchAll, remove} from "./actions.js";

const initialState = {
    profiles: [],
    error: null,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(create.fulfilled, (state, action) => {
                state.profiles.push(action.payload)
                state.error = null;
            })
            .addCase(create.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(edit.fulfilled, (state, action) => {
                const index = state.profiles.findIndex(profile => profile.id === action.payload.id);
                state.profiles[index] = action.payload;
                state.error = null;
            })
            .addCase(edit.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(remove.fulfilled, (state, action) => {
                state.profiles = state.profiles.filter(profile => profile.id !== action.payload.id);
                state.error = null;
            })
            .addCase(remove.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(fetchAll.fulfilled, (state, action) => {
                'wtff'
                state.profiles = action.payload;
                state.error = null;
            })
            .addCase(fetchAll.rejected, (state, action) => {
                state.error = action.payload;
            })
    },
});

export default profileSlice.reducer;
