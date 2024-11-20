
import axios from "axios";

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

export const apiMock = axios.create({
    baseURL: 'https://api-gp1-react.onrender.com'
});