/*----------Base imports----------*/
import React, { Component } from 'react';
import { error } from 'utilities/icons';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/

/*----------Actions----------*/

/*----------Component start----------*/
class PageError extends Component {
  constructor(props) {
    super(props);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {

    /*----------Render component----------*/
    return (
      <div className={`PageError`}>
        <i className={error}></i>
        <div className={`PageError__text`}>Oops, looks like the page failed to load!</div>
      </div>
    );
  }
};

/*----------Component end----------*/

export default PageError;