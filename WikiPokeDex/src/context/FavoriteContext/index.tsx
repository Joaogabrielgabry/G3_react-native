

import React, { createContext, useContext, useState, useEffect } from "react";
import { PokemonListProps } from '../../Interfaces/PokemonForm';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FavoriteProviderProps {
    children: React.ReactNode
}

export interface FavoriteContextProvider {
    pokemonList: PokemonListProps[]
    addFavorite: (pokemon: PokemonListProps) => void,
    removeFavorite: (index: string) => void,
}

export const FavoriteContext = createContext<FavoriteContextProvider>({
    addFavorite: () => { },
    pokemonList: [{
        index: '',
        name: '',
        sprites: { front_default: '' },
        species: { name: '' },
    }
    ],
    removeFavorite: () => { }
})

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
    const [pokemonList, setPokemonList] = useState<PokemonListProps[]>([]);

    useEffect(() => {
        getData()
            .then(res => {
                setPokemonList(res ? res : []);
            })
    }, []);

    useEffect(() => {
        storeData(pokemonList);
    }, [pokemonList]);


    const storeData = async (value: PokemonListProps[]) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('list-pokemon', jsonValue);
        } catch (e) {
            // saving error
        }
    };

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('list-pokemon');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    };

    const addFavorite = (pokemon: PokemonListProps) => {
        const isAlreadyFavorite = pokemonList.some(
            (favPokemon) => favPokemon.index === pokemon.index
        );
        if (isAlreadyFavorite) {
            console.log("O Pokémon já está na lista de favoritos!");
            return;
        }
        const updatedList = [...pokemonList, pokemon];
        setPokemonList(updatedList);
        storeData(updatedList);
    };
    function removeFavorite(index: string) {
        let newPokemonList = pokemonList.filter(pokemon => {
            return pokemon.index !== index
        })

        setPokemonList(newPokemonList);
        storeData(newPokemonList);
    }
    return (
        <FavoriteContext.Provider value={{ pokemonList, addFavorite, removeFavorite }}>
            {children}
        </FavoriteContext.Provider>
    )

}