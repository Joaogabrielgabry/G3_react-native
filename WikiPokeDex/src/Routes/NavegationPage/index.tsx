
import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { MyTabs } from '../MyTabs';
import { Login } from '../../Pages/Login';
import { Register } from '../../Pages/Register';
import { DevelopersInfos } from '../../Pages/DevelopersInfo';

type RootStackParamList = {
    Favorite: undefined;
    Mytabs: undefined;
    Login: undefined;
    Register: undefined;
    DevelopersInfos: undefined;
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
            <Stack.Screen name="DevelopersInfos" component={DevelopersInfos} />
        </Stack.Navigator>
    );
}