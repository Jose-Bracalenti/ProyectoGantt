import axios from "axios";

const baseUrl = "http://127.0.0.1:8080/areas";


const getAll = () =>{
    return axios.get(baseUrl)
}

const areaService = {
    getAll: getAll
}
export default areaService;
