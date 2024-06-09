import api from "../../core/utils/api.js";

export async function fetchCompanies(searchTerm = '') {
    const { data } = await api.get('/company', {
        params: { search: searchTerm }
    });
    return { companies: data };
}

export async function fetchFeed(profileId) {
    const { data } = await api.get(`/user/feed`, {
        params: { profileId }
    });

    return data
}
