import { StyleSheet } from "react-native";

export const FavoriteStyle = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2b807'
    },
    PrincipalContent:{
        flex: 1,
        flexDirection: 'column',
        gap: 15,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
       color: '#000',
      textAlign: 'center',
      marginVertical: 10,
    },
    card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    },
    image: {
    width: 80,
    height: 80,
    marginRight: 10,
    },
    name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    },
    type: {
    fontSize: 14,
    color: '#666',
    },
    emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
    },
    PrincipalContentCard:{
        flexDirection: 'row',
        justifyContent:'space-around',
        width: 200,
        height: 200,
        flexWrap: 'wrap',
        padding: 10,
    }
});