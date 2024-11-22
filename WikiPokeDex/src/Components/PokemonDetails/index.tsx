import React, { useContext, useEffect, useState } from "react";
import { Modal, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { DetailsStyle } from "./Details";
import { FavoriteContext } from "../../Context/FavoriteContext";
import Pokemon from "../../../src/assets/pokemon.png";

interface PokemonDetailsProps {
    isVisible: boolean;
    onClose: () => void;
    pokemon: {
        name: string;
        sprites: { front_default: string };
        species: { name: string };
        index: string;
    } | null;
    abilities: Array<{ name: string; effect: string; shortEffect: string }>;
}

export function PokemonDetails({ isVisible, onClose, pokemon, abilities }: PokemonDetailsProps) {
    const { addFavorite, removeFavorite, pokemonList, currentUser } = useContext(FavoriteContext);
    const [isFavorite, setIsFavorite] = useState(false);
    const [expandedAbilityIndex, setExpandedAbilityIndex] = useState<number | null>(null);

    const toggleAbility = (index: number) => {
        setExpandedAbilityIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        if (pokemon && currentUser !== null) {
            const favoriteExists = pokemonList.some(fav => fav.index === pokemon.index);
            if (favoriteExists !== isFavorite) {
                setIsFavorite(favoriteExists);
            }
        }
    }, [pokemon, pokemonList, currentUser]);

    const handleToggleFavorite = () => {
        if (!pokemon || currentUser === null) return;

        if (isFavorite) {
            removeFavorite(pokemon.index);
        } else {
            addFavorite(pokemon);
        }
        setIsFavorite(!isFavorite);
    };

    if (!pokemon) return null;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={DetailsStyle.modalScroll}>
            <View style={DetailsStyle.modalBackground}>
                <View style={DetailsStyle.topNav}>
                    <Image style={{ width: 150, height: 150 }} source={{ uri: pokemon.sprites.front_default }} />
                </View>
                <View style={DetailsStyle.modalScroll}>
                    <View style={DetailsStyle.modalContent}>
                        <Image
                            source={pokemon.sprites.front_default ? { uri: pokemon.sprites.front_default } : undefined}
                            style={DetailsStyle.pokemonImage}
                        />
                    </View>
                    <ScrollView style={DetailsStyle.pokemonInfo}>
                        <Text style={DetailsStyle.pokemonName}>{pokemon.name}</Text>
                        <Text style={DetailsStyle.pokemonSpecies}>Type: {pokemon.species.name}</Text>
                        <View style={DetailsStyle.abilitiesSection}>
                            <Text style={DetailsStyle.sectionTitle}>Abilities:</Text>
                            {abilities.length > 0 ? (
                                abilities.map((ability, index) => (
                                    <View key={index} style={DetailsStyle.abilityContainer}>
                                        <TouchableOpacity
                                            style={DetailsStyle.abilityHeader}
                                            onPress={() => toggleAbility(index)}
                                        >
                                            <Text style={DetailsStyle.abilityName}>{ability.name}</Text>
                                        </TouchableOpacity>
                                        {expandedAbilityIndex === index && (
                                            <View style={DetailsStyle.abilityDetails}>
                                                <Text style={DetailsStyle.abilityEffect}>
                                                    {ability.effect}
                                                </Text>
                                                <Text style={DetailsStyle.abilityShortEffect}>
                                                    {ability.shortEffect}
                                                </Text>
                                            </View>
                                        )}
                                    </View>
                                ))
                            ) : (
                                <Text style={DetailsStyle.abilityText}>
                                    No abilities available.
                                </Text>
                            )}
                        </View>
                    </ScrollView>
                </View>
                <View style={DetailsStyle.bottomNav}>
                    <TouchableOpacity style={DetailsStyle.closeButton} onPress={onClose}>
                        <Text style={DetailsStyle.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={DetailsStyle.favoriteButton}
                        onPress={handleToggleFavorite}
                    >
                        <Text style={DetailsStyle.favoriteButtonText}>
                            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </Modal>
    );
}