/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

/*----------Components, sections, modules----------*/
import ProtectedRoute from './protectedRoute';
import Sidebar from 'containers/sidebar/sidebar';
import AdminSetup from 'containers/adminSetup/adminSetup';
import Auth from 'containers/auth/auth';
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
          <Route exact path='/login' component={Auth} />
          <Route exact path='/admin-setup' component={AdminSetup} />
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