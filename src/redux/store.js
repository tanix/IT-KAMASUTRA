
import profileReducer from './profile-reduser'
import dialogReducer from './dialog-reducer'


let store = {
  	_state : {
	 	ProfilePage : {
	 		posts : [
		      {id:'1', message : "Hello word", like:"23"},
	     	  {id:'2', message: "This is nice", like:"0"}
	    	],
	    	textAria: 'some text',


	    },
	 	
	 	DialogPage:{
	 		dialogs : [
		      {id: 1, name: "Dima"},
		      {id: 2, name: "Kate"},
		      {id: 3, name: "Anna"},
		      {id: 4, name: "Andrei"},
		      {id: 5, name: "Dasha"}
	    	],
		    messages : [
		      {id: 1, message: 'hi'},
		      {id: 2, message: 'How is your day?'},
		      {id: 3, message: 'I am Okay'}
	    	],
	    	messageBody: '',
		}
 	
	},
	getState () {
		return this._state;
	},
	updateState () {
		console.log(this._state);
	},

    subsribe(obsirver) {
    	this.updateState = obsirver;
    	//updateState();
	},
	dispatch(action) {
		this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
		this._state.DialogPage = dialogReducer(this._state.DialogPage, action);

		this.updateState(this._state);

	}

}



export default store;

