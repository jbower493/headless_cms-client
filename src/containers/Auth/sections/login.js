/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*----------Components, sections, modules----------*/
import LoginForm from '../forms/loginForm';

/*----------Shared components----------*/

/*----------Actions----------*/
import { attemptLogin } from '../actions';

/*----------Component start----------*/
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 'login'
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(values) {
    const { attemptLogin } = this.props;
console.log(values);
    attemptLogin(values);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { handleLogin } = this;

    /*----------Render component----------*/
    return (
      <div className={`login`}>
        <LoginForm handleSubmit={handleLogin} />
      </div>
    );
  }
};

/*----------Component end----------*/

export default withRouter(connect((state) => ({

}),
{
  attemptLogin
})(Login));