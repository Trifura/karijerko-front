import api from "../../core/utils/api.js";

export async function fetchCompanies(){
    const response = await api.get('/company')
    return { companies: response.data.data || [] }
}
