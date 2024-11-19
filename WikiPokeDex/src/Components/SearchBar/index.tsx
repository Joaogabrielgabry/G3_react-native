import React from 'react';
import { View, TextInput } from 'react-native';
import { SearchStyles } from './Search';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function SearchBar() {
    return (
        <View style={SearchStyles.container}>
            <TextInput
                style={SearchStyles.input}
                placeholder="Search Pokémon"
                placeholderTextColor="#aaa"
            />
            <FontAwesome name="search" size={20} color="#aaa" style={SearchStyles.icon} />
        </View>
    );
}
