import React from 'react';
import { View } from 'react-native';
import { TabStyle} from './Tab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../../Pages/Home';
import { PokemonCategories } from '../../Pages/PokemonCategories';
import { DevelopersInfos } from '../../Pages/DevelopersInfo';
import { TabRouter } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export function MyTabs() {
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: TabStyle.containerFooter,
            tabBarActiveTintColor: TabStyle.activeColor.color,
            tabBarActiveBackgroundColor: TabStyle.activeColor.backgroundColor,
            tabBarInactiveTintColor: TabStyle.InativeColor.color,
            tabBarItemStyle: {width: TabRouter.name === 'Home' ? '100%' : '40%'}
            }}>

            <Tab.Screen
            name="Home"
            component={Home}
            />

            <Tab.Screen
            name="Categories"
            component={PokemonCategories}
            />

            <Tab.Screen
            name="Infos"
            component={DevelopersInfos}
            />

        </Tab.Navigator>
    );
}