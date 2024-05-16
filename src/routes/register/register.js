
import axios from "axios";

export async function fetchRegister({params}){
    const response = await axios.get(`https://karijerko-api-qo5qt47cea-ez.a.run.app/`)
    return { company: response.data || [] }
}
