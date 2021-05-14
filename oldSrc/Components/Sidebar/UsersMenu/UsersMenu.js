import React from 'react';
//import PropTypes from 'prop-types';
//import { AddCircleOutline } from '@material-ui/icons';

import { connect } from 'react-redux';
import { showUsers } from '../../../redux/actions/mainWindowActions';
import { getUsers } from '../../../redux/actions/usersActions';

//const users = ['Dave', 'Sally', 'Colin', 'Rebecca'];

class UsersMenu extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    let title;

    if(this.props.user.role === 'admin') {
      title = <h4 className="users-menu__title users-menu__title--admin" onClick={this.props.showUsers}>Users</h4>;
    } else {
      title = <h4 className="users-menu__title">Users</h4>
    }

    return (
      <div className="users-menu">
        
        {title}

        {
          this.props.fetchingUsersData
            ? <p>Fetching data</p>
            : this.props.users.map(user => <p key={this.props.users.indexOf(user)} className="users-menu__item">{user.username}</p>)
        }
      </div>
    );
  }
}

UsersMenu.propTypes = {};

const mapStateToProps = state => ({
  user: state.auth.user,
  users: state.users.users
});

export default connect(mapStateToProps, { showUsers, getUsers })(UsersMenu);