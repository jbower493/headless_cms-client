/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*----------Components, sections, modules----------*/
import AdminSetupForm from './forms/adminSetupForm';

/*----------Shared components----------*/

/*----------Actions----------*/
import { setupAdmin, checkForAdmin } from 'containers/auth/actions';

/*----------Component start----------*/
class AdminSetup extends Component {
  constructor(props) {
    super(props);

    this.handleAdminSetup = this.handleAdminSetup.bind(this);
  }

  handleAdminSetup(values) {
    const { setupAdmin } = this.props;

    setupAdmin(values);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      auth_admin_setup_status,
      checkForAdmin
    } = this.props;

    if (auth_admin_setup_status === 'success' && prevProps.auth_admin_setup_status === 'loading') {
      checkForAdmin();
    }
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
  auth_admin_exists_data: state.auth.auth_admin_exists_data,
  auth_admin_setup_status: state.auth.auth_admin_setup_status,
  auth_admin_setup_error: state.auth.auth_admin_setup_error
}),
{
  setupAdmin,
  checkForAdmin
})(AdminSetup));