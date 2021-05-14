import React from 'react';
//import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { login } from '../../redux/actions/authActions';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      role: 'user'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password,
      role: this.state.role
    };

    this.props.login(data);
  }

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          <label>Role</label>
          <input type="text" name="role" value={this.state.role} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

Auth.propTypes = {};

const mapStateToProps = state => ({
  fetchingAuthData: state.auth.fetchingAuthData
});

export default connect(mapStateToProps, { login })(Auth);