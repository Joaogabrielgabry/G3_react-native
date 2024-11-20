import { StyleSheet } from 'react-native';

export const RegisterStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2b807',
        flex: 1,
    },
    box: {
        backgroundColor: '#1E90FF',
        padding: 30,
        borderRadius: 20,
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
        backgroundColor: '#003366',
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
});
