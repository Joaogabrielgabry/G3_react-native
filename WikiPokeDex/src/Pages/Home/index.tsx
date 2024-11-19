import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { HomeStyles } from './Home';
import { GlobalCss } from '../../Global/GlobalCss';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { Card } from '../../Components/Card';
import { PokemonListProps } from '../../Components/Pokemon';
import { getPokemonList } from '../../Routes';

export function Home() {
    const [pokemonList, setPokemonList] = useState<PokemonListProps[]>([]);

    useEffect(() => {
        async function fetchPokemonList() {
            try {
                const detailedPokemonList = await getPokemonList();
                setPokemonList(detailedPokemonList);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPokemonList();
    }, []);

    return (
        <View style={GlobalCss.body}>
            <Header />
            <ScrollView style={GlobalCss.PrincipalContent} horizontal={false} showsVerticalScrollIndicator={false}>
                <FlatList
                    data={pokemonList.filter(Boolean)}
                    keyExtractor={(item) => item.index}
                    renderItem={({ item }) => (
                        <View style={HomeStyles.PrincipalContentCard}>
                            <Card
                                index={item.index}
                                name={item.name}
                                urlImg={item.sprites.front_default}
                                species={item.species.name} // Display types
                            />
                        </View>
                    )}
                />
            </ScrollView>
            <Footer />
        </View>
    );
}
