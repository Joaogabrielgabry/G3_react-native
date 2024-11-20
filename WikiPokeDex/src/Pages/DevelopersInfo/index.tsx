import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { InfoStyles} from './Infos';
import { GlobalCss } from '../../Global/GlobalCss';
import { Header } from '../../Components/Header';
import { Button } from '../../Components/ButtonForm';
import { NavigationProps } from '../../Routes/NavegationPage';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';



export function DevelopersInfos() {
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
                title=''
                handleOnChange={() => handleFavorite()}
            />
            }
            />
            <ScrollView style={GlobalCss.PrincipalContent}>
                Colocar seu conteudo aqui!
            </ScrollView>
        </View>
    );
}