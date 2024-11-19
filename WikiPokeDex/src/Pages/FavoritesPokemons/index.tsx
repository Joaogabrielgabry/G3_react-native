import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FavoriteStyle} from './Favorite';
import { GlobalCss } from '../../Global/GlobalCss';
import { Header } from '../../Components/Header';
import { Footer } from '../../Routes/MyTabs';

export function Favorite() {
    return (
        <View style={GlobalCss.body}>
            <Header>
            
            </Header>
            <ScrollView style={GlobalCss.PrincipalContent}>
                Colocar seu conteudo aqui!
            </ScrollView>
            <Footer>

            </Footer>
        </View>
    );
}