import React, { useState, useContext } from 'react';
import { View, FlatList } from 'react-native';
import { GlobalCss } from '../../Global/GlobalCss';
import { Card } from '../../Components/Card';
import { PokemonDetails } from '../../Components/PokemonDetails';
import { FavoriteStyle } from './Favorite';
import { FavoriteContext } from '../../context/FavoriteContext';
import { PokemonListProps } from '../../Interfaces/PokemonForm';
import { Header } from '../../Components/Header';
import Entypo from '@expo/vector-icons/Entypo';
import { Button } from '../../Components/ButtonForm';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../Routes/NavegationPage';
import PokemonApi from '../../Api/Abilities';
import { AbilityDetails } from '../../Api/Abilities'
const api = new PokemonApi();

export const FavoritesPokemons = () => {
  const { pokemonList } = useContext(FavoriteContext);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListProps | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [abilities, setAbilities] = useState<AbilityDetails[]>([]);

  const openModal = async (pokemon: PokemonListProps) => {
    setSelectedPokemon(pokemon);
    setIsModalVisible(true);

    try {
      const fetchedAbilities = await api.getPokemonAbilities(pokemon.name);
      setAbilities(fetchedAbilities);
    } catch (error) {
      console.error("Erro ao buscar habilidades:", error);
      setAbilities([]);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedPokemon(null);
    setAbilities([]);
  };

  const navigation = useNavigation<NavigationProps>();
  const handleInfo = () => {
    navigation.navigate('DevelopersInfos');
  };

  return (
    <View style={GlobalCss.body}>
      <Header
        formUp={
          <Button
            form={<Entypo name="info-with-circle" size={30} color="black" />}
            title=""
            handleOnChange={handleInfo}
          />
        }
      />
      <View style={GlobalCss.PrincipalContent}>
        <FlatList
          contentContainerStyle={FavoriteStyle.PrincipalContent}
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
      </View>
      {selectedPokemon && (
        <PokemonDetails
          isVisible={isModalVisible}
          onClose={closeModal}
          pokemon={selectedPokemon}
          abilities={abilities}
        />
      )}
    </View>
  );
};
