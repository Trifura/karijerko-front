import {removeToken} from "../utils/TokenHelper.js";
import api from "../../core/utils/api.js";

const login = async (credentials) => {
    const { data } = await api.post(`auth/login`, credentials);

    return data;
};

const register = async (userData) => {
    const { data } = await api.post(`auth/register`, userData);
    if (data.success) {
        // TODO. navigate to verify email page
    }

    return data.success;
};

const authenticateGoogle = async (accessToken, role) => {
    const { data } = await api.post(`auth/google`, { accessToken, role });

    return data;
}

const fetchUser = async () => {
    const { data } = await api.get(`auth/me`);
    return data;
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
