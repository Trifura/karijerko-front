import api from "../../core/utils/api.js";

const saveInfo = async (companyInfo) => {
    try {
        const {data} = await api.patch('/company/info', companyInfo);
        return data;
    } catch (error) {
        return error.response.data;
    }
}

const fetchInfo = async () => {
    try {
        const {data} = await api.get('/company/me/info')
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export default { saveInfo, fetchInfo };