import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { RegisterStyles } from './Register';
import { GlobalCss } from '../../Global/GlobalCss';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../Routes/NavegationPage';

export function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<NavigationProps>();

    const handleRegister = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={[GlobalCss.body, RegisterStyles.container]}>
            <Text style={RegisterStyles.title}>Register</Text>

            <View style={RegisterStyles.box}>
                <TextInput
                    style={RegisterStyles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#003366"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={RegisterStyles.input}
                    placeholder="Username"
                    placeholderTextColor="#003366"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={RegisterStyles.input}
                    placeholder="Password"
                    placeholderTextColor="#003366"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <TouchableOpacity
                style={RegisterStyles.button}
                onPress={handleRegister}
            >
                <Text style={RegisterStyles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}
