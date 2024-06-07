import {createAsyncThunk} from "@reduxjs/toolkit";
import authService from "../services/index.js";
import {setToken} from "../utils/TokenHelper.js";

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const { account, token } = await authService.login(credentials);

        setToken(token);

        return account;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const register = createAsyncThunk('auth/register/user', async (userData, thunkAPI) => {
    try {
        const response = await authService.register(userData);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});


export const registerCompany = createAsyncThunk('auth/register/company', async (companyData, thunkAPI) => {
    try {
        const response = await authService.registerCompany(companyData);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const verifyEmail = createAsyncThunk('auth/verifyEmail', async (token, thunkAPI) => {
    try {
        const response = await authService.verifyEmail(token);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const authenticateGoogle = createAsyncThunk('auth/authenticateGoogle', async ({ accessToken, role }, thunkAPI) => {
    try {
        const { account, token } = await authService.authenticateGoogle(accessToken, role);

        setToken(token);

        return account;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const fetchUser = createAsyncThunk('auth/fetchUser', async (_, thunkAPI) => {
    try {
        return await authService.fetchUser()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await authService.logout();
        return null;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});