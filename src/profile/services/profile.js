import api from "../../core/utils/api.js";

const fetch = async (profileId) => {
    const { data } = await api.get(`/profile/${profileId}`);

    return data
}

const create = async (profile) => {
    const { data } = await api.post(`/profile`, profile);

    return data
}

const edit = async (profile) => {
    const { data } = await api.patch(`/profile/${profile.id}`, profile);

    return data
}

const remove = async (profileId) => {
    const { data } = await api.delete(`/profile/${profileId}`)

    return {id: profileId, ...data }
}

const fetchAll = async () => {
    const { data } = await api.get(`/profile`);

    return data

}

const fetchPublic = async (profileId) => {
    const { data } = await api.get(`/profile/public/${profileId}`);

    return data
}

export default {
    fetch,
    create,
    edit,
    remove,
    fetchAll,
    fetchPublic
}