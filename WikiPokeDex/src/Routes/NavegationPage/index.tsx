
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
// import { Home } from '../../Pages/Home';
import { Favorite } from '../../Pages/FavoritesPokemons';
import { MyTabs } from '../MyTabs';

type RootStackParamList = {
    Favorite: undefined;
    Mytabs: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

export type NavigationProps = StackNavigationProp<RootStackParamList>;

export function NavPages() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Mytabs">
            <Stack.Screen name="Mytabs" component={MyTabs} />
            <Stack.Screen name="Favorite" component={Favorite} />
        </Stack.Navigator>
    );
}