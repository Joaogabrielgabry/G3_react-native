import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LoginStyles } from './Login';
import { GlobalCss } from '../../Global/GlobalCss';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../Routes/NavegationPage';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<NavigationProps>();

    const handleLogin = () => {
        console.log({ username, password });
        navigation.navigate('Mytabs');
    };

    const handleRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <View style={[GlobalCss.body, LoginStyles.container]}>
            <Text style={LoginStyles.title}>Login</Text>

            <View style={LoginStyles.box}>
                <TextInput
                    style={LoginStyles.input}
                    placeholder="Username"
                    placeholderTextColor="#003366"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={LoginStyles.input}
                    placeholder="Password"
                    placeholderTextColor="#003366"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <TouchableOpacity
                style={LoginStyles.button}
                onPress={handleLogin}
            >
                <Text style={LoginStyles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleRegister}>
                <Text style={LoginStyles.registerText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}
