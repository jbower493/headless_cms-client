/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/

/*----------Actions----------*/

/*----------Component start----------*/
class ProtectedRoute extends Component {
  constructor(props) {
    super(props);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { auth_user_data, auth_admin_exists_data, location, component: Component } = this.props;

    /*----------Render component----------*/
    return (
      <Route render={() => {
        if (auth_user_data.user) {
          return <Component />;
        }
        if (auth_admin_exists_data) {
          return <Redirect from={location.pathname} to='/admin-setup'/*'/login'*/ />;
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