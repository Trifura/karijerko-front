import api from "../../core/utils/api.js";

const upload = async (file) => {
    const formData = new FormData()

    formData.append('file', file)

    const { data } = await api.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

    return data
}

export default {
    upload
}