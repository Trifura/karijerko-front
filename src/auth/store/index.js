import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, register, login, authenticateGoogle, logout, verifyEmail, registerCompany } from "./actions.js";

const initialState = {
    account: {},
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.account = null;
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.account = action.payload;
                state.isAuthenticated = true;
                state.isLoading = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(register.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.isLoading = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(registerCompany.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerCompany.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.isLoading = false;
            })
            .addCase(registerCompany.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.account = action.payload;
                state.isAuthenticated = true;
                state.isLoading = false;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(authenticateGoogle.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(authenticateGoogle.fulfilled, (state, action) => {
                state.account = action.payload;
                state.isAuthenticated = true;
                state.isLoading = false;
            })
            .addCase(authenticateGoogle.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(logout.fulfilled, (state) => {
                state.account = null;
                state.isAuthenticated = false;
            })
            .addCase(verifyEmail.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(verifyEmail.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(verifyEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default authSlice.reducer;
