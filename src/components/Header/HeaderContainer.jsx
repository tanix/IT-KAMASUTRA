import React from 'react';
import Header from './Header';
import Axios from 'axios';
import { connect } from 'react-redux';
import { setUserData } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
	componentDidMount() {
		
		Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		})
			.then(response => {
				if(response.data.resultCode === 0) {
					this.props.setUserData(response.data.data);
				}
			});
	}

	render() {
		return (
			<Header {... this.props} />
		)
	}

}
let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})
export default connect(mapStateToProps, { setUserData }) (HeaderContainer);