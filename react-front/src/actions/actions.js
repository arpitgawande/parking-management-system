import fetch from 'cross-fetch';

const baseURL = 'http://localhost:3000/';

export function storeUser(user) {
    return {
        type: 'STORE_USER',
        user
    }
}

function findUserById(userId) {
    return dispatch => {
        const url = baseURL + userId
        return fetch(url)
            .then(response => response.json())
            .then(user => dispatch(storeUser(user)));
    }
}