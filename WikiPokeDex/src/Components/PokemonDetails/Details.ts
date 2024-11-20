import { StyleSheet } from "react-native";

export const DetailsStyle = StyleSheet.create({
    // Modal principal
    modalBackground: {
        flex: 1,
        backgroundColor: "#f2b807", // Amarelo Pokémon
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    modalContent: {
        width: "90%",
        backgroundColor: "#ffffff",
        borderRadius: 20,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems: "center",
    },
    modalScroll: {
        width: "100%",
    },

    // Navegação superior e inferior
    topNav: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    bottomNav: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
    },

    // Imagem e informações do Pokémon
    pokemonImage: {
        width: 200,
        height: 200,
        marginBottom: 20,
        alignSelf: "center",
        borderRadius: 10,
    },
    pokemonName: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 5,
        textAlign: "center",
        color: "#333", // Cinza escuro para contraste
    },
    pokemonSpecies: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 15,
        textAlign: "center",
        color: "#555", // Cinza médio
    },

    // Seção de habilidades
    abilitiesSection: {
        marginTop: 5,
        padding: 10,
        backgroundColor: "#f8f9fa", // Cinza claro
        borderRadius: 15,
        width: "100%",
        borderWidth: 1,
        borderColor: "#ddd",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#444",
        textAlign: "left",
    },
    abilityContainer: {
        marginVertical: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 3,
    },
    abilityHeader: {
        padding: 10,
        backgroundColor: "#f0f0f0", // Cinza neutro
        borderRadius: 5,
        marginVertical: 5,
    },
    abilityDetails: {
        padding: 10,
        backgroundColor: "#e8e8e8",
        borderRadius: 5,
        marginTop: 5,
    },
    abilityName: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#333",
    },
    abilityEffect: {
        fontSize: 14,
        color: "#555",
        lineHeight: 18,
    },
    abilityShortEffect: {
        fontSize: 12,
        marginTop: 2,
        fontStyle: "italic",
        color: "#666", // Cinza suave para descrição curta
    },
    abilityText: {
        fontSize: 14,
        color: "#555",
        marginVertical: 5,
    },

    // Botões
    closeButton: {
        backgroundColor: "#e74c3c", // Vermelho para fechar
        padding: 12,
        borderRadius: 10,
        alignSelf: "center",
    },
    closeButtonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
    },
    favoriteButton: {
        backgroundColor: "#FFD700", // Amarelo ouro
        padding: 12,
        borderRadius: 10,
        alignSelf: "center",
        marginLeft: 20,
    },
    favoriteButtonText: {
        color: "#333", // Contraste com fundo amarelo
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
    },

    // Informações adicionais
    pokemonInfo: {
        width: "100%",
    },
});
