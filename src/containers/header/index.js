/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { product_name, project_name } from 'config/config.json';

/*----------Components, sections, modules----------*/
import ProfileDropdown from 'containers/header/sections/profileDropdown';

/*----------Shared components----------*/

/*----------Actions----------*/

/*----------Component start----------*/
class Header extends Component {

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {

    /*----------Render component----------*/
    return (
      <div className={`header`}>
        <h2 className={`header__productName`}>
          {product_name}
          <img className={`header__logo`} src={`images/logo.png`} alt={`${product_name}`} />  
        </h2>
        <h1 className={`header__projectName`}>{project_name}</h1>
        <ProfileDropdown />
      </div>
    );
  }
};

/*----------Component end----------*/
export default withRouter(connect((state) => ({

}),
{

})(Header));