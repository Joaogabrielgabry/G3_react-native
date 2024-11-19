import { api } from '../../Api/Api';

interface PokemonTypeProps {
    name: string;
    url: string;
}

export async function getPokemonTypes(): Promise<PokemonTypeProps[]> {
    try {
        const response = await api.get<{ results: PokemonTypeProps[] }>('/type');
        return response.data.results;
    } catch (error) {
        console.error('Erro ao buscar tipos de Pokémon:', error);
        return [];
    }
}
