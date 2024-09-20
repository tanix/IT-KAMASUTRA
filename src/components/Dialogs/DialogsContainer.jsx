import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import  Message from './Message/Message';
import {sendMessageActionCreater, changeMessageBodyActionCreater} from './../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
  return {
    DislogPage: state.DialogPage,
    auth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickSendMessage: () => {
      dispatch(sendMessageActionCreater());
    },
    onChangeText: (value) => {
      dispatch(changeMessageBodyActionCreater(value));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;