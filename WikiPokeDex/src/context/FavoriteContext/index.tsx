
import React, { createContext, useContext, useState } from "react";
import { PokemonListProps } from '../../Interfaces/PokemonForm';


interface FavoriteProviderProps {
    children: React.ReactNode
}

export interface FavoriteContextProvider {
    pokemonList: PokemonListProps[]
    setPokemonList: React.Dispatch<React.SetStateAction<PokemonListProps[]>>
}

export const FavoriteContext = createContext<FavoriteContextProvider | undefined>(undefined)

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
    const [pokemonList, setPokemonList] = useState<PokemonListProps[]>([]);
    return (
        <FavoriteContext.Provider value={{ pokemonList, setPokemonList }}>
            {children}
        </FavoriteContext.Provider>
    )

}
export const useFavoriteContext = (): FavoriteContextProvider => {
    const context = useContext(FavoriteContext);
    if (!context) {
        throw new Error('useFavoriteContext must be used within a FavoriteProvider');
    }
    return context;
}
