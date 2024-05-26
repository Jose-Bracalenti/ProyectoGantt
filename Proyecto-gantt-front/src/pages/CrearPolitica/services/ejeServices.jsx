import axios from "axios";

const baseUrl = "http://127.0.0.1:8080/ejes";


const getAll = () =>{
    return axios.get(baseUrl)
}

const personService = {
    getAll: getAll
}
export default personService;
