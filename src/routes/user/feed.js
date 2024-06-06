import api from "../../core/utils/api.js";

export async function fetchCompanies(searchTerm = '') {
    const response = await api.get('/company', {
        params: { search: searchTerm }
    });
    return { companies: response.data.data || [] };
}
