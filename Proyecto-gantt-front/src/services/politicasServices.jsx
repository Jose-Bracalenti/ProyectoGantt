import axios from "axios";

const baseUrl = "http://127.0.0.1:8080/politicas";


const create = newPolitica =>{
    return axios.post(baseUrl, newPolitica)
}

const createwithActivities = (newPoliticaWithActivities) =>{
    return axios.post(baseUrl, newPoliticaWithActivities)
}


const politicasService = {
    create: create,
    createwithActivities: createwithActivities

}

export default politicasService;