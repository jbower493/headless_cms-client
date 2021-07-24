/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*----------Components, sections, modules----------*/
import AdminSetupForm from './forms/adminSetupForm';

/*----------Shared components----------*/

/*----------Actions----------*/
import { setupAdmin } from 'containers/auth/actions';

/*----------Component start----------*/
class AdminSetup extends Component {
  constructor(props) {
    super(props);

    this.handleAdminSetup = this.handleAdminSetup.bind(this);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  handleAdminSetup(values) {
    const { setupAdmin } = this.props;

    setupAdmin(values);
  }

  render() {
    const { handleAdminSetup } = this;

    /*----------Render component----------*/
    return (
      <div className={`adminSetup`}>
        <AdminSetupForm handleSubmit={handleAdminSetup} />
      </div>
    );
  }
};

/*----------Component end----------*/

export default withRouter(connect((state) => ({
  auth_admin_exists_data: state.auth.auth_admin_exists_data
}),
{
  setupAdmin
})(AdminSetup));