import React from "react";
import { Image, Text, View } from "react-native";

interface PokemonProps {
    index: string;
    name: string;
    url: string;
}

export function Pokemon({ index, name, url }: PokemonProps) {

    return (
        <View key={index}>
            <Image source={{uri: url}}/>
            <Text>{name}</Text>
        </View>
    );
}