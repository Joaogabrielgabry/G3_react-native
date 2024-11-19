import React from 'react';
import { View, Text, ViewStyle, Image } from 'react-native';
import { CardStyles } from './Card';

interface CardProps {
    index: string;
    containerStyle?: ViewStyle;
    name: string;
    species: string;
    urlImg: string;
}
// Refatorando
export function Card({ containerStyle, name, urlImg, species }: CardProps) {
    return (
        
        <View style={[CardStyles.cardContainer, containerStyle]}>
            <View style={CardStyles.containerImage}>
                <Image style={CardStyles.imageCard} source={{ uri: urlImg }}/>
            </View>
            <Text style={{width:'100%', textAlign:'center'}}>
                {name}
            </Text>
            <Text style={{width:'100%', textAlign:'center'}}>
                {species}
            </Text>
        </View> 
    );
}