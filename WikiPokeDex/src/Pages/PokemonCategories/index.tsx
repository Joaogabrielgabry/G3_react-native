import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { CategoriesStyle } from './Categories';
import { GlobalCss } from '../../Global/GlobalCss';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { getPokemonSpecies } from '../../Routes/PokemonEscpeciesList/index';

interface PokemonSpeciesProps {
    name: string;
    url: string;
}

export function Infos() {
    const [speciesList, setSpeciesList] = useState<PokemonSpeciesProps[]>([]);

    useEffect(() => {
        async function fetchPokemonSpecies() {
            try {
                const species = await getPokemonSpecies();
                setSpeciesList(species);
            } catch (error) {
                console.error('Erro ao buscar espécies:', error);
            }
        }

        fetchPokemonSpecies();
    }, []);

    return (
        <View style={GlobalCss.body}>
            <Header />
            <ScrollView style={GlobalCss.PrincipalContent}>
                <FlatList
                    data={speciesList}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={CategoriesStyle.speciesItem}>
                            <Text style={CategoriesStyle.speciesText}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </ScrollView>
            <Footer />
        </View>
    );
}
