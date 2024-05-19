import {removeToken} from "../utils/TokenHelper.js";
import api from "../../core/utils/api.js";

const login = async (credentials) => {
    try {
        const { data } = await api.post(`auth/login`, credentials);

        return data;
    } catch (error) {
        return error.response.data;
    }
};

const register = async (userData) => {
    try {
        const { data } = await api.post(`auth/register`, userData);
        if (data.success) {
            // TODO. navigate to verify email page
        }
        return data.success;
    } catch (error) {
        return error.response.data;
    }

};

const authenticateGoogle = async (accessToken, role) => {
    try {
        const { data } = await api.post(`auth/google`, { accessToken, role });

        return data;
    } catch (error) {
        return error.response.data;
    }
}

const fetchUser = async () => {
    try {
        const { data } = await api.get(`auth/me`);
        return data;
    } catch (error) {
        return error.response.data;
    }
}

const logout = () => {
    removeToken()
};

export default {
    login,
    register,
    authenticateGoogle,
    logout,
    fetchUser
};
