import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { HomeStyles } from './Home';
import { GlobalCss } from '../../Global/GlobalCss';
import { Header } from '../../Components/Header';
import { Card } from '../../Components/Card';
import { PokemonDetails } from '../../Components/PokemonDetails';
import { PokemonListProps } from '../../Interfaces/PokemonForm';
import { getPokemonList } from '../../Api/PokemonList';
import { Button } from '../../Components/ButtonForm';
import { NavigationProps } from '../../Routes/NavegationPage';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SearchBar } from '../../Components/SearchBar';
import PokemonApi from '../../Api/Abilities';


export function Home() {
    const [pokemonList, setPokemonList] = useState<PokemonListProps[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonListProps | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pokemonAbilities, setPokemonAbilities] = useState<
        Array<{ name: string; effect: string; shortEffect: string }>
    >([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        async function fetchPokemonList() {
            setIsLoading(true);
            try {
                const detailedPokemonList = await getPokemonList();
                setPokemonList(detailedPokemonList);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPokemonList();
    }, []);

    const filteredPokemonList = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const openModal = async (pokemon: PokemonListProps) => {
        setSelectedPokemon(pokemon);
        try {
            const api = new PokemonApi();
            const abilities = await api.getPokemonAbilities(pokemon.name);
            setPokemonAbilities(abilities);
        } catch (error) {
            console.error("Erro ao carregar habilidades do Pokémon:", error);
        }
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedPokemon(null);
    };

    const navigation = useNavigation<NavigationProps>();

    const handleFavorite = () => {
        navigation.navigate('Favorite');
    }


    return (
        <View style={GlobalCss.body}>
            <Header
                formUp={
                    <Button
                        form={<AntDesign name="star" size={30} color="black" />}
                        title=""
                        handleOnChange={() => handleFavorite()}
                    />
                }
                search={<SearchBar onChangeText={(text) => setSearchTerm(text)} />}
            />
            <View style={GlobalCss.PrincipalContent}>
                {isLoading ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text>Carregando Pokémons...</Text>
                    </View>
                ) : (
                    <FlatList
                        numColumns={2}
                        data={filteredPokemonList}
                        keyExtractor={(item) => (String(item.index))}
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

                )}
            </View>
            <PokemonDetails
                isVisible={isModalVisible}
                onClose={closeModal}
                pokemon={selectedPokemon}
                abilities={pokemonAbilities}
            />
        </View>
    );
}
