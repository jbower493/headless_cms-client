import React from 'react';
//import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { logout } from '../../../redux/actions/authActions';

class ProfileDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.logout();
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        Profile
      </div>
    );
  }
}

ProfileDropdown.propTypes = {};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(ProfileDropdown);