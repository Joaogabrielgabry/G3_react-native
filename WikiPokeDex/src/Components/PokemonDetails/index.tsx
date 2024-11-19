import React from "react";
import { Modal, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { DetailsStyle } from "./Details";
import Pokemon from "../../../assets/pokemon.png";

interface PokemonDetailsProps {
    isVisible: boolean;
    onClose: () => void;
    pokemon: {
        name: string;
        sprites: { front_default: string };
        species: { name: string };
    } | null;
    abilities: Array<{ name: string; effect: string; shortEffect: string }>;
}

export function PokemonDetails({ isVisible, onClose, pokemon, abilities }: PokemonDetailsProps) {
    if (!pokemon) return null;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={DetailsStyle.modalBackground}>
                <View style={DetailsStyle.topNav}>
                    <Image style={{ width: 150, height: 150 }} source={Pokemon} />

                </View>
                <ScrollView style={DetailsStyle.modalScroll}>
                    <View style={DetailsStyle.modalContent}>
                        <Image
                            source={pokemon.sprites.front_default ? { uri: pokemon.sprites.front_default } : Pokemon}
                            style={DetailsStyle.pokemonImage}
                        />
                    </View>
                    <Text style={DetailsStyle.pokemonName}>{pokemon.name}</Text>
                    <Text style={DetailsStyle.pokemonSpecies}>Type: {pokemon.species.name}</Text>
                    <View style={DetailsStyle.abilitiesSection}>
                        <Text style={DetailsStyle.sectionTitle}>Habilities:</Text>
                        {abilities.length > 0 ? (
                            abilities.map((ability, index) => (
                                <View key={index} style={DetailsStyle.abilityContainer}>
                                    <Text style={DetailsStyle.abilityName}>- {ability.name}</Text>
                                    <Text style={DetailsStyle.abilityEffect}>
                                        {ability.shortEffect}
                                    </Text>
                                </View>
                            ))
                        ) : (
                            <Text style={DetailsStyle.abilityText}>
                                Nenhuma habilidade disponível.
                            </Text>
                        )}
                    </View>
                </ScrollView>
                <TouchableOpacity style={DetailsStyle.closeButton} onPress={onClose}>
                    <Text style={DetailsStyle.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}
