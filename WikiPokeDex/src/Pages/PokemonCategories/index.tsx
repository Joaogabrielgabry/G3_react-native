import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { CategoriesStyle } from './Categories';
import { GlobalCss } from '../../Global/GlobalCss';
import { Header } from '../../Components/Header';
import { getPokemonTypes } from '../../Api/PokemonCategoriesList';
import { Button } from '../../Components/ButtonForm';
import { useNavigation } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';
import { SearchBar } from '../../Components/SearchBar';
import { useCategory } from '../../context/CategoryContext';
import { NavigationProps } from '../../Routes/NavegationPage';

interface PokemonTypeProps {
    name: string;
    url: string;
}

const typeIcons: Record<string, string> = {
    normal: '⚪',
    fighting: '🥊',
    flying: '✈️',
    poison: '☢️',
    ground: '⛰️',
    rock: '🪨',
    bug: '🐛',
    ghost: '👻',
    steel: '⚙️',
    fire: '🔥',
    water: '💧',
    grass: '🌿',
    electric: '⚡',
    psychic: '🧠',
    ice: '🧊',
    dragon: '🐉',
    dark: '🌑',
    fairy: '✨',
    stellar: '🌟',
};

export function PokemonCategories() {
    const [types, setTypes] = useState<PokemonTypeProps[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const { setSelectedCategory } = useCategory();
    const navigation = useNavigation<NavigationProps>();

    useEffect(() => {
        async function fetchTypes() {
            try {
                const data = await getPokemonTypes();
                setTypes(data);
            } catch (error) {
                Alert.alert('Erro ao buscar tipos:', "error");
            }
        }

        fetchTypes();
    }, []);

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        navigation.goBack()
    };

    const handleResetCategories = () => {
        setSelectedCategory(null);
        navigation.goBack()
    };

    const handleInfo = () => {
        navigation.navigate('DevelopersInfos');
    };

    const filteredTypes = types.filter((type) =>
        type.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                search={<SearchBar onChangeText={(text) => setSearchTerm(text)} />}
            />
            <View style={CategoriesStyle.PrincipalContent}>
                <FlatList
                    style={{ width: '100%', flexGrow: 1 }}
                    data={filteredTypes}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={CategoriesStyle.speciesItem}
                            onPress={() => handleCategorySelect(item.name)}
                        >
                            <Text style={CategoriesStyle.speciesText}>
                                {typeIcons[item.name.toLowerCase()] || '❔'} {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}