import React, { useEffect, useState, useContext } from 'react';
import { View, FlatList } from 'react-native';
import { GlobalCss } from '../../Global/GlobalCss';
import { Card } from '../../Components/Card';
import { PokemonDetails } from '../../Components/PokemonDetails';
import { PokemonListProps } from '../../Components/PokemonForm';
import { FavoriteStyle } from './Favorite';
import { getPokemonList } from '../../Api/PokemonList';
import PokemonApi from '../../Api/Abilities';
import { FavoriteContext } from '../../context/FavoriteContext';

export const FavoritesPokemons = () => {
  const { pokemonList } = useContext(FavoriteContext)();
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListProps | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pokemonAbilities, setPokemonAbilities] = useState<
    Array<{ name: string; effect: string; shortEffect: string }>
  >([]);

  useEffect(() => {
    async function fetchPokemonList() {
        try {
            const detailedPokemonList = await getPokemonList();
            pokemonList(detailedPokemonList);
        } catch (error) {
            console.error("Erro ao carregar a lista de Pokémons:", error);
        }
    }
    fetchPokemonList();
}, [pokemonList]);

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


  return (
    <View style={GlobalCss.PrincipalContent}>
        <FlatList
            numColumns={2}
            data={pokemonList.filter(Boolean)}
            keyExtractor={(item) => String(item.index)}
            renderItem={({ item }) => (
                <View style={FavoriteStyle.PrincipalContentCard}>
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
        <PokemonDetails
            isVisible={isModalVisible}
            onClose={closeModal}
            pokemon={selectedPokemon}
            abilities={pokemonAbilities}
        />
    </View>
);
};