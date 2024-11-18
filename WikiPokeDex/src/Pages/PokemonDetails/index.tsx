import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {DetailsStyle} from './Details';
import { GlobalCss } from '../../Global/GlobalCss';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';

export function Infos() {
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