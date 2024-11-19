import { StyleSheet } from 'react-native';

export const DetailsStyle = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: '#f2b807',
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
        width: 250,
        height: 250,
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
        height: 1,
        marginVertical: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    topNav:{
        width:'100%',
        height: "50%",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: 5,
        margin: 0,
    },
});
