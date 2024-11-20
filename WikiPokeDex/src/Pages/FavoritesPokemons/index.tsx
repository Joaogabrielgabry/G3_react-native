import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FavoriteStyle} from './Favorite';
import { GlobalCss } from '../../Global/GlobalCss';
import { Header } from '../../Components/Header';

export function Favorite() {
    return (
        <View style={GlobalCss.body}>
            <Header>
            </Header>
            <ScrollView style={GlobalCss.PrincipalContent}>
                Colocar seu conteudo aqui!
            </ScrollView>
        </View>
    );
}