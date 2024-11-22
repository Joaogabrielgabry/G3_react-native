import { StyleSheet } from 'react-native';

export const CategoriesStyle = StyleSheet.create({
    speciesItem: {
        width: '100%',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#BF920A',
    },
    selectedItem: {
        backgroundColor: '#4caf50',
        borderColor: '#388e3c',
    },
    speciesText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#333',
    },
    PrincipalContent: {
        flex: 1,
        alignItems: 'center',
        width: '86%',
        flexDirection: 'column',
        gap: 15,
    },
    resetButton: {
        margin:10,
        backgroundColor:'#1C2B59',
        padding: 8,
        borderRadius: 15,
    },
    resetButtonText: {
        color: '#BF920A',
        fontSize: 19,
        fontWeight: 'bold',
    },
});
