import React from 'react';
import { View, Text, ViewStyle, Image } from 'react-native';
import { CardStyles } from './Card';

interface CardProps {
    containerStyle?: ViewStyle;
    title: string;
    image?: string;
}

export function Card({ containerStyle, image, title }: CardProps) {
    return (
        <View style={[CardStyles.cardContainer, containerStyle]}>
            <View style={CardStyles.containerImage}>
                <Image style={CardStyles.imageCard} source={{ uri: image }}/>
            </View>
            <Text style={{width:'100%', textAlign:'center'}}>
                {title}
            </Text>
        </View>
    );
}