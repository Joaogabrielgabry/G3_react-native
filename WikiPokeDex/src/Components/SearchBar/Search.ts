import { StyleSheet } from "react-native";

export const SearchStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    icon: {
        marginLeft: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
});
