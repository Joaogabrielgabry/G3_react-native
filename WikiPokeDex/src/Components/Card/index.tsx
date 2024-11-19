import React from 'react';
import { View, Text, Image, TouchableOpacity, ViewStyle } from 'react-native';
import { CardStyles } from './Card';

interface CardProps {
    index: string;
    name: string;
    species: string;
    urlImg: string;
    onPress?: () => void;
}

export function Card({ name, urlImg, species, onPress }: CardProps) {
    return (
        <TouchableOpacity
            style={CardStyles.cardContainer}
            onPress={onPress}
        >
            <View style={CardStyles.containerImage}>
                <Image style={CardStyles.imageCard} source={{ uri: urlImg }} />
            </View>
            <Text style={{ width: '100%', textAlign: 'center' }}>{name}</Text>
            <Text style={{ width: '100%', textAlign: 'center' }}>{species}</Text>
        </TouchableOpacity>
    );
}
