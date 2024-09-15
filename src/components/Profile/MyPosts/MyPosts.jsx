import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreater, UpdateTextAriaActionCreater} from "./../../../redux/profile-reduser";


const MyPosts =(props)=> {
  let newPostElement=React.createRef();

  const postsElements = props.posts.map(p => <Post  message={p.message} key={p.id} like={p.like}/>);
  
  let onAddPost = () => {
    props.sendPost();
    
  }
  let onTextAriaChange = () => {
    let value= newPostElement.current.value;
    props.onChangeText(value);
  }

	return (
        <div className={s.MyPosts}>My posts
          <div>
            <textarea ref={newPostElement} onChange= {onTextAriaChange} value={props.textAria}></textarea>
          </div>
          <div>
            <button onClick={onAddPost}>Add post</button>
          </div>
          <div>New posts</div>
          <div className={s.posts}>
            {postsElements}
          </div>
        </div>
		)

}

export default MyPosts;