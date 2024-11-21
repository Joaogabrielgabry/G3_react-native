import { LoginFormProps } from "../../Interfaces/Login";
import { RegisterFormProps } from "../../Interfaces/Register";
import { apiMock } from "../Api";



export async function postRegisterUser(register: Omit<RegisterFormProps, "id">): Promise<RegisterFormProps> {
    try {
        const response = await apiMock.post('/userG3', register);
        return response.data;
    } catch (error: any) {
        console.error("Erro ao registrar usuário:", error.message);
        throw new Error("Erro ao registrar usuário. Verifique os dados e tente novamente.");
    }
}


export async function getLogin(userData: Omit<LoginFormProps, "id">): Promise<LoginFormProps> {
    const queryParams = new URLSearchParams();

    if(userData.user) {
        queryParams.append("email", userData.user);
    }
    if(userData.password) {
        queryParams.append("password", userData.password);
    }

    try {
        const response = await apiMock.get(`/userG3?${queryParams.toString()}`);

        if (!response.data || response.data.length === 0) {
            throw new Error("Usuário não encontrado");
        }

        return response.data;
    } catch (error: any) {
        throw new Error((error as Error).message || "Erro ao buscar usuários");
    }
}

