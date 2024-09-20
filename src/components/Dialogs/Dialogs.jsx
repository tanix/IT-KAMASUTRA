import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import  Message from './Message/Message';
import {sendMessageActionCreater, changeMessageBodyActionCreater} from './../../redux/dialog-reducer';
import { Navigate } from 'react-router-dom';


const Dialogs =(props)=> {

   const dialogsElements = props.DislogPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
   const messagesElements = props.DislogPage.messages.map(m => <Message key={m.id} message={m.message}/>);

  const newMessageBody = props.DislogPage.messageBody;

  let onClickSendButton = () => {
    props.onClickSendMessage();

  }
  let onChangeTextAria = (e) => {
    let value = e.target.value;
    props.onChangeText(value);
  }

  if(!props.auth) return  <Navigate to="/login" />;

	return (
        <div className={s.dialogs}>
          <div className={s.dialogsItems}>
            {dialogsElements}

          </div>
          <div className={s.messages}>
           {messagesElements} 
            <div>
                <textarea value ={newMessageBody}
                          onChange={onChangeTextAria}></textarea>
              </div>
              <div>
                <button onClick={onClickSendButton}>Send</button>
              </div>
          </div>
        </div>
		)

}

export default Dialogs;