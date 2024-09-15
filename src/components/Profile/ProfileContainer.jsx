import React from 'react';
import s from "./Profile.module.css";
import Profile from './Profile';
import { connect } from 'react-redux';
import Axios from 'axios';
import { setUserProfile } from '../../redux/profile-reduser'
import {
	useLocation,
	useNavigate,
	useParams,
  } from "react-router-dom";

class ProfileContainer extends React.Component {
	componentDidMount() {
		//debugger;
		let userId = this.props.router.params.userId
		Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(response => {
				this.props.setUserProfile(response.data);
			});
	}

	render() {
		return (
			<div>
				<Profile {... this.props} profile={this.props.profile} />
			</div>
		)
	}

}
let mapStateToProps = (state) => ({
	profile: state.ProfilePage.profile
})
function withRouter(Component) {
	function ComponentWithRouterProp(props) {
	  let location = useLocation();
	  let navigate = useNavigate();
	  let params = useParams();
	  return (
		<Component
		  {...props}
		  router={{ location, navigate, params }}
		/>
	  );
	}
  
	return ComponentWithRouterProp;
  }
let URLDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(URLDataContainerComponent);