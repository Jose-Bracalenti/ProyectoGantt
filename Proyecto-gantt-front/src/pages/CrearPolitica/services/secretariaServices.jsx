import axios from "axios";

const baseUrl = "http://localhost:3001/secretaria";


const getAll = () =>{
    return axios.get(baseUrl)
}

/*const create = newSecretaria =>{
    return axios.post(baseUrl, newSecretaria)
}

const update = (id, newSecretaria) =>{
    return axios.put(`${baseUrl}/${id}`, newSecretaria)
}

const deleteSecretaria = id =>{
    return axios.delete(`${baseUrl}/${id}`)
}

const personService = {
    getAll: getAll,
    create: create,
    update: update,
    deleteSecretaria: deleteSecretaria
}
*/

const personService = {
    getAll: getAll
}
export default personService;