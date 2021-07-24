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

import { setNotification } from 'components/Notification/actions';

/*----------Component start----------*/
class App extends Component {
  constructor(props) {
    super(props);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    const { checkForAdmin, getUser } = this.props;

    checkForAdmin();
    getUser();
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const {
      auth_admin_exists_status,
      auth_admin_exists_data,
      auth_user_status,
      auth_user_data,
      notification_data,

      setNotification
    } = this.props;

    const getLoadingStatus = () => {
      if (!auth_user_status || auth_user_status === 'loading' || !auth_admin_exists_status || auth_admin_exists_status === 'loading') {
        return 'loading';
      }
      if (auth_user_status === 'error' || auth_admin_exists_status === 'error') {
        return 'error';
      }
      return 'success';
    };

    const renderApp = () => {
      switch (getLoadingStatus()) {
        case 'loading': return <RequestLoader />;
        case 'error': return <PageError />;
        default: return (
          <BrowserRouter>
            <Header />
            <Router />
          </BrowserRouter>
        );
      }
    };

    /*----------Render component----------*/
    return (
      <div className={`app`}>
        {renderApp()}
        {notification_data && <Notification />}
        <button onClick={() => {
          setNotification('info', 'This shit is fucked bro');
        }}>Hello</button>
      </div>
    );
  }
};

/*----------Component end----------*/

export default connect((state) => ({
  auth_admin_exists_status: state.auth.auth_admin_exists_status,
  auth_admin_exists_data: state.auth.auth_admin_exists_data,
  auth_user_status: state.auth.auth_user_status,
  auth_user_data: state.auth.auth_user_data,
  notification_data: state.notification.notification_data
}),
{
  checkForAdmin,
  getUser,

  setNotification
})(App);