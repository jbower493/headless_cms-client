/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*----------Components, sections, modules----------*/
import LoginForm from '../forms/loginForm';

/*----------Shared components----------*/

/*----------Actions----------*/
import { attemptLogin } from '../actions';
import { getUser } from 'containers/auth/actions';

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

    attemptLogin(values);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {
    const { auth_login_status, getUser } = this.props;

    if (auth_login_status === 'success' && prevProps.auth_login_status === 'loading') {
      getUser();
    }
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
  auth_login_status: state.auth.auth_login_status
}),
{
  attemptLogin,
  getUser
})(Login));