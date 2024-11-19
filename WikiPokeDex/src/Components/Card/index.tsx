import React from 'react';
import { View, Text, ViewStyle, Image } from 'react-native';
import { CardStyles } from './Card';

interface CardProps {
    index: string;
    containerStyle?: ViewStyle;
    name: string;
    url: string;
}
// Refatorando
export function Card({ containerStyle, name, url }: CardProps) {
    return (
        <></>
        // <View style={[CardStyles.cardContainer, containerStyle]}>
        //     <View style={CardStyles.containerImage}>
        //         <Image style={CardStyles.imageCard} source={{ uri: image }}/>
        //     </View>
        //     <Text style={{width:'100%', textAlign:'center'}}>
        //         {title}
        //     </Text>
        // </View> 
    );
}