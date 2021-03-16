import React from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <h1 className="dashboard__heading">Dashboard</h1>

        <div className="dashboard__container">Welcome {this.props.user.username}</div>
      </div>
    );
  }
}

Dashboard.propTypes = {};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Dashboard);