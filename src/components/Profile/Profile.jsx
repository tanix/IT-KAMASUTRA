import React from 'react';
import s from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { Navigate } from 'react-router-dom';

const Profile =(props)=> {
        if(!props.auth) return  <Navigate to="/login" />;

	return (
	<div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
       </div>
		)

}

export default Profile;