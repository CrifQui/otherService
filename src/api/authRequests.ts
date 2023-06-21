import { handleFetch } from "./api";
export const loginRequest = async (data: Object) => {
    try {
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: `${process.env.AUTHSERVICEURL}/login`,
            data
        }
        const response = await handleFetch(config);
        return response.data
    } catch (error) {
        return error
    }
}

export const validateTokenRequest = async (token: string) => {
    try {
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            url: `${process.env.AUTHSERVICEURL}/validate`,
        }
        const response = await handleFetch(config);
        return response.data
    } catch (error) {
        return error
    }
}