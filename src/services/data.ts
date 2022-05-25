import axios from 'axios';

const url = "http://localhost:8000/api";

export const createNewClient = async(name: string, last_name: string, birth_date: string) => {
    const newClient = await axios.post(`${url}/users`, { name, last_name, birth_date })
    .then(resp => {
        return resp.data
    }).catch( err => {
        return null
    })
    return newClient;
}

export const getClientList = async() => {
    const dataList = await axios.get(`${url}/users`)
    .then(res => {
        return res.data;
    }).catch( err => {
        return []
    })
    return dataList;
}

export const getAverage = async() => {
    const dataList = await axios.get(`${url}/users/age_average`)
    .then(res => {
        return res.data;
    }).catch( err => {
        return []
    })
    return dataList;
}