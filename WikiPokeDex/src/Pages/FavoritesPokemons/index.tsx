import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { GlobalCss } from '../../Global/GlobalCss';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/MyTabs';
import { api } from '../../Api/Api'; 


export function Favorite() {
  
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    const getFavorites = async () => {
      try {
        setLoading(true); 
        const response = await api.get('/pokemons/favorites'); 
        setFavorites(response.data); 
      } catch (error) {
        console.error('Erro ao buscar os favoritos:', error);
      } finally {
        setLoading(false); 
      }
    };

    getFavorites(); 
  }, []); 

  return (
    <View style={GlobalCss.body}>
      <Header />
      <ScrollView style={GlobalCss.PrincipalContent}>
        <Text style={styles.title}>Seus Pokémon Favoritos</Text>

        {loading ? (
          <Text style={styles.loadingText}>Carregando...</Text>
        ) : (
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.index}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.sprites.front_default }} style={styles.image} />
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.type}>Tipos: {item.species.name}</Text>
                </View>
              </View>
            )}
            ListEmptyComponent={<Text style={styles.emptyText}>Nenhum Pokémon favorito encontrado.</Text>}
          />
        )}
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 14,
    color: '#666',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
  loadingText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});
