/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

/*----------Components, sections, modules----------*/
import Header from 'containers/header/header';
import Router from 'router/router';

/*----------Shared components----------*/
import RerquestLoader from 'components/Loaders/RequestLoader/requestLoader';
import PageError from 'components/Errors/PageError/pageError';

/*----------Actions----------*/
import { checkForAdmin, getUser } from 'containers/auth/actions';
import RequestLoader from 'components/Loaders/RequestLoader/requestLoader';

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
      auth_user_data
    } = this.props;
    console.log('Hit the app', auth_admin_exists_status)
    const renderApp = () => {
      return (
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      );
    };

    const renderPage = () => {
      if (!auth_user_status || auth_user_status === 'loading' || !auth_admin_exists_status || auth_admin_exists_status === 'loading') {
        return <RequestLoader />;
      }
      if (auth_user_status === 'error' || auth_admin_exists_status === 'error') {
        return <PageError />;
      }
      return renderApp();
    };

    /*----------Render component----------*/
    return (
      <div className={`app`}>
        {renderPage()}
      </div>
    );
  }
};

/*----------Component end----------*/

export default connect((state) => ({
  auth_admin_exists_status: state.auth.auth_admin_exists_status,
  auth_admin_exists_data: state.auth.auth_admin_exists_data,
  auth_user_status: state.auth.auth_user_status,
  auth_user_data: state.auth.auth_user_data
}),
{
  checkForAdmin,
  getUser
})(App);