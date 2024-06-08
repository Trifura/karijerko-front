import {createAsyncThunk} from "@reduxjs/toolkit";
import profileService from "../services/profile.js";

export const create = createAsyncThunk('profile/create', async (profile, thunkAPI) => {
    try {
        return await profileService.create(profile);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const edit = createAsyncThunk('profile/edit', async (profile, thunkAPI) => {
    try {
        return await profileService.edit(profile);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const remove = createAsyncThunk('profile/remove', async (profileId, thunkAPI) => {
    try {
        return await profileService.remove(profileId);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});


export const fetchAll = createAsyncThunk('profile/fetchAll', async (_, thunkAPI) => {
    try {
        return await profileService.fetchAll();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});