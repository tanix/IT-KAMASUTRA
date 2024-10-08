import { UserAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETCURRENTPAGE = "SETCURRENTPAGE";
const SETUSERTOTALCOUNT = 'SETUSERTOTALCOUNT';
const ISFETCHING = 'ISFETCHING';
const FOLLOWINGINPROGRESS = 'FOLLOWINGINPROGRESS'

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 3,
	isFetching: true,
	followingInProgress: []
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u;
				})
			}
		case SETUSERS:
			return { ...state, users: action.users }
		case SETCURRENTPAGE:
			return { ...state, currentPage: action.currentPage }
		case SETUSERTOTALCOUNT:
			return { ...state, totalUsersCount: action.totalCount }
		case ISFETCHING:
			return { ...state, isFetching: action.isFetching }
		case FOLLOWINGINPROGRESS:
			return {
				...state,
				followingInProgress: action.isFollowing ?
					[...state.followingInProgress, action.id] :
					[...state.followingInProgress.filter(id => id != action.id)]
			}
		default:
			return state;
	}

}

export const follow = (userId) => {
	return { type: FOLLOW, userId }
}
export const unfollow = (userId) => {
	return { type: UNFOLLOW, userId }
}
export const setUsers = (users) => {
	return { type: SETUSERS, users }
}
export const setCurrentPage = (currentPage) => {
	return { type: SETCURRENTPAGE, currentPage }
}
export const setTotalUserCount = (totalCount) => {
	return { type: SETUSERTOTALCOUNT, totalCount }
}
export const toggleIsFetching = (isFetching) => {
	return { type: ISFETCHING, isFetching }
}
export const toggleIsFollowing = (isFollowing, id) => {
	return { type: FOLLOWINGINPROGRESS, isFollowing, id }
}
export const getUsersThunkCreator = (pageNumber = 1, pageSize = 5) => {

	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(pageNumber));
		UserAPI.getChangedUserData(pageNumber, pageSize).then(data => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUserCount(data.totalCount));
		});
	}
}
export const unFollowThunkCreator = (userId) => {
	return (dispatch) => {
		dispatch(toggleIsFollowing(true, userId));
		UserAPI.unfollow(userId)
			.then(response => {
				if (response.data.resultCode == 0) {
					dispatch(unfollow(userId));
					dispatch(toggleIsFollowing(false, userId));
				}
			});
	}
}
export const followThunkCreator = (userId) => {
	return (dispatch) => {
		dispatch(toggleIsFollowing(true, userId));
		UserAPI.follow(userId)
			.then(response => {
				if (response.data.resultCode == 0) {
					dispatch(follow(userId));
					dispatch(toggleIsFollowing(false, userId));
				}
			});
	}
}
export default userReducer;