import axios from 'axios'
import {getToken} from "../../auth/utils/TokenHelper.js";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': getToken() ? 'Bearer ' + getToken() : null
    }
})

export default api;
