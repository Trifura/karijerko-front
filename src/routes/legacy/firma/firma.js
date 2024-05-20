import axios from "axios";

export async function fetchCompany({params}){
    const response = await axios.get(`https://karijerko-api-qo5qt47cea-ez.a.run.app/company/${params.companyId}`)
    return { company: response.data || [] }
}
