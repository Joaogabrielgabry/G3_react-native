import React from 'react';
import { View, Image } from 'react-native';
import { HeaderStyles } from './Header';
import  pokemon  from '../../../assets/pokemon.png';

export function Header() {
    return (
        <View style={HeaderStyles.header}>
            <Image style={{width: 150, height:150}} source={pokemon}/>
        </View>
    );
}