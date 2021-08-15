/*----------Base imports----------*/
import React, { Component } from 'react';
import { pageError } from 'utilities/icons';

/*----------Component start----------*/
class ComponentError extends Component {
  render() {

    /*----------Render component----------*/
    return (
      <div className={`ComponentError`}>
        <i className={pageError}></i>
        <div className={`ComponentError__text`}>Oops, something went wrong!</div>
      </div>
    );
  }
};

/*----------Component end----------*/
export default ComponentError;