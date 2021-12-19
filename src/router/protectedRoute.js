/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/*----------Component start----------*/
class ProtectedRoute extends Component {
  render() {
    const { auth_user_data, auth_admin_exists_data, location, computedMatch, component: Component } = this.props;

    /*----------Render component----------*/
    return (
      <Route render={() => {
        if (auth_user_data?.user) {
          return <Component computedMatch={computedMatch} />;
        }
        if (auth_admin_exists_data.adminExists) {
          return <Redirect from={location.pathname} to='/login' />;
        }
        return <Redirect from={location.pathname} to='/admin-setup' />;
      }} />
    );
  }
}

/*----------Component end----------*/
export default connect((state) => ({
  auth_user_data: state.auth.auth_user_data,
  auth_admin_exists_data: state.auth.auth_admin_exists_data
}),
{

})(ProtectedRoute);