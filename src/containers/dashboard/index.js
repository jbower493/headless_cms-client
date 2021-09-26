/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/

/*----------Actions----------*/

/*----------Component start----------*/
class Dashboard extends Component {

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {

    /*----------Render component----------*/
    return (
      <div className={`dashboard`}>
        <h3 className={`dashboard__heading`}>Dashboard</h3>
        <section className={`dashboard__container`}>
          Welcome to the Headless CMS dashboard. Use the sidebar menu to start working with your content.
        </section>
      </div>
    );
  }
};

/*----------Component end----------*/
export default withRouter(connect((state) => ({

}),
{

})(Dashboard));