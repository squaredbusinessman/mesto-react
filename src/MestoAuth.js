export const BASE_URL = "https://auth.nomoreparties.co";

export const register = (email, password) => {
    return fetch(`${BASE_URL}/auth/local/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json())
};

export const authorize = (identifier, password) => {
    return fetch(`${BASE_URL}/auth/local/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier, password })
    })
        .then(res => res.json())
        .then(jwt => jwt);
};

export const getContent = (jwt) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        }
    })
        .then(res => res.json())
};
