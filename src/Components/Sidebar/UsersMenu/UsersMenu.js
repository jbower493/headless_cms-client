import React from 'react';
//import PropTypes from 'prop-types';
import { AddCircleOutline } from '@material-ui/icons';

const users = ['Dave', 'Sally', 'Colin', 'Rebecca'];

class UsersMenu extends React.Component {
  render() {
    return (
      <div className="users-menu">
        <div className="users-menu__title-container">
          <h4 className="users-menu__title-text">Users</h4>
          <AddCircleOutline className="users-menu__add-button" />
        </div>

        {
          users.map(type => <p key={users.indexOf(type)} className="users-menu__item">{type}</p>)
        }
      </div>
    );
  }
}

UsersMenu.propTypes = {};

export default UsersMenu;