import api from "../../core/utils/api.js";

const fetch = async (search) => {
    const { data } = await api.get(`/language`, {
        params: {
            search
        }
    });

    return data
}

export default {
    fetch
}