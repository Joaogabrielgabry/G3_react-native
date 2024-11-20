import { apiMock } from "../Api";

interface RegisterProps {
    email: string;
    user: string;
    password: string;
}

export async function postRegisterUser(register: RegisterProps): Promise<RegisterProps> {
    try {
        const response = await apiMock.post('/save', register);
        return response.data;
    } catch (error) {
        throw new Error("erro ao registrar usuário");
    }
}

export async function getRegisterUser(): Promise<RegisterProps[]> {
    try {
        const response = await apiMock.get('/save');
        return response.data;
    } catch (error) {
        throw new Error("erro ao buscar usuários");
    }
}