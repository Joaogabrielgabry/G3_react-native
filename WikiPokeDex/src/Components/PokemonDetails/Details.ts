import { StyleSheet } from 'react-native';

export const DetailsStyle = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: '#f2b807',
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
        width: 250,
        height: 300,
        marginBottom: 20,
    },
    pokemonName: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    pokemonSpecies: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    pokemonDetails: {
        fontSize: 16,
        marginBottom: 8,
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
    favoriteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    favoriteButton: {
        backgroundColor: '#90ee90',
        padding: 10,
        borderRadius: 5,
    },
    divider: {
        width: '100%',
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    topNav: {
        width: '100%',
        alignItems: 'center',
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: 5,
        margin: 0,
    },
    pokemonCaracteristics: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
});

