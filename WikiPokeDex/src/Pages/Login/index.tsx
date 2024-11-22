import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { LoginStyles } from './Login';
import { GlobalCss } from '../../Global/GlobalCss';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../Routes/NavegationPage';
import { Button } from '../../Components/ButtonForm';
import { getLogin} from '../../Api/Register';
import PikachuIcon from '../../../assets/pikachu.png';
import PokemonLogo from '../../../assets/pokemon.png';
import { AuthContext } from '../../Context/AuthContext';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin } = useContext(AuthContext);
    const navigation = useNavigation<NavigationProps>();

    const navLogin = () => {
        navigation.navigate('Mytabs');
        console.log("fui apertado aq");

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
                    handleLogin(response);
                    navLogin();
                }
            } catch (error) {
                alert('Usuário não encontrado');
            }
        }
    };
    return (
        <View style={[GlobalCss.body, LoginStyles.container]}>

            <Image
                source={PokemonLogo}
                style={LoginStyles.logoImage}
            />

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

            <Image
                source={PikachuIcon}
                style={LoginStyles.bottomRightImage}
            />
        </View>
    );
}
