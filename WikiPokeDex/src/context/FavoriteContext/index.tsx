import React, { createContext, useState } from "react";
import { PokemonListProps } from '../../Components/PokemonForm';

interface FavoriteProviderProps {
    children: React.ReactNode
}

export interface FavoriteContextProvider {
    pokemonList: PokemonListProps[]
}

export const FavoriteContext = createContext<FavoriteContextProvider>({ pokemonList: [] });

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
    const [pokemonList, setPokemonList] = useState<PokemonListProps[]>([]);
    return (
        <FavoriteContext.Provider value={{ pokemonList }}>
            {children}
        </FavoriteContext.Provider>
    )
}
