import React, { useState, useContext } from 'react';
import { View, FlatList } from 'react-native';
import { GlobalCss } from '../../Global/GlobalCss';
import { Card } from '../../Components/Card';
import { PokemonDetails } from '../../Components/PokemonDetails';
import { FavoriteStyle } from './Favorite';
import { FavoriteContext } from '../../Context/FavoriteContext';
import { PokemonListProps } from '../../Interfaces/PokemonForm';
import { Header } from '../../Components/Header';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Button } from '../../Components/ButtonForm';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../Routes/NavegationPage';

export const FavoritesPokemons = () => {
  const { pokemonList } = useContext(FavoriteContext);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListProps | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (pokemon: PokemonListProps) => {
    setSelectedPokemon(pokemon);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedPokemon(null);
  };

  const navigation = useNavigation<NavigationProps>();
  const handleHome = () => {
    navigation.navigate('Mytabs');
  }


  return (
    <View style={GlobalCss.body}>
      <Header
      formUp={
        <Button
                form={<MaterialCommunityIcons name="home-import-outline" size={28} color="black" />}
                title=''
                handleOnChange={() => handleHome()}
            />
      } />.
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
