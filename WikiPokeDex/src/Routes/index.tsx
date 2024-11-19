
import { api } from "../Api/Api";



export async function getPokemonList() {
    try {
        const response = await api.get('/pokemon');
        return response.data.results;
    } catch (error) {
        console.error("Problema ao capturar o pokemon:", error);
        return [];
    }
}