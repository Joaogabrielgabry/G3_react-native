import React, { createContext, useState } from "react";
import { RegisterFormProps } from "../../Interfaces/Register";
import { LoginFormProps } from "../../Interfaces/Login";


interface FavoriteProviderProps {
    children: React.ReactNode
}

export interface FavoriteContextProvider {
    register: RegisterFormProps[]
    setRegister: React.Dispatch<React.SetStateAction<RegisterFormProps[]>>
    login: LoginFormProps[]
    setLogin: React.Dispatch<React.SetStateAction<LoginFormProps[]>>
}

export const FavoriteContext = createContext<FavoriteContextProvider>({
    register: [],
    setRegister: () => { },
    login: [],
    setLogin: () => { } ,
});

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
    const [register, setRegister] = useState<RegisterFormProps[]>([]);
    const [login, setLogin] = useState<LoginFormProps[]>([]);
    return (
        <FavoriteContext.Provider value={{ register, setRegister, login, setLogin }}>
            {children}
        </FavoriteContext.Provider>
    )
}
