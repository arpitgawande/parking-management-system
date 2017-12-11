import { combineReducers } from 'redux';

export default function users(state = {}, action) {
    switch(action.type) {
        case 'STORE_USER':
        return Object.assign({}, state, action.user)
    }
}