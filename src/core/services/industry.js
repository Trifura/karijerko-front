import api from "../../core/utils/api.js";

const fetch = async () => {
    const { data } = await api.get(`/industry`);

    return data
}

export default {
    fetch
}