/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

/*----------Components, sections, modules----------*/
import Router from 'router/router';

/*----------Shared components----------*/

/*----------Actions----------*/

/*----------Component start----------*/
class App extends Component {
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
      <BrowserRouter>
        <div className={`app`}>
          <Router />
        </div>
      </BrowserRouter>
    );
  }
};

/*----------Component end----------*/

export default connect((state) => ({

}),
{

})(App);