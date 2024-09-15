import { createStore, combineReducers } from 'redux';
import dialogReducer from './dialog-reducer'
import profileReducer from './profile-reduser'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'

let reducers = combineReducers({
	ProfilePage : profileReducer,
	DialogPage: dialogReducer,
	UsersPage: usersReducer,
	auth: authReducer

});
let store= createStore(reducers);

export default store;