import React, { createContext, useEffect, useState } from "react";
import { LoginFormProps } from "../../Interfaces/Login";
import { PokemonListProps } from "../../Interfaces/PokemonForm";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
                console.error("Erro ao recuperar usuário:", error);
            }
        };

        initializeAuth();
    }, []);

    useEffect(() => {
        if (isLogged && login !== null) {
            loadFavorites();
        }
    }, [isLogged, login]);

    const loadFavorites = async () => {
        if (!login) {
            console.error("Tentativa de carregar favoritos sem um usuário logado.");
            return;
        }
        try {
            const key = `favorites_${login.id}`;
            console.log(`Carregando favoritos da chave: ${key}`);
            const storedFavorites = await AsyncStorage.getItem(key);
            if (storedFavorites) {
                const parsedFavorites = JSON.parse(storedFavorites);
                if (Array.isArray(parsedFavorites)) {
                    console.log("Favoritos carregados:", parsedFavorites);
                    setFavorites(parsedFavorites);
                }
            }
        } catch (error) {
            console.error("Erro ao carregar favoritos:", error);
        }
    };

    const saveFavorites = async (newFavorites: PokemonListProps[]) => {
        if (!login) {
            console.error("Tentativa de salvar favoritos sem um usuário logado.");
            return;
        }
        try {
            const key = `favorites_${login.id}`;
            console.log(`Salvando favoritos na chave: ${key}`, newFavorites);
            await AsyncStorage.setItem(key, JSON.stringify(newFavorites));
            setFavorites(newFavorites); // Atualiza o estado local
        } catch (error) {
            console.error("Erro ao salvar favoritos:", error);
        }
    };

    const handleLogin = async (user: LoginFormProps) => {
        try {
            console.log("Usuário logando:", user);
            setLogin(user); // Define o estado de login como objeto
            setIsLogged(true); // Define o estado de login
            await AsyncStorage.setItem("currentUser", JSON.stringify(user)); // Salva o objeto do usuário
            console.log("Usuário salvo:", user);
        } catch (error) {
            console.error("Erro ao salvar usuário logado:", error);
        }

        // Garanta que loadFavorites será chamado apenas após o usuário ser atualizado
        setTimeout(() => {
            loadFavorites();
        }, 100);
    };

    const handleLogout = async () => {
        try {
            console.log("Logout iniciado");
            await AsyncStorage.removeItem("currentUser"); // Remove o usuário logado
            setIsLogged(false); // Atualiza o estado de login
            setLogin(null); // Remove o usuário atual
            setFavorites([]); // Limpa os favoritos no estado local
            console.log("Logout concluído e favoritos limpos localmente");
        } catch (error) {
            console.error("Erro ao realizar logout:", error);
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