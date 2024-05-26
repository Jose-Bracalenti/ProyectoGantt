import axios from "axios";

const baseUrl = "http://127.0.0.1:8080/objetivos";


const getObjetivosByEjes = (idEje) =>{
    return axios.get(`${baseUrl}/eje/${idEje}`)
}


const getAll = () =>{
    return axios.get(baseUrl)
}

const personService = {
    getAll: getAll,
    getObjetivosByEjes: getObjetivosByEjes
}
export default personService;
