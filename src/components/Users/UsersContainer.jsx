import React from 'react';
import {connect} from 'react-redux';
import {follow, unfollow, setUsers, setCurrentPage, setTotalUserCount,toggleIsFetching, toggleIsFollowing } from '../../redux/users-reducer'
import Axios from 'axios';
import Preloader from '../Common/Preloader/Preloader'
import Users from './Users'
import { UserAPI } from '../../api/api';

class UsersAPIComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  	this.props.toggleIsFetching(true);
	  UserAPI.getUsersData().then(data => {
     	this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUserCount(data.totalCount);
      });

  }
onChanged = (pageNumber) => {
	this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    UserAPI.getChangedUserData(pageNumber, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items)
      });
  }
  render() {
      
    return (
    	<>
    	{ this.props.isFetching ? <Preloader />: ""}
	        <Users totalUsersCount={this.props.totalUsersCount}
	        pageSize={this.props.pageSize}
	        currentPage ={ this.props.currentPage}
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

let mapDispatchToProps = (dispatch) => {
	return 
}
export default connect(mapStateToProps, {
		follow,
		unfollow,
		setUsers,
		setCurrentPage,
		setTotalUserCount,
		toggleIsFetching,
		toggleIsFollowing
	})(UsersAPIComponent);