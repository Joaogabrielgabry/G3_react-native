import { StyleSheet } from 'react-native';

export const CategoriesStyle = StyleSheet.create({
    speciesItem: {
        width: '90%',
        padding: 15,
        marginVertical: 8,
        backgroundColor: '#FFFFFF', // Cor branca
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Centralizar conteúdo
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    speciesText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textTransform: 'capitalize',
        textAlign: 'center', // Centralizar texto
    },
    PrincipalContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFA500',
        width: '100%',
    },
    resetButton: {
        margin: 10,
        backgroundColor: '#FFFFFF', // Cor branca
        padding: 8,
        borderRadius: 15,
        alignItems: 'center', // Centralizar conteúdo
        justifyContent: 'center',
    },
    resetButtonText: {
        color: '#BF920A',
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});