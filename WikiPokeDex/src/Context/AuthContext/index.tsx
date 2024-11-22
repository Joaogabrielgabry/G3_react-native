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

    const handleLogin = async (user: LoginFormProps) => {
        try {
            console.log("Usuário logando:", user);
            // Verifique se `user` é um array e, se sim, extraia o primeiro usuário.
            const currentUser = Array.isArray(user) ? user[0] : user;
            // Salva o usuário no AsyncStorage e atualiza o estado local
            setLogin(currentUser);
            setIsLogged(true);
            await AsyncStorage.setItem("currentUser", JSON.stringify(currentUser));
            console.log("Usuário salvo:", currentUser);
            // Carrega os favoritos do usuário após o login
            await loadFavorites();
        } catch (error) {
            console.error("Erro ao salvar usuário logado:", error);
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
                console.error("Erro ao recuperar usuário:", error);
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
            console.error("Tentativa de carregar favoritos sem um usuário válido.");
            return;
        }
        try {
            const key = `favorites_${login.id}`; // Chave única para cada usuário
            console.log(`Carregando favoritos da chave: ${key}`);

            const storedFavorites = await AsyncStorage.getItem(key);
            if (storedFavorites) {
                const parsedFavorites = JSON.parse(storedFavorites);
                if (Array.isArray(parsedFavorites)) {
                    console.log("Favoritos carregados:", parsedFavorites);
                    setFavorites(parsedFavorites); // Atualiza o estado local
                }
            } else {
                console.log("Nenhum favorito encontrado para este usuário.");
                setFavorites([]); // Caso não haja favoritos, limpa o estado local
            }
        } catch (error) {
            console.error("Erro ao carregar favoritos:", error);
        }
    };

    const saveFavorites = async (newFavorites: PokemonListProps[]) => {
    if (!login || !login.id) {
        console.error("Tentativa de salvar favoritos sem um usuário logado.");
        return;
    }

    try {
        const key = `favorites_${login.id}`; // Chave única do usuário
        await AsyncStorage.setItem(key, JSON.stringify(newFavorites));
        console.log(`Favoritos salvos na chave: ${key}`, newFavorites);
    } catch (error) {
        console.error("Erro ao salvar favoritos:", error);
    }
};


const handleLogout = async () => {
    try {
        if (!login || !login.id) {
            console.error("Tentativa de logout sem um usuário válido.");
            return;
        }

        console.log(`Logout iniciado para o usuário: ${login.id}`);
        
        // Remove o usuário do AsyncStorage
        await AsyncStorage.removeItem("currentUser");

        // Limpa o estado local (mas mantém os favoritos no AsyncStorage)
        setIsLogged(false);
        setLogin(null); // Limpa o login
        setFavorites([]); // Limpa os favoritos do estado local

        console.log("Logout concluído. Favoritos permanecem no AsyncStorage.");
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
