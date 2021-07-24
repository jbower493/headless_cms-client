/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

/*----------Components, sections, modules----------*/
import ProtectedRoute from './protectedRoute';
import Sidebar from 'containers/sidebar/sidebar';
import AdminSetup from 'containers/adminSetup';
import Auth from 'containers/auth';
import Dashboard from 'containers/dashboard';
import Content from 'containers/content';
import ContentTypes from 'containers/contentTypes';

/*----------Shared components----------*/

/*----------Actions----------*/

/*----------Component start----------*/
class Router extends Component {
  constructor(props) {
    super(props);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { auth_admin_exists_data, auth_user_data } = this.props;

    /*----------Render component----------*/
    return (
      <>
        <Switch>
          <Route exact path='/admin-setup' render={() => null} />
          <Route exact path='/login' render={() => null} />
          <Route path='/' component={Sidebar} />
        </Switch>
        
        <Switch>
          <ProtectedRoute exact path='/' component={Dashboard} />
          <ProtectedRoute exact path='/content' component={Content} />
          <ProtectedRoute exact path='/content-types' component={ContentTypes} />

          <Route exact path='/login' render={() => {
            if (!auth_admin_exists_data.adminExists) {
              return <Redirect to="/admin-setup" />;
            }
            if (auth_user_data.user) {
              return <Redirect to="/" />;
            }
            return <Auth />;
          }} />
          <Route exact path='/admin-setup' render={() => {
            if (auth_admin_exists_data.adminExists) {
              if (auth_user_data.user) {
                return <Redirect to="/" />;
              }
              return <Redirect to="/login" />;
            }
            return <AdminSetup />;
          }} />
          <Route path='/' render={() => <div>404</div>} />
        </Switch>
      </>
    );
  }
}

/*----------Component end----------*/

export default connect((state) => ({
  auth_admin_exists_data: state.auth.auth_admin_exists_data,
  auth_user_data: state.auth.auth_user_data
}),
{

})(Router);