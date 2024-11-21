
import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { FavoritesPokemons } from '../../Pages//FavoritesPokemons'
import { MyTabs } from '../MyTabs';
import { Login } from '../../Pages/Login';
import { Register } from '../../Pages/Register';
import { Home } from '../../Pages/Home';

type RootStackParamList = {
    Favorite: undefined;
    Mytabs: undefined;
    Login: undefined;
    Register: undefined;
    Home: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

export type NavigationProps = StackNavigationProp<RootStackParamList>;

export function NavPages() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Mytabs" component={MyTabs} />
            <Stack.Screen name="Favorite" component={FavoritesPokemons} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}