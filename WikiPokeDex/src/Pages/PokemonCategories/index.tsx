import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
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
                <Button
                    title="Mostrar Todos os Pokémon"
                    handleOnChange={handleResetCategories}
                    styleContainer={CategoriesStyle.resetButton}
                    textStyle={CategoriesStyle.resetButtonText}
                />
                <FlatList
                style={{ width: '100%', flexGrow:1 }}
                    data={filteredTypes}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (

                        <Button
                        title={item.name}
                        handleOnChange={() => handleCategorySelect(item.name)}
                        styleContainer={CategoriesStyle.speciesItem}
                        textStyle={CategoriesStyle.speciesText}
                        />
                    )}
                />
            </View>
        </View>
    );
}
