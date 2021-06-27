/*----------Base imports----------*/
import React, { Component } from 'react';
import { product_name } from 'config/config';

/*----------Component start----------*/
class RequestLoader extends Component {
  render() {
    const { size } = this.props;

    /*----------Render component----------*/
    return (
      <div className={`RequestLoader${size ? ' RequestLoader--' + size : ''}`}>
        <img className={`RequestLoader__logo`} src={`images/logo.png`} alt={`${product_name}`} />
      </div>
    );
  }
};

/*----------Component end----------*/

export default RequestLoader;