import api from "../utils/api.js";

const fetchPublic = async (userSlug) => {
    const { data } = await api.get(`/user/public/${userSlug}`);
    return data
}

export default {
    fetchPublic
}