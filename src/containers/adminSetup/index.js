/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*----------Components, sections, modules----------*/
import AdminSetupForm from './forms/adminSetupForm';

/*----------Shared components----------*/
import RequestLoader from 'components/Loaders/RequestLoader';

/*----------Actions----------*/
import { setupAdmin, checkForAdmin } from 'containers/auth/actions';
import { setNotification } from 'components/Notification/actions';

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
    const {
      auth_admin_setup_status,
      auth_admin_setup_error,
      setNotification,
      checkForAdmin
    } = this.props;

    if (auth_admin_setup_status === 'error' && prevProps.auth_admin_setup_status === 'loading') {
      const { error } = auth_admin_setup_error;
      setNotification('error', error);
    }

    if (auth_admin_setup_status === 'success' && prevProps.auth_admin_setup_status === 'loading') {
      checkForAdmin();
      setNotification('success', 'Admin User successfully created');
    }
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
  auth_admin_exists_data: state.auth.auth_admin_exists_data,
  auth_admin_setup_status: state.auth.auth_admin_setup_status,
  auth_admin_setup_error: state.auth.auth_admin_setup_error
}),
{
  setupAdmin,
  checkForAdmin,
  setNotification
})(AdminSetup));