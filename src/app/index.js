/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

/*----------Components, sections, modules----------*/
import Header from 'containers/header';
import Router from 'router/router';

/*----------Shared components----------*/
import RequestLoader from 'components/Loaders/RequestLoader';
import PageError from 'components/Errors/PageError';
import Notification from 'components/Notification';

/*----------Actions----------*/
import { checkForAdmin, getUser } from 'containers/auth/actions';

/*----------Component start----------*/
class App extends Component {

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    const { checkForAdmin, getUser } = this.props;

    checkForAdmin();
    getUser();
  }

  render() {
    const {
      auth_admin_exists_status,
      auth_user_status,
      notification_data
    } = this.props;

    const getLoadingStatus = () => {
      if (!auth_user_status || auth_user_status === 'loading' || !auth_admin_exists_status || auth_admin_exists_status === 'loading') {
        return 'loading';
      }
      if (auth_admin_exists_status === 'error') {
        return 'error';
      }
      return 'success';
    };

    const renderApp = () => {
      switch (getLoadingStatus()) {
        case 'error': return <PageError />;
        case 'loading': return <div className={`mainLoaderContainer`}><RequestLoader /></div>;
        case 'sucess':
        default: return <Router />;
      }
    };

    /*----------Render component----------*/
    return (
      <div className={`app`}>
        <BrowserRouter>
          <Header />
          {renderApp()}
        </BrowserRouter>
        {notification_data && <Notification />}
      </div>
    );
  }
};

/*----------Component end----------*/
export default connect((state) => ({
  auth_admin_exists_status: state.auth.auth_admin_exists_status,
  auth_user_status: state.auth.auth_user_status,
  notification_data: state.notification.notification_data
}),
{
  checkForAdmin,
  getUser
})(App);