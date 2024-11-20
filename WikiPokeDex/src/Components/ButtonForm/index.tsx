
import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, ViewStyle, TextStyle } from 'react-native';


interface ButtonProps extends TouchableOpacityProps {
    styleContainer?: ViewStyle
    textStyle?: TextStyle
    title: string;
    handleOnChange?: () => void;
    form?: JSX.Element;
}

export const Button = ({ title, form, handleOnChange, textStyle, styleContainer, ...props }: ButtonProps) => {


    return (
        <TouchableOpacity {...props} style={[styleContainer]} onPress={handleOnChange} >
            {form && form}
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    );
};
