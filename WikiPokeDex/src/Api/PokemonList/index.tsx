import { api } from "../Api";
import { AxiosResponse } from "axios";
import { PokemonListProps } from "../../Components/PokemonForm";

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


export async function getPokemonList(): Promise<PokemonListProps[]> {
    let pokemonList: { name: string; url: string }[] = [];
    let nextUrl: string | null = '/pokemon/';

    // Continuar fazendo chamadas até não haver mais dados para carregar
    while (nextUrl) {
        const response: AxiosResponse<{ results: { name: string; url: string }[]; next: string | null }> = await api.get(nextUrl);
        pokemonList = pokemonList.concat(response.data.results);
        nextUrl = response.data.next;
    }

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
            name: pokemon.types.map((type) => type.type.name).join("/"),
        },
    }));
}