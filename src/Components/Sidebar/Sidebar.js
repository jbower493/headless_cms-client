import React from 'react';
//import PropTypes from 'prop-types';
import ContentTypesMenu from './ContentTypesMenu/ContentTypesMenu';
import UsersMenu from './UsersMenu/UsersMenu';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <ContentTypesMenu />
        <UsersMenu />
      </div>
    );
  }
}

Sidebar.propTypes = {};

export default Sidebar;
