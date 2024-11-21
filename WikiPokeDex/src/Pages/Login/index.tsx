import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { LoginStyles } from './Login';
import { GlobalCss } from '../../Global/GlobalCss';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../Routes/NavegationPage';
import { Button } from '../../Components/ButtonForm';
import { getLogin} from '../../Api/Register';
import { AuthContext } from '../../context/AuthContext';
import { LoginFormProps } from '../../Interfaces/Login';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, setLogin, setIsLogged } = useContext(AuthContext);
    const navigation = useNavigation<NavigationProps>();

    const handleLogin = () => {
        navigation.navigate('Mytabs');
    };

    const handleRegister = () => {
        navigation.navigate('Register');
    };

    const checkUser = async () => {
        if(username === '' || password === '') {
            alert('Preencha todos os campos');
        } else {
        try {
            const response = await getLogin({ user: username, password: password });
            if (response) {
                setLogin([response]);
                setIsLogged(true);
                handleLogin();
            }
        } catch (error) {
            alert('Usuário não encontrado');
            console.error("Erro ao buscar usuário:", error);
        }
    }
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

            <Button
                styleContainer={LoginStyles.button}
                title='Login'
                textStyle={LoginStyles.buttonText}
                handleOnChange={checkUser}
            />

            <Button
                title='Register'
                textStyle={LoginStyles.registerText}
                handleOnChange={handleRegister}
            />
        </View>
    );
}
