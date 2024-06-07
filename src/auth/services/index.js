import {removeToken} from "../utils/TokenHelper.js";
import api from "../../core/utils/api.js";

const login = async (credentials) => {
    const { data } = await api.post(`auth/login`, credentials);

    return data;
};

const register = async (userData) => {
    const { data } = await api.post(`auth/register/user`, userData);
    if (data.success) {
        
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

const verifyEmail = async (token) => {
    const { data } = await api.post(`auth/verify-email`, { token });
    return data.success;
};

export default {
    login,
    register,
    authenticateGoogle,
    logout,
    fetchUser,
    verifyEmail
};
