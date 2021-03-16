import React from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Users extends React.Component {
  render() {
    return (
      <div className="users-home">
        <h1 className="users-home__heading">Users</h1>

        <div className="users-home__container"></div>
      </div>
    );
  }
}

Users.propTypes = {};

const mapStateToProps = (state) => ({
  users: state.users.users
});

export default connect(mapStateToProps)(Users);