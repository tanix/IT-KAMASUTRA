import React from 'react';
import s from "./Post.module.css";

const Post =(props)=> {
	return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_gaxAkYYDw8UfNleSC2Viswv3xSmOa4bIAQ&s" />
      {props.message}
      <div>
        <span> like </span>{props.like}
      </div>
    </div>
    )

}

export default Post;