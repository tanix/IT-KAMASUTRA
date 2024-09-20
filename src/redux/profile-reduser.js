import { UserAPI } from '../api/api';

const ADDPOST = 'ADD-POST';
const UPDATETEXTARIA= 'UPDATE-TEXT-ARIA';
const SETUSERPROFILE = 'SET-USER-PROFILE';

let initialState = {
	 		posts : [
		      {id:'1', message : "Hello word", like:"23"},
	     	  {id:'2', message: "This is nice", like:"0"}
	    	],
	    	textAria: 'some text',
	    	profile: null

	    };

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADDPOST : {
			let post = {
				id: 3,
				message: state.textAria,
				like: 0
			};
			return {
				... state,
				posts : [... state.posts, post],
				textAria: '',
			};
		}
		case UPDATETEXTARIA: {
			return {
				... state,
				textAria : action.text
			};
		}
	  case SETUSERPROFILE: {
	  	return {
	  		... state,
	  		profile: action.profile
	  	}
	  }
		default: 
			return state;
	}
}
export default profileReducer;

export const addPostActionCreater = () => {
  return {type: ADDPOST}
}
export const UpdateTextAriaActionCreater = (value) => {
  return {type: UPDATETEXTARIA, text : value}
}
export const setUserProfile = (profile) => {
	return {type:SETUSERPROFILE, profile }
}
export const getProfileThunkCreator = (userId) => {
	return (dispatch) => {
		UserAPI.getProfile(userId)
			.then(response => {
				dispatch(setUserProfile(response.data));
			});
	}
}