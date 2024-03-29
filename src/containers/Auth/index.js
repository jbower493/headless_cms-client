/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*----------Components, sections, modules----------*/
import Login from './sections/login';

/*----------Shared components----------*/

/*----------Actions----------*/

/*----------Component start----------*/
class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 'login'
    };
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { step } = this.state;

    const renderPage = () => {
      switch (step) {
        case 'login':
        default: return <Login />;
      }
    };

    /*----------Render component----------*/
    return (
      <div className={`auth`}>
        {renderPage()}
      </div>
    );
  }
};

/*----------Component end----------*/

export default withRouter(connect((state) => ({

}),
{

})(Auth));