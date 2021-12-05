/*----------Base imports----------*/
import React, { Component } from 'react';
import { product_name } from 'config/config';
import PropTypes from 'prop-types';

/*----------Component start----------*/
class RequestLoader extends Component {
  render() {
    const { size } = this.props;

    /*----------Render component----------*/
    return (
      <div className={`RequestLoader__container`}>
        <div className={`RequestLoader${size ? ' RequestLoader--' + size : ''}`}>
          <img className={`RequestLoader__logo`} src={`images/logo.png`} alt={`${product_name}`} />
        </div>
      </div>
    );
  }
};

/*----------Component end----------*/

export default RequestLoader;

RequestLoader.propTypes = {
  size: PropTypes.oneOf([
    'sm',
    'md'
  ])
};