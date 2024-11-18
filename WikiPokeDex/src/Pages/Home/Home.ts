import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
    body: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '100%',
        backgroundColor: '#f2b807',
        padding: 10,
        flex: 1,
    },

    card:{
        width:150,
        height:150,
    },

    PrincipalContentCard:{
        flexDirection: 'row',
        justifyContent:'space-around',
        width: '100%',
        flexWrap: 'wrap',
        padding: 10,
    }

});