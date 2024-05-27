import axios from "axios";

const baseUrl = "http://127.0.0.1:8080/objetivos";


const getObjetivosByEjes = (idEje) =>{
    return axios.get(`${baseUrl}/eje/${idEje}`)
    .catch(error => {
        console.log(error + " error en el servicio de objetivos poe eje GET");
    });
}


const getAll = () =>{
    return axios.get(baseUrl)
}

const objetivoService = {
    getAll: getAll,
    getObjetivosByEjes: getObjetivosByEjes
}
export default objetivoService;
