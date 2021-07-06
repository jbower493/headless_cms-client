/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*----------Components, sections, modules----------*/
import AdminSetupForm from './forms/adminSetupForm';

/*----------Shared components----------*/

/*----------Actions----------*/

/*----------Component start----------*/
class AdminSetup extends Component {
  constructor(props) {
    super(props);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    const { auth_admin_exists_data, history } = this.props;
    if (auth_admin_exists_data) {
      //history.push('/login');
    }
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    /*----------Render component----------*/
    return (
      <div className={`adminSetup`}>
        <AdminSetupForm handleSubmit={(values) => console.log(values)} />
      </div>
    );
  }
};

/*----------Component end----------*/

export default withRouter(connect((state) => ({
  auth_admin_exists_data: state.auth.auth_admin_exists_data
}),
{

})(AdminSetup));