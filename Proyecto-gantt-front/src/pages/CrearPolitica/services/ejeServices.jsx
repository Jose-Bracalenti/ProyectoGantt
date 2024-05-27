import axios from "axios";

const baseUrl = "http://127.0.0.1:8080/ejes";


const getAll = () =>{
    return axios.get(baseUrl)
    .catch(error => {
        console.log(error + " error en el servicio de ejes GET");
    });
}

const ejeService = {
    getAll: getAll
}
export default ejeService;
