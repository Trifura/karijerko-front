import api from "../../core/utils/api.js";

const create = async (userLanguage) => {
    const { data } = await api.post(`/user-language`, userLanguage);

    return data
}

const edit = async (userLanguage) => {
    const { data } = await api.patch(`/user-language/${userLanguage.id}`, userLanguage);

    return data
}

const remove = async (userLanguageId) => {
    const { data } = await api.delete(`/user-language/${userLanguageId}`)

    return {id: userLanguageId, ...data }
}

const fetchAll = async () => {
    const { data } = await api.get(`/user-language`);

    return data

}

export default {
    create,
    edit,
    remove,
    fetchAll
}