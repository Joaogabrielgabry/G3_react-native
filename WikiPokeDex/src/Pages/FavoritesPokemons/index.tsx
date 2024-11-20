import React, { useState, useContext } from 'react';
import { View, FlatList } from 'react-native';
import { GlobalCss } from '../../Global/GlobalCss';
import { Card } from '../../Components/Card';
import { PokemonDetails } from '../../Components/PokemonDetails';
import { FavoriteStyle } from './Favorite';
import { FavoriteContext } from '../../context/FavoriteContext';

export const FavoritesPokemons = () => {
  const { pokemonList } = useContext(FavoriteContext);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (pokemon) => {
    setSelectedPokemon(pokemon);
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
        data={pokemonList}
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
      {selectedPokemon && (
        <PokemonDetails
          isVisible={isModalVisible}
          onClose={closeModal}
          pokemon={selectedPokemon}
          abilities={[]}
        />
      )}
    </View>
  );
};
