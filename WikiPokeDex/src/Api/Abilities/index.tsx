import axios, { AxiosInstance } from "axios";
import { Alert } from "react-native";

export interface AbilityDetails {
    name: string;
    effect: string;
    shortEffect: string;
}

class PokemonApi {
    private api: AxiosInstance;

    constructor(baseURL: string = "https://pokeapi.co/api/v2/") {
        this.api = axios.create({
            baseURL,
        });
    }

    async getAbilityDetails(idOrName: string | number): Promise<AbilityDetails> {
        try {
            const response = await this.api.get(`ability/${idOrName}`);
            const { name, effect_entries } = response.data;

            const effectEntry = effect_entries.find(
                (entry: any) => entry.language.name === "en"
            );

            return {
                name,
                effect: effectEntry?.effect || "Descrição não disponível.",
                shortEffect: effectEntry?.short_effect || "Descrição curta não disponível.",
            };
        } catch (error) {
            Alert.alert(`Erro ao obter detalhes da habilidade ${idOrName}:`, "error");
            throw new Error("Não foi possível obter os detalhes da habilidade.");
        }
    }

    async getPokemonAbilities(pokemonName: string): Promise<AbilityDetails[]> {
        try {
            const response = await this.api.get(`pokemon/${pokemonName}`);
            const abilities = response.data.abilities;

            const abilityDetailsPromises = abilities.map((ability: any) =>
                this.getAbilityDetails(ability.ability.name)
            );

            return Promise.all(abilityDetailsPromises);
        } catch (error) {
            Alert.alert(`Erro ao obter habilidades do Pokémon ${pokemonName}:`, "error");
            throw new Error("Não foi possível obter as habilidades do Pokémon.");
        }
    }
}

export default PokemonApi;
