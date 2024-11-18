import { StyleSheet } from "react-native";

export const GlobalCss = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f2b807'
    },
    PrincipalContent:{
        flexGrow: 1,
        margin: 0,
        padding: 0,
    }
});