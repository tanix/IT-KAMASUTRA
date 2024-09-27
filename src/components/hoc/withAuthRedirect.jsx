import React from "react";
import { Navigate } from 'react-router-dom';
import {connect} from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
    auth: state.auth.isAuth
})

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.auth) return  <Navigate to="/login" />;
	        return <Component {...this.props} />;
        }
    }
    
    let ConnectedAuthRedirectContainer = connect(mapStateToPropsForRedirect)(RedirectComponent);
    
    return ConnectedAuthRedirectContainer;
}

export default withAuthRedirect;