import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { CategoriesStyle } from './Categories';
import { GlobalCss } from '../../Global/GlobalCss';
import { Header } from '../../Components/Header';
import { getPokemonTypes } from '../../Api/PokemonCategoriesList';
import { Button } from '../../Components/ButtonForm';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SearchBar } from '../../Components/SearchBar';
import { useCategory } from '../../Context/CategoryContext';
import { NavigationProps } from '../../Routes/NavegationPage';

interface PokemonTypeProps {
    name: string;
    url: string;
}

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
                console.error('Erro ao buscar tipos:', error);
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

    const handleFavorite = () => {
        navigation.navigate('Favorite');
    };

    const filteredTypes = types.filter((type) =>
        type.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <View style={GlobalCss.body}>
            <Header
                formUp={
                    <Button
                        form={<AntDesign name="star" size={30} color="black" />}
                        title=""
                        handleOnChange={handleFavorite}
                    />
                }
                search={<SearchBar onChangeText={(text) => setSearchTerm(text)} />}
            />
            <View style={GlobalCss.PrincipalContent}>
                <Button
                    title="Mostrar Todos os Pokémon"
                    handleOnChange={handleResetCategories}
                />
                <FlatList
                    data={filteredTypes}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={CategoriesStyle.speciesItem}
                            onPress={() => handleCategorySelect(item.name)}
                        >
                            <Text style={CategoriesStyle.speciesText}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}
