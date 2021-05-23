/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

/*----------Components, sections, modules----------*/
import ProtectedRoute from './protectedRoute';
import Header from 'containers/header/header';
import Sidebar from 'containers/sidebar/sidebar';
import Dashboard from 'containers/dashboard/dashboard';
import Content from 'containers/content/content';
import ContentTypes from 'containers/contentTypes/contentTypes';

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
    const { auth_user_data, auth_admin_exists_data } = this.props;

    /*----------Render component----------*/
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/admin-setup' render={() => null} />
          <Route exact path='/login' render={() => null} />
          <Route path='/' component={Sidebar} />
        </Switch>
        
        <Switch>
          <ProtectedRoute exact path='/' component={Dashboard} />
          <ProtectedRoute exact path='/content' component={Content} />
          <ProtectedRoute exact path='/content-types' component={ContentTypes} />
          <Route exact path='/login' render={() => 'login'} />
          <Route exact path='/admin-setup' render={() => 'admin setup'} />
          <Route path='/' render={() => <div>404</div>} />
        </Switch>
      </>
    );
  }
}

/*----------Component end----------*/

export default connect((state) => ({
  
}),
{

})(Router);