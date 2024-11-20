import React from 'react';
import { View, Image } from 'react-native';
import { HeaderStyles } from './Header';
import pokemon from '../../../assets/pokemon.png';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface HeaderProps {
    formUp?: JSX.Element;
    search?: JSX.Element;
}
export function Header( props : HeaderProps) {
    const { formUp, search } = props;
    return (
        <View style={HeaderStyles.header}>
            <View style={HeaderStyles.topNav}>
                <MaterialIcons name="logout" size={30} color="black" />
                <Image style={{ width: 150, height: 150 }} source={pokemon} />
                {formUp}
            </View>
            <View style={HeaderStyles.bottomNav}>
                {search}
            </View>
        </View>
    );
}