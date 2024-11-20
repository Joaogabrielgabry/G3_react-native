import { StyleSheet } from 'react-native';

export const LoginStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003366',
        flex: 1,
    },
    box: {
        backgroundColor: '#f2b807',
        padding: 30,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
        width: '80%',
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 15,
        marginBottom: 15,
        color: '#003366',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#1E90FF',
        borderRadius: 25,
        padding: 15,
        alignItems: 'center',
        width: 120,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    registerText: {
        color: '#f2b807',
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
    },
});
