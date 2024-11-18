import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { HomeStyles } from './Home';
import { GlobalCss } from '../../Global/GlobalCss';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { Card } from '../../Components/Card';

export function Home() {
    return (
        <View style={GlobalCss.body}>
            <Header>
            </Header>
            <ScrollView style={GlobalCss.PrincipalContent} horizontal={false} showsVerticalScrollIndicator={false} >
                    <Text>Colocar seu conteudo aqui!</Text>
                <View style={HomeStyles.PrincipalContentCard}>
                    <Card containerStyle={HomeStyles.card}
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0u-cjMBr2tNbcrDlPTKaWvdKWg0LuCx-CTQ&s'
                        title='Bulbasaur'
                    />
                </View>
            </ScrollView>
            <Footer>

            </Footer>
        </View>
    );
}