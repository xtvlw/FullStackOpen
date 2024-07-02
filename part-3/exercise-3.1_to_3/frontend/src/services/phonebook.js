import axios from "axios"

const baseUrl = "https://fullstackopen-hci8.onrender.com/api/persons"


const getAll = () => {
    const request = axios.get(baseUrl)

    return request.then(res => res.data)
}

const add = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(res => newPerson)
}

const deletePerson = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(res => res.status)
}

const update = person => {
    const request = axios.put(`${baseUrl}/${person.id}`, person)
    return request.then(res => res.data)
}
export default { getAll, add, deletePerson, update }
