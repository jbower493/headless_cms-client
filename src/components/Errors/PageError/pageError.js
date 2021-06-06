/*----------Base imports----------*/
import React, { Component } from 'react';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import ComponentError from 'components/Errors/ComponentError/componentError';

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
      <div>
        Page Error
        <ComponentError />
      </div>
    );
  }
};

/*----------Component end----------*/

export default PageError;