import { Alert } from 'react-native';
import { api } from '../Api';

interface PokemonTypeProps {
    name: string;
    url: string;
}

export async function getPokemonTypes(): Promise<PokemonTypeProps[]> {
    try {
        const response = await api.get<{ results: PokemonTypeProps[] }>('/type');
        return response.data.results;
    } catch (error) {
        Alert.alert('Erro ao buscar tipos de Pokémon:', "error");
        return [];
    }
}
