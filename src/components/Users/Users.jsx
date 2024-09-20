import React from 'react';
import styles from './users.module.css';
import { NavLink } from 'react-router-dom';
import {unFollowThunkCreator, followThunkCreator} from  '../../redux/users-reducer';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return <span className={props.currentPage === p ? styles.selected : ''}
            onClick={() => props.onChanged(p)}>{p}</span>
        })}
      </div>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id} >
                <img src={u.photos.small != null ? u.photos.small : 'data:image/jpeg;base64,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'} className={styles.userPhoto} />
              </NavLink>
            </div>
            <div>

              {u.followed
                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                  // Thunk must be updated. Dispatch is not called
                  unFollowThunkCreator(u.id)(window.store.dispatch);
                }}>unFollow </button>
                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                  // Thunk must be updated. Dispatch is not called
                  followThunkCreator(u.id)(window.store.dispatch);

                }}>Follow </button>
              }
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location?.country}</div>
              <div>{u.location?.city}</div>
            </span>
          </span>
        </div>
        )
      }

    </div>

  )
}

export default Users;