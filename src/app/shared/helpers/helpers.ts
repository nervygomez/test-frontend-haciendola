import {  jwtDecode } from 'jwt-decode';

export const isTokenValid = (token: string) => {
    try {
        const decodedToken: any = jwtDecode(token);
        if (decodedToken.exp < Date.now() / 1000) {
            return false;
        }
        return true;
    } catch (error) {
        console.error('Error decoding token:', error);
        return false;
    }
}