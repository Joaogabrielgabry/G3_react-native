import React, { createContext, useState } from "react";
import { RegisterFormProps } from "../../Interfaces/Register";
import { LoginFormProps } from "../../Interfaces/Login";


interface AuthProviderProps {
    children: React.ReactNode
}

export interface AuthContextProvider {
    register: RegisterFormProps[]
    setRegister: React.Dispatch<React.SetStateAction<RegisterFormProps[]>>
    login: LoginFormProps[]
    setLogin: React.Dispatch<React.SetStateAction<LoginFormProps[]>>
    isLogged: boolean
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextProvider>({
    register: [],
    setRegister: () => { },
    login: [],
    setLogin: () => { } ,
    isLogged:false,
    setIsLogged: () => { }
});

export const Auth = ({ children }: AuthProviderProps) => {
    const [register, setRegister] = useState<RegisterFormProps[]>([]);
    const [login, setLogin] = useState<LoginFormProps[]>([]);
    const [isLogged, setIsLogged] = useState(false);
    return (
        <AuthContext.Provider value={{
            register,
            setRegister,
            login,
            setLogin,
            isLogged,
            setIsLogged,
         }}>
            {children}
        </AuthContext.Provider>
    )
}
