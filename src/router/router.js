/*----------Base imports----------*/
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

/*----------Components, sections, modules----------*/
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
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/content' component={Content} />
        <Route exact path='/content-types' component={ContentTypes} />
        <Route path='/' render={() => <div>404</div>} />
      </Switch>
    );
  }
}

/*----------Component end----------*/

export default Router;