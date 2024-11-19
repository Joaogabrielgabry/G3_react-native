import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { CategoriesStyle } from './Categories';
import { GlobalCss } from '../../Global/GlobalCss';
import { Header } from '../../Components/Header';
import { getPokemonTypes } from '../../Api/PokemonCategoriesList';


interface PokemonTypeProps {
    name: string;
    url: string;
}

interface PokemonListProps {
    index: string;
    name: string;
    sprites: { front_default: string };
    species: { name: string };
}

export function PokemonCategories() {
    const [types, setTypes] = useState<PokemonTypeProps[]>([]);
    const [pokemonList, setPokemonList] = useState<PokemonListProps[]>([]);
    const [selectedType, setSelectedType] = useState<string | null>(null);

    useEffect(() => {
        async function fetchTypes() {
            try {
                const data = await getPokemonTypes();
                setTypes(data);
            } catch (error) {
                console.error('Erro ao buscar tipos:', error);
            }
        }

        fetchTypes();
    }, []);

    return (
        <View style={GlobalCss.body}>
            <Header />
            <View style={GlobalCss.PrincipalContent}>
                <FlatList
                    data={types}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                CategoriesStyle.speciesItem,
                                item.name === selectedType && CategoriesStyle.selectedItem,
                            ]}
                        >
                            <Text style={CategoriesStyle.speciesText}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
                {selectedType && (
                    <FlatList
                        data={pokemonList}
                        keyExtractor={(item) => item.index}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={CategoriesStyle.speciesItem}>
                                <Text style={CategoriesStyle.speciesText}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                )}
            </View>
        </View>
    );
}
