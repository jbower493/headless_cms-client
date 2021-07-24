/*----------Base imports----------*/
import React, { Component } from 'react';
import { pageError } from 'utilities/icons';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/

/*----------Actions----------*/

/*----------Component start----------*/
class ComponentError extends Component {
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
      <div className={`ComponentError`}>
        <i className={pageError}></i>
        <div className={`ComponentError__text`}>Oops, something went wrong!</div>
      </div>
    );
  }
};

/*----------Component end----------*/

export default ComponentError;