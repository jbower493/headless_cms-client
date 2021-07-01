/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/

/*----------Actions----------*/

/*----------Component start----------*/
class ContentTypes extends Component {
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
      <div className={`contentTypes`}>
        Content Tyes
      </div>
    );
  }
};

/*----------Component end----------*/

export default withRouter(connect((state) => {

},
{

})(ContentTypes));