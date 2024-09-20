import React from 'react';
import s from "./Profile.module.css";
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile , getProfileThunkCreator} from '../../redux/profile-reduser'
import {
	useLocation,
	useNavigate,
	useParams,
  } from "react-router-dom";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId;
		if(!userId) {
			userId = 31666;
		}
		// Thunk must be updated. Dispatch is not called
		getProfileThunkCreator(userId)(window.store.dispatch);
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
	profile: state.ProfilePage.profile,
	auth: state.auth.isAuth
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