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

export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {
        const response = await authService.register(userData);
        return response.data;
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
        const account = await authService.fetchUser();
        console.log(account);
        return account
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
