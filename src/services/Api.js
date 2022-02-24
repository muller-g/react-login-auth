import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:1337'
});

export const createSession = async(username, password) => {
    return api.post('/api/auth/local', {username, password})
}