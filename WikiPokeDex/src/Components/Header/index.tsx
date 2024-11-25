import React,{useContext} from 'react';
import { View, Image } from 'react-native';
import { HeaderStyles } from './Header';
import Pokemon from "../../../src/assets/pokemon.png";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Button } from '../ButtonForm';
import { NavigationProps } from '../../Routes/NavegationPage';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';

interface HeaderProps {
    formUp?: JSX.Element;
    search?: JSX.Element;
}
export function Header( props : HeaderProps) {
    const { handleLogout } = useContext(AuthContext);
    const { formUp, search } = props;
    const navigation = useNavigation<NavigationProps>();

    const navLogout= () => {
        navigation.navigate('Login');
        handleLogout();
    }
    
    return (
        <View style={HeaderStyles.header}>
            <View style={HeaderStyles.topNav}>
                <Button
                form={<MaterialIcons name="logout" size={30} color="black" />}
                title=''
                handleOnChange={() => navLogout()}
                />
                <Image style={{ width: 150, height: 150 }} source={Pokemon} />
                {formUp}
            </View>
            <View style={HeaderStyles.bottomNav}>
                {search}
            </View>
        </View>
    );
}