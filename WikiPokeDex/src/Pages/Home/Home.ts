import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
    body: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '100%',
        backgroundColor: '#f2b807',
        marginTop: 0,
        padding: 0,
        flex: 1,
    },

    PrincipalContentCard:{
        flexDirection: 'row',
        justifyContent:'space-around',
        width: 200,
        height: 200,
        flexWrap: 'wrap',
        padding: 10,
    }

});