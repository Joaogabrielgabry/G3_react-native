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


export async function getPokemonList(): Promise<PokemonListProps[]> {
    let pokemonList: { name: string; url: string }[] = [];
    let nextUrl: string | null = '/pokemon/';
    
    // Recolher todas as URLs de Pokémon nas páginas
    while (nextUrl) {
        const response: AxiosResponse<{ results: { name: string; url: string }[], next: string | null }> = await api.get(nextUrl);
        pokemonList = pokemonList.concat(response.data.results);
        nextUrl = response.data.next;
    }

    
    const MAX_CONCURRENCY = 10; 

    const pokemonDetails: PokemonDetails[] = [];
    const promises: Promise<void>[] = [];


    // Enfileira as requisições
    for (let i = 0; i < pokemonList.length; i += MAX_CONCURRENCY) {
        // Limita as requisições simultâneas
        const batch = pokemonList.slice(i, i + MAX_CONCURRENCY).map((pokemon) => 
            getPokemonDetails(pokemon.url).then((details) => pokemonDetails.push(details))
        );
        promises.push(Promise.all(batch).then(() => {}));
    }

    await Promise.all(promises);

    return pokemonDetails.map((pokemon) => ({
        index: String(pokemon.id),
        name: pokemon.name,
        sprites: {
            front_default: pokemon.sprites.front_default,
        },
        species: {
            name: pokemon.types.map((type) => type.type.name).join(", "),
        },
    }));
}
