import React from 'react';
import { View, Text } from 'react-native';
import { FooterStyle } from './Footer';

export function Footer() {
    return (
        <View style={FooterStyle.containerFooter}>
            <Text>Header</Text>
        </View>
    );
}