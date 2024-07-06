import axios from 'axios'

const baseApi = axios.create({
    baseURL: "http://192.168.200.17:9092/api/sportmeets"
})

export function getAllEvents() {
    return baseApi.get("/events").then((data)=>{
        return data
    })
}