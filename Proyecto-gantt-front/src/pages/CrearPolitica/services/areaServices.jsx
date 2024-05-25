import axios from "axios";

const baseUrl = "http://localhost:3001/area";


const getAll = () =>{
    return axios.get(baseUrl)
}

/*const create = newArea =>{
    return axios.post(baseUrl, newArea)
}

const update = (id, newArea) =>{
    return axios.put(`${baseUrl}/${id}`, newArea)
}

const deleteArea = id =>{
    return axios.delete(`${baseUrl}/${id}`)
}

const personService = {
    getAll: getAll,
    create: create,
    update: update,
    deleteArea: deleteArea
}
*/

const personService = {
    getAll: getAll
}
export default personService;
