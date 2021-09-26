/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { profile, downArrow } from 'utilities/icons';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/

/*----------Actions----------*/
import { attemptLogout, getUser } from 'containers/auth/actions';

/*----------Component start----------*/
class ProfileDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      open: !this.state.open
    });
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {
    const { auth_logout_status, getUser } = this.props;

    if (auth_logout_status === 'success' && prevProps.auth_logout_status === 'loading') {
      getUser();
    }
  }

  render() {
    const { open } = this.state;
    const { attemptLogout } = this.props;
    const { toggleDropdown } = this;

    const renderMenu = () => {
      return (
        <ul className={`profileDropdown__menu`}>
          <li className={`profileDropdown__item`}>
            <Link className={`profileDropdown__link`} to={`/somePage`}>Edit Profile</Link>
          </li>
          <li className={`profileDropdown__item`}>
            <Link className={`profileDropdown__link`} to={`/somePage`}>Settings</Link>
          </li>
          <li className={`profileDropdown__item`}>
            <div onClick={attemptLogout} className={`profileDropdown__link`}>Logout</div>
          </li>
        </ul>
      );
    };

    /*----------Render component----------*/
    return (
      <div className={`profileDropdown`}>
        <i className={`profileDropdown__profileIcon ${profile}`} />
        <p className={`profileDropdown__name`}>{`Jamie`}</p>
        <i onClick={toggleDropdown} className={`profileDropdown__downArrow ${downArrow}`} />

        {open && renderMenu()}
      </div>
    );
  }
};

/*----------Component end----------*/

export default withRouter(connect((state) => ({
  auth_logout_status: state.auth.auth_logout_status
}),
{
  attemptLogout,
  getUser
})(ProfileDropdown)); 