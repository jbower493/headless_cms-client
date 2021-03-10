import React from 'react';
//import PropTypes from 'prop-types';
import ContentTypesHome from './ContentTypes/ContentTypesHome';

class MainWindow extends React.Component {
  render() {
    return (
      <div className="main-window">
        <ContentTypesHome />
      </div>
    );
  }
}

MainWindow.propTypes = {};

export default MainWindow;
