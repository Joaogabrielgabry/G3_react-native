import React, { createContext, useEffect, useState } from "react";
import { LoginFormProps } from "../../Interfaces/Login";
import { PokemonListProps } from "../../Interfaces/PokemonForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

interface AuthProviderProps {
    children: React.ReactNode;
}

export interface AuthContextProvider {
    login: LoginFormProps | null;
    setLogin: React.Dispatch<React.SetStateAction<LoginFormProps | null>>;
    isLogged: boolean;
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
    loadFavorites: () => Promise<void>;
    saveFavorites: (favorites: PokemonListProps[]) => Promise<void>;
    favorites: PokemonListProps[];
    handleLogin: (user: LoginFormProps) => void;
    handleLogout: () => void;
}

export const AuthContext = createContext<AuthContextProvider>({
    login: null,
    setLogin: () => {},
    isLogged: false,
    setIsLogged: () => {},
    loadFavorites: async () => {},
    saveFavorites: async () => {},
    favorites: [],
    handleLogin: () => {},
    handleLogout: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [login, setLogin] = useState<LoginFormProps | null>(null);
    const [isLogged, setIsLogged] = useState(false);
    const [favorites, setFavorites] = useState<PokemonListProps[]>([]);

    const handleLogin = async (user: LoginFormProps) => {
        try {
            const currentUser = Array.isArray(user) ? user[0] : user;
            setLogin(currentUser);
            setIsLogged(true);
            await AsyncStorage.setItem("currentUser", JSON.stringify(currentUser));
            await loadFavorites();
        } catch (error) {
            Alert.alert("Erro ao realizar login:", "Erro ao salvar usuário logado no AsyncStorage.");
        }
    };

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                const storedUser = await AsyncStorage.getItem("currentUser");
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    setLogin(parsedUser);
                    setIsLogged(true);
                }
            } catch (error) {
                Alert.alert("Erro ao carregar usuário logado:", "Erro ao carregar usuário logado do AsyncStorage.");
            }
        };
        initializeAuth();
    }, []);

    useEffect(() => {
        if (isLogged && login && login.id) {
            loadFavorites();
        }
    }, [isLogged, login]);


    const loadFavorites = async () => {
        if (!login || !login.id) {
            return;
        }
        try {
            const key = `favorites_${login.id}`;

            const storedFavorites = await AsyncStorage.getItem(key);
            if (storedFavorites) {
                const parsedFavorites = JSON.parse(storedFavorites);
                if (Array.isArray(parsedFavorites)) {
                    setFavorites(parsedFavorites);
                }
            } else {
                setFavorites([]);
            }
        } catch (error) {
            Alert.alert("Erro ao carregar favoritos:", "Erro ao carregar favoritos do usuário logado.");
        }
    };

    const saveFavorites = async (newFavorites: PokemonListProps[]) => {
    if (!login || !login.id) {
        Alert.alert("Erro ao salvar favoritos:", "Usuário não logado.");
        return;
    }

    try {
        const key = `favorites_${login.id}`;
        await AsyncStorage.setItem(key, JSON.stringify(newFavorites));
    } catch (error) {
        Alert.alert("Erro ao salvar favoritos:", "Erro ao salvar favoritos do usuário logado.");
    }
};


const handleLogout = async () => {
    try {
        if (!login || !login.id) {
            Alert.alert("Erro ao realizar logout:", "Usuário não logado.");
            return;
        }
        await AsyncStorage.removeItem("currentUser");
        setIsLogged(false);
        setLogin(null);
        setFavorites([]);

        Alert.alert("Logout realizado com sucesso!", "Usuário deslogado com sucesso.");
    } catch (error) {
        Alert.alert("Erro ao realizar logout:", "Erro ao remover usuário logado do AsyncStorage.");
    }
};
    return (
        <AuthContext.Provider value={{
            login,
            setLogin,
            isLogged,
            setIsLogged,
            loadFavorites,
            saveFavorites,
            favorites,
            handleLogin,
            handleLogout,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
