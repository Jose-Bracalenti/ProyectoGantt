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

const getWithFilter = (secretaria, eje, objetivo, areas) =>{
    const filtro = {
        secretarias: secretaria,
        ejes: eje,
        objetivos: objetivo,
        areas: areas
    }
    return axios.post(`${baseUrl}/filtro`, filtro);
}


const politicasService = {
    create: create,
    createwithActivities: createwithActivities,
    getAll: getAll,
    getWithFilter: getWithFilter
}

export default politicasService;