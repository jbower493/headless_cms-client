/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/

/*----------Actions----------*/

/*----------Component start----------*/
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
console.log(this.props)
    /*----------Render component----------*/
    return (
      <div className={`dashboard`}>
        Dashboard lol
      </div>
    );
  }
};

/*----------Component end----------*/

export default withRouter(connect((state) => ({

}),
{

})(Dashboard));