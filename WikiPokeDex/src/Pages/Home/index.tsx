import React, { useEffect, useState } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { HomeStyles } from './Home';
import { GlobalCss } from '../../Global/GlobalCss';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { Card } from '../../Components/Card';
import { PokemonDetails } from '../../Components/PokemonDetails';
import { PokemonListProps } from '../../Components/Pokemon';
import { getPokemonList } from '../../Routes/PokemonList';

export function Home() {
    const [pokemonList, setPokemonList] = useState<PokemonListProps[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonListProps | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

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

    const openModal = (pokemon: PokemonListProps) => {
        setSelectedPokemon(pokemon);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedPokemon(null);
    };

    return (
        <View style={GlobalCss.body}>
            <Header />
            <View style={GlobalCss.PrincipalContent}>
                <FlatList
                    numColumns={2}
                    data={pokemonList.filter(Boolean)}
                    keyExtractor={(item) => item.index}
                    renderItem={({ item }) => (
                        <View style={HomeStyles.PrincipalContentCard}>
                            <Card
                                index={item.index}
                                name={item.name}
                                urlImg={item.sprites.front_default}
                                species={item.species.name}
                                onPress={() => openModal(item)}
                            />
                        </View>
                    )}
                />
            </View>
            <PokemonDetails
                isVisible={isModalVisible}
                onClose={closeModal}
                pokemon={selectedPokemon}
            />
            <Footer />
        </View>
    );
}
