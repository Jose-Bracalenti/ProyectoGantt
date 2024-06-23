import axios from "axios";

const baseUrl = "http://127.0.0.1:8080/politicas";


const create = newPolitica =>{
    return axios.post(baseUrl, newPolitica)
}

const createwithActivities = (newPoliticaWithActivities) =>{
    return axios.post(baseUrl, newPoliticaWithActivities)
}
const getAll = () =>{
    return axios.get(baseUrl)
}

const getWithFilter = (secretarias, ejes, objetivos, areas) =>{
    const body = {
        secretarias: secretarias,
        ejes: ejes,
        objetivos: objetivos,
        areas: areas
    }
    return axios.post(baseUrl + "/filtro", body)
}


const politicasService = {
    create: create,
    createwithActivities: createwithActivities,
    getAll: getAll,
    getWithFilter: getWithFilter
}

export default politicasService;