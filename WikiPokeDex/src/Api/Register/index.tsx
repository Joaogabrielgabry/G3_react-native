import { LoginFormProps } from "../../Interfaces/Login";
import { RegisterFormProps } from "../../Interfaces/Register";
import { apiMock } from "../Api";



export async function postRegisterUser(register: RegisterFormProps): Promise<RegisterFormProps> {
    try {
        const response = await apiMock.post('/userG3', register);
        return response.data;
    } catch (error: any) {
        console.error("Erro ao registrar usuário:", error.message);
        throw new Error("Erro ao registrar usuário. Verifique os dados e tente novamente.");
    }
}


export async function getRegisterUser(userData: Omit<LoginFormProps, "index">): Promise<LoginFormProps> {
    const queryParams = new URLSearchParams();

    if(userData.email) {
        queryParams.append("email", userData.email);
    }
    if(userData.password) {
        queryParams.append("password", userData.password);
    }

    try {
        const response = await apiMock.get(`/userG3?${queryParams.toString()}`);
        return response.data;
    } catch (error) {
        throw new Error("erro ao buscar usuários");
    }
}