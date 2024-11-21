import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button } from '../../Components/ButtonForm';
import { RegisterStyles } from './Register';
import { GlobalCss } from '../../Global/GlobalCss';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../Routes/NavegationPage';
import { postRegisterUser } from '../../Api/Register';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<NavigationProps>();

    const handleRegister = () => {
        navigation.navigate('Login');
    };

    const handleNewUser = async () => {
        if (email === '' || username === '' || password === '') {
            alert('Preencha todos os campos');
        } else {
            try {
                const response = await postRegisterUser({ email: email, user: username, password: password });
                if (response) {
                    alert('Usuário registrado com sucesso');
                    handleRegister();
                }
            } catch (error) {
                alert('Erro ao registrar usuário');
            }
        };
    };

    const handleGoBack = () => {
        navigation.goBack(); // Retorna à tela anterior (login)
    };

    return (
        <View style={[GlobalCss.body, RegisterStyles.container]}>
            {/* Ícone de seta para voltar */}
            <TouchableOpacity onPress={handleGoBack} style={RegisterStyles.goBackIcon}>
                <Ionicons name="arrow-back" size={30} color="#003366" />
            </TouchableOpacity>

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

            <Button
                title='Register'
                handleOnChange={handleNewUser}
                textStyle={RegisterStyles.buttonText}
                styleContainer={RegisterStyles.button}
            />
        </View>
    );
}
