import axios from "axios";

const baseUrl = "http://127.0.0.1:8080/politicas";

const create = newPolitica =>{
    return axios.post(baseUrl, newPolitica)
}

const politicasService = {
    create: create
}

export default politicasService;