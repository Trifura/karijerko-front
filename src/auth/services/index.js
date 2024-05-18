import {removeToken, setToken} from "../utils/TokenHelper.js";
import api from "../../core/utils/api.js";

const login = async (credentials) => {
    try {
        const { data } = await api.post(`auth/login`, credentials);
        if (data.token) {
            setToken(data.token);
        }
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
    logout,
    fetchUser
};
