import { Alert } from 'react-native';
import { api } from '../Api';

interface PokemonSpeciesProps {
    name: string;
    url: string;
}

export async function getPokemonSpecies(): Promise<PokemonSpeciesProps[]> {
    try {
        const response = await api.get<{ results: PokemonSpeciesProps[] }>(
            '/pokemon-species?limit=1000'
        );
        return response.data.results;
    } catch (error) {
        Alert.alert('Erro ao buscar espécies de Pokémon:', "error");
        return [];
    }
}
