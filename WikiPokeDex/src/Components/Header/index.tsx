import React from 'react';
import { View, Image } from 'react-native';
import { HeaderStyles } from './Header';
import pokemon from '../../../assets/pokemon.png';
import { SearchBar } from '../SearchBar';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export function Header() {
    return (
        <View style={HeaderStyles.header}>
            <View style={HeaderStyles.topNav}>
                <MaterialIcons name="logout" size={30} color="black" />
                <Image style={{ width: 150, height: 150 }} source={pokemon} />
                <AntDesign name="star" size={30} color="black" />
            </View>
            <View style={HeaderStyles.bottomNav}>
                <SearchBar />
            </View>
        </View>
    );
}