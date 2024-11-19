
import { api } from "../../Api/Api";
import { AxiosResponse } from "axios";
import { PokemonListProps } from "../../Components/Pokemon";

interface PokemonDetails {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    types: Array<{
        slot: number;
        type: {
            name: string;
        };
    }>;
}

export async function getPokemonDetails(url: string): Promise<PokemonDetails> {
    const response = await api.get<PokemonDetails>(url);
    return response.data;
}

//Pegar todos os pokemons
export async function getPokemonList(): Promise<PokemonListProps[]> {
    const response = await api.get<{ results: { name: string; url: string }[] }>('/pokemon/');
    const pokemonList = response.data.results;

    const detailedPokemonList = await Promise.all(
        pokemonList.map((pokemon) => getPokemonDetails(pokemon.url))
    );

    return detailedPokemonList.map((pokemon) => ({
        index: String(pokemon.id),
        name: pokemon.name,
        sprites: {
            front_default: pokemon.sprites.front_default,
        },
        species: {
            name: pokemon.types.map((type) => type.type.name).join(", "), // Join types as a string
        },
    }));
}