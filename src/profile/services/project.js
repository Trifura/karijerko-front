import api from "../../core/utils/api.js";
import fileService from "../../core/services/file.js";


const create = async (project) => {
    const { data } = await api.post(`/project`, project);

    return data
}

const edit = async (project) => {
    const { data } = await api.patch(`/project/${project.id}`, project);

    return data
}

const remove = async (projectId) => {
    const { data } = await api.delete(`/project/${projectId}`)

    return {id: projectId, ...data }
}

const formatContent = async (content) => {
    if (!content.file) return content

    const data = await fileService.upload(content.file)

    delete content.file

    return {
        ...content,
        url: import.meta.env.VITE_API_BASE_URL + data.path
    }
}

const fetchWebMetadata = async (url) => {
    const { data } = await api.get(`/metadata/fetch?url=${url}`);

    return data

}

export default {
    create,
    edit,
    remove,
    formatContent,
    fetchWebMetadata
}