import axios from "axios";

const baseUrl = "http://127.0.0.1:8080/areas";


const getAll = () =>{
    return axios.get(baseUrl)
    .catch(error => {
        console.log(error + " error en el servicio de areas GET");
    });
}

const updateAreaColor = (id, color) => {
    return axios.put(baseUrl + `/${id}`, {color: color})
    .catch(error => {
        console.log(error + " error en el servicio de areas PUT");
    });
}

const areaService = {
    getAll: getAll,
    updateAreaColor: updateAreaColor,
}
export default areaService;
