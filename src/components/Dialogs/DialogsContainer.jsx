import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import  Message from './Message/Message';
import {sendMessageActionCreater, changeMessageBodyActionCreater} from './../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import withAuthRedirect from '../hoc/withAuthRedirect'

const mapStateToProps = (state) => {
  return {
    DislogPage: state.DialogPage
  }
}

const AuthRedirectContainer = withAuthRedirect(Dialogs);

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectContainer);

export default DialogsContainer;