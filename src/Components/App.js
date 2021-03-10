import React from 'react';
//import PropTypes from 'prop-types';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import MainWindow from './MainWindow/MainWindow';
import AdminSetup from './AdminSetup/AdminSetup';
import Auth from './Auth/Auth';

import { connect } from 'react-redux';
import { initialRequest } from '../redux/actions/authActions';

export const url = 'http://localhost:8080';

class App extends React.Component {
  componentDidMount() {
    this.props.initialRequest();
  }

  render() {

    let page;

    if(this.props.fetchingAuthData) {
      page = (
        <div>
          <Header />
          <h1 style={{paddingTop: 200}}>Fetching auth data</h1>
        </div>
      );
    } else if(!this.props.adminExists) {
      page = (
        <div>
          <Header />
          <AdminSetup />
        </div>
      );
    } else if(!this.props.user) {
      page = (
        <div>
          <Header />
          <Auth />
        </div>
        );
    } else {
      page = (
        <div>
          <Header />
          <Sidebar />
          <MainWindow />
        </div>
      );
    }

    return (
      page
    );
  }
};

App.propTypes = {};

//export default App;

const mapStateToProps = state => ({
  user: state.auth.user,
  adminExists: state.auth.adminExists,
  fetchingAuthData: state.auth.fetchingAuthData,
});

export default connect(mapStateToProps, { initialRequest })(App);
