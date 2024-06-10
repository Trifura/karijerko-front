import api from "../../core/utils/api.js";

const subscribe = async (companyId) => {
    const response = await api.post(`/user/subscription/${companyId}`)
    return response.data
}

const unsubscribe = async (companyId) => {
    const response = await api.delete(`/user/subscription/${companyId}`)
    return response.data
}

export default {
    subscribe,
    unsubscribe
}