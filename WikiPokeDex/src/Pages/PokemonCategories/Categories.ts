import { StyleSheet } from 'react-native';

export const CategoriesStyle = StyleSheet.create({
    speciesItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
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
});
