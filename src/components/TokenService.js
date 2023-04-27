import jwt_decode from "jwt-decode";

class TokenService {
    getCurrentUsersRole() {
        const token = sessionStorage.access_token;
        const decodedToken = token ? jwt_decode(token) : null;

        return decodedToken ? decodedToken.roles : null;
    }

    getCurrentUsername() {
        const token = sessionStorage.access_token;
        const decodedToken = token ? jwt_decode(token) : null;

        return decodedToken ? decodedToken.username : null;
    }
}

export default new TokenService();