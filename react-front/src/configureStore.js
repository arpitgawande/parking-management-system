import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import users from './reducers/reducers';

export default function configureStore(preloadedState) {
    return createStore(users, preloadedState, applyMiddleware(thunkMiddleware));
}