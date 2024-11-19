import { api } from '../../Api/Api';

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
        console.error('Erro ao buscar espécies de Pokémon:', error);
        return [];
    }
}
