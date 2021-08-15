/*----------Base imports----------*/
import React, { Component } from 'react';
import { pageError } from 'utilities/icons';

/*----------Component start----------*/
class PageError extends Component {
  render() {

    /*----------Render component----------*/
    return (
      <div className={`PageError`}>
        <i className={pageError}></i>
        <div className={`PageError__text`}>Oops, looks like the page failed to load!</div>
      </div>
    );
  }
};

/*----------Component end----------*/
export default PageError;