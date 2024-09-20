import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleIsFollowing, getUsersThunkCreator } from '../../redux/users-reducer'

import Preloader from '../Common/Preloader/Preloader'
import Users from './Users'


class UsersAPIComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let pageNumber = 1;
		// Thunk must be updated. Dispatch is not called
		getUsersThunkCreator(pageNumber, this.props.pageSize)(window.store.dispatch);
	}
	
	onChanged = (pageNumber) => {

		this.props.setCurrentPage(pageNumber);
		// Thunk must be updated. Dispatch is not called
		getUsersThunkCreator(pageNumber, this.props.pageSize)(window.store.dispatch);
	}
	render() {

		return (
			<>
				{this.props.isFetching ? <Preloader /> : ""}
				<Users totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onChanged={this.onChanged}
					users={this.props.users}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					followingInProgress={this.props.followingInProgress}
					toggleIsFollowing={this.props.toggleIsFollowing}
				/>
			</>
		)
	}
}
let mapStateToProps = (state) => {
	return {
		users: state.UsersPage.users,
		pageSize: state.UsersPage.pageSize,
		totalUsersCount: state.UsersPage.totalUsersCount,
		currentPage: state.UsersPage.currentPage,
		isFetching: state.UsersPage.isFetching,
		followingInProgress: state.UsersPage.followingInProgress
	}
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setCurrentPage,
	toggleIsFollowing,
	getUsersThunkCreator
})(UsersAPIComponent);