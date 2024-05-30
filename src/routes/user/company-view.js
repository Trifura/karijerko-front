import api from "../../core/utils/api.js";

export async function fetchCompany({params}){
    const response = await api.get(`/company/slug/${params.companySlug}`)
    return { company: response.data || [] }
}
