import api from "../../core/utils/api.js";

const create = async (education) => {
    const { data } = await api.post(`/education`, education);

    return data
}

const edit = async (education) => {
    const { data } = await api.patch(`/education/${education.id}`, education);

    return data
}

const remove = async (educationId) => {
    const { data } = await api.delete(`/education/${educationId}`)

    return {id: educationId, ...data }
}

const fetchAll = async () => {
    const { data } = await api.get(`/education`);

    return data

}

export default {
    create,
    edit,
    remove,
    fetchAll
}