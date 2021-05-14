import React from 'react';
//import PropTypes from 'prop-types';
import ProfileDropdown from './ProfileDropdown/ProfileDropdown';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo-container">
          <h3 className="header__logo-text">Headless CMS</h3>
          <img className="header__logo-img" src="images/logo.png" alt="Headless CMS logo" />
        </div>
        <h2 className="header__title">Project Name</h2>
        <ProfileDropdown />
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;