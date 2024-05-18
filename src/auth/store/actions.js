import {createAsyncThunk} from "@reduxjs/toolkit";
import authService from "../services/index.js";
export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const response = await authService.login(credentials);
        return response.data;
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

export const fetchUser = createAsyncThunk('auth/fetchUser', async (_, thunkAPI) => {
    try {
        const response = await authService.fetchUser();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
