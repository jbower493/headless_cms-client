import React from 'react';
//import PropTypes from 'prop-types';
import ContentTypesMenu from './ContentTypesMenu/ContentTypesMenu';
import UsersMenu from './UsersMenu/UsersMenu';

import { connect } from 'react-redux';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <ContentTypesMenu />
        {
          this.props.user.role === 'admin' ? <UsersMenu /> : null
        }
      </div>
    );
  }
}

Sidebar.propTypes = {};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Sidebar);
