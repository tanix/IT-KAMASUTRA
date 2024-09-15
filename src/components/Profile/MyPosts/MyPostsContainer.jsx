import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreater, UpdateTextAriaActionCreater} from "./../../../redux/profile-reduser";
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


const mapStateToPorops = (state) => {
  return {
    posts: state.ProfilePage.posts,
    textAria: state.ProfilePage.textAria
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendPost : () => {
      dispatch(addPostActionCreater());
    },
    onChangeText: (value) => {
      dispatch(UpdateTextAriaActionCreater(value)); 
    }
  }
}
const MyPostsContainer = connect(mapStateToPorops, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;