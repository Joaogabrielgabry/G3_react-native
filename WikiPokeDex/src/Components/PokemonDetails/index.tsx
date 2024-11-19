import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import { DetailsStyle } from './Details';
import pokemon from '../../../assets/pokemon.png';

interface PokemonDetailsProps {
    isVisible: boolean;
    onClose: () => void;
    pokemon: {
        name: string;
        sprites: {
            front_default: string;
        };
        species: {
            name: string;
        };
    } | null;
}

export function PokemonDetails({ isVisible, onClose, pokemon }: PokemonDetailsProps) {
    if (!pokemon) return null;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={DetailsStyle.modalBackground}>
                <View style={DetailsStyle.modalContent}>
                    <View style={DetailsStyle.topNav}>
                        <Image style={{ width: 150, height: 150 }} source={pokemon} />
                    </View>
                    <Image
                        source={{ uri: pokemon.sprites.front_default }}
                        style={DetailsStyle.pokemonImage}
                    />
                    <Text style={DetailsStyle.pokemonName}>{pokemon.name}</Text>
                    <Text style={DetailsStyle.pokemonSpecies}>
                        Espécie: {pokemon.species.name}
                    </Text>
                    <View style={DetailsStyle.divider}>
                        <TouchableOpacity
                            style={DetailsStyle.closeButton}
                            onPress={onClose}
                        >
                            <Text style={DetailsStyle.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={DetailsStyle.favoriteButton}
                            onPress={onClose}
                        >
                            <Text style={DetailsStyle.favoriteButtonText}>Favoritar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
