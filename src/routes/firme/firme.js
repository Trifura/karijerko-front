import axios from "axios";

export async function fetchCompanies(){
    const response = await axios.get('https://karijerko-api-qo5qt47cea-ez.a.run.app/company')
    return { companies: response.data || [] }
}
