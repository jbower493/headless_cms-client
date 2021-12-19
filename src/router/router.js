/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

/*----------Components, sections, modules----------*/
import ProtectedRoute from './protectedRoute';
import Sidebar from 'containers/sidebar';
import AdminSetup from 'containers/adminSetup';
import Auth from 'containers/auth';
import Dashboard from 'containers/dashboard';
import Content from 'containers/content';
import ContentTypes from 'containers/contentTypes';
import Users from 'containers/users';

/*----------Component start----------*/
class Router extends Component {

  render() {
    const { auth_admin_exists_data, auth_user_data } = this.props;

    /*----------Render component----------*/
    return (
      <div className={`mainPage`}>
        <Switch>
          <Route exact path='/admin-setup' render={() => null} />
          <Route exact path='/login' render={() => null} />
          <Route path='/' render={() => auth_user_data?.user ? <Sidebar /> : null} />
        </Switch>
        
        <Switch>
          <ProtectedRoute exact path='/dashboard' component={Dashboard} />
          <ProtectedRoute exact path='/content/:type' component={Content} />
          <ProtectedRoute exact path='/content-types' component={ContentTypes} />
          <ProtectedRoute exact path='/users' component={Users} />

          <Route exact path='/login' render={() => {
            if (!auth_admin_exists_data.adminExists) {
              return <Redirect to="/admin-setup" />;
            }
            if (auth_user_data?.user) {
              return <Redirect to="/dashboard" />;
            }
            return <Auth />;
          }} />
          <Route exact path='/admin-setup' render={() => {
            if (auth_admin_exists_data.adminExists) {
              if (auth_user_data?.user) {
                return <Redirect to="/dashboard" />;
              }
              return <Redirect to="/login" />;
            }
            return <AdminSetup />;
          }} />
          <Route path='/' render={() => auth_user_data?.user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />} />
        </Switch>
      </div>
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