const SENDMESSAGE = 'SEND-MESSAGE';
const CHANGEMESSAGEBODY= 'CHANGE-MESSAGE-BODY';

let initialState = {
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
		};

const dialogReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGEMESSAGEBODY: {
			return {
				... state,
				messageBody : action.body,
			};	
		}
		case SENDMESSAGE:{
			let message ={
				id: 4,
				message: state.messageBody
			}
			return {
				... state,
				messages : [... state.messages, message],
				messageBody : ''
			};
		}
		default:
			return state;
	}
	
}

export const sendMessageActionCreater = () => {
  return {type: SENDMESSAGE}
}
export const changeMessageBodyActionCreater = (value) => {
  return {type: CHANGEMESSAGEBODY, body : value}
}

export default dialogReducer;