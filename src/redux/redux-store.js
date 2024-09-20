import {applyMiddleware, createStore, combineReducers } from 'redux';
import dialogReducer from './dialog-reducer'
import profileReducer from './profile-reduser'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import { thunk } from 'redux-thunk';

const thunkMiddleware = thunk;
let reducers = combineReducers({
	ProfilePage : profileReducer,
	DialogPage: dialogReducer,
	UsersPage: usersReducer,
	auth: authReducer

});
let store= createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;