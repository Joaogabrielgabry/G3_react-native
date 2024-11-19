import { StyleSheet } from 'react-native';

export const DetailsStyle = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    pokemonImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    pokemonName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    pokemonSpecies: {
        fontSize: 18,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#f00',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
