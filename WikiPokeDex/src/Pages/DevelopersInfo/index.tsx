import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { InfoStyles} from './Infos';
import { GlobalCss } from '../../Global/GlobalCss';
import { Header } from '../../Components/Header';

export function DevelopersInfos() {
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