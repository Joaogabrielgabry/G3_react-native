import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "../AuthContext";
import { PokemonListProps } from "../../Interfaces/PokemonForm";
import { LoginFormProps } from "../../Interfaces/Login";

interface FavoriteProviderProps {
    children: React.ReactNode;
}

export interface FavoriteContextProvider {
    addFavorite: (pokemon: PokemonListProps) => void;
    removeFavorite: (index: string) => void;
    pokemonList: PokemonListProps[];
    currentUser: LoginFormProps | null;
}

export const FavoriteContext = createContext<FavoriteContextProvider>({
    addFavorite: () => {},
    removeFavorite: () => {},
    pokemonList: [],
    currentUser: null,
});

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
    const { login, favorites, saveFavorites, loadFavorites, isLogged } = useContext(AuthContext);
    const [pokemonList, setPokemonList] = useState<PokemonListProps[]>(favorites);

    useEffect(() => {
        if (isLogged && login) {
            loadFavorites();
        }
    }, [isLogged, login]);

    useEffect(() => {
        setPokemonList(favorites);
    }, [favorites]);

    const addFavorite = (pokemon: PokemonListProps) => {
        const newFavorites = [...pokemonList, pokemon];
        setPokemonList(newFavorites);
        saveFavorites(newFavorites);
    };

    const removeFavorite = (index: string) => {
        const newFavorites = pokemonList.filter((fav) => fav.index !== index);
        setPokemonList(newFavorites);
        saveFavorites(newFavorites);
    };

    return (
        <FavoriteContext.Provider
            value={{
                addFavorite,
                removeFavorite,
                pokemonList,
                currentUser: login,
            }}
        >
            {children}
        </FavoriteContext.Provider>
    );
};