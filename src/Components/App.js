import React from 'react';
//import PropTypes from 'prop-types';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import MainWindow from './MainWindow/MainWindow';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <MainWindow />
      </div>
    );
  }
};

App.propTypes = {};

export default App;
