import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../../Pages/Home';
import { PokemonCategories } from '../../Pages/PokemonCategories';
import { DevelopersInfos } from '../../Pages/DevelopersInfo';
import { FavoritesPokemons } from '../../Pages/FavoritesPokemons';

const Tab = createBottomTabNavigator();

export function MyTabs() {
    return (
<Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarStyle: {
            backgroundColor: '#307CBF',
            height: 90,
            padding: 5,
            paddingRight: 10,
            paddingLeft: 10,
            margin: 0,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            justifyContent: 'center',
        },
        tabBarItemStyle: {
            padding: 1,
            margin: 5,
            justifyContent: 'center',
            alignItems: 'center',
            height: 70,
            borderRadius: 35, // Valor ajustado para arredondar melhor a área
            backgroundColor: 'transparent',
        },
        tabBarIconStyle: {
            fontSize: 50,
            width: 80,
            padding: 28,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        tabBarActiveTintColor: '#fff',
        tabBarShowLabel: false,
    }}
>
    <Tab.Screen
        options={{
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                <Feather name="home" size={45} color={color} style={{
                    backgroundColor: focused ? '#1C2B59' : 'transparent', // Cor de fundo quando ativo
                    borderRadius: focused ? 10 : 0, // Aplica border-radius quando ativo
                    padding: focused ? 15 : 0, // Ajuste do padding quando ativo
                }} />
            ),
        }}
        name="home"
        component={Home}
    />

    <Tab.Screen
        options={{
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                <Feather name="grid" size={45} color={color} style={{
                    backgroundColor: focused ? '#1C2B59' : 'transparent', // Cor de fundo quando ativo
                    borderRadius: focused ? 10 : 0, // Aplica border-radius quando ativo
                    padding: focused ? 15 : 0, // Ajuste do padding quando ativo
                }} />
            ),
        }}
        name="categories"
        component={PokemonCategories}
    />

    <Tab.Screen
        options={{
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                <Feather name="star" size={45} color={color} style={{
                    backgroundColor: focused ? '#1C2B59' : 'transparent', // Cor de fundo quando ativo
                    borderRadius: focused ? 10 : 0, // Aplica border-radius quando ativo
                    padding: focused ? 15 : 0, // Ajuste do padding quando ativo
                }} />
            ),
        }}
        name="favorites"
        component={FavoritesPokemons}
    />
</Tab.Navigator>
    );
}